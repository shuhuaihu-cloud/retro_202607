#!/usr/bin/env bash
#
# 把 public/images 底下過大的圖片就地壓縮成適合網頁的尺寸。
#
#   npm run optimize:images            # 掃描整個 public/images
#   npm run optimize:images -- 榮宅     # 只處理某個子資料夾
#
# 只用 macOS 內建的 sips,不需要安裝任何東西。
#
# 已經符合標準的檔案會被跳過,所以重複執行是安全的 —— 不會因為反覆
# 壓縮而累積畫質損失。

set -euo pipefail

MAX_EDGE=2000        # 長邊上限(px)。網站最大顯示約 1200px,留 Retina 餘裕
QUALITY=80           # JPEG 品質
SIZE_LIMIT=2097152   # 2 MB;尺寸已達標但仍過肥的檔案(例如未壓縮的 PNG)也會處理。
                     # 這個值要高於「已壓縮圖片」的最大值,否則每次執行都會重壓一次

cd "$(dirname "$0")/.."
TARGET="public/images/${1:-}"
[ -d "$TARGET" ] || { echo "找不到資料夾:$TARGET" >&2; exit 1; }

converted_png=()
processed=0
skipped=0
before_total=0
after_total=0

while IFS= read -r f; do
  bytes=$(stat -f%z "$f")
  edge=$(sips -g pixelWidth -g pixelHeight "$f" 2>/dev/null \
         | awk '/pixelWidth|pixelHeight/{if($2>m)m=$2}END{print m+0}')

  # PNG 一律處理。轉成 JPEG 是格式轉換而非重新壓縮,照片類內容通常能省
  # 一半以上,而且轉完副檔名就變了,下次執行會走 JPEG 的判斷,不會重複處理。
  is_png=false
  case "$f" in *.[Pp][Nn][Gg]) is_png=true ;; esac

  # JPEG 已經夠小就跳過,避免反覆壓縮累積畫質衰減
  if ! $is_png && [ "$edge" -le "$MAX_EDGE" ] && [ "$bytes" -lt "$SIZE_LIMIT" ]; then
    skipped=$((skipped + 1))
    continue
  fi

  out="${f%.*}.jpg"
  tmp="$(mktemp -t optimg).jpg"

  if ! sips -Z "$MAX_EDGE" -s format jpeg -s formatOptions "$QUALITY" \
            "$f" --out "$tmp" >/dev/null 2>&1; then
    echo "  ⚠ 轉檔失敗,已跳過:$f" >&2
    rm -f "$tmp"
    continue
  fi

  # 第二道防線:尺寸沒縮、體積也沒明顯變小,就丟棄結果保留原檔。
  # 重新編碼一定會損失畫質,省不到 10% 就不值得。
  new_bytes=$(stat -f%z "$tmp")
  if $is_png; then
    # PNG 轉檔後反而變大(線稿、純色圖等 PNG 較擅長的內容),就保留原檔
    keep=$([ "$new_bytes" -lt "$bytes" ] && echo yes || echo no)
  elif [ "$edge" -le "$MAX_EDGE" ] && [ "$new_bytes" -gt $((bytes * 9 / 10)) ]; then
    keep=no
  else
    keep=yes
  fi
  if [ "$keep" = no ]; then
    rm -f "$tmp"
    skipped=$((skipped + 1))
    continue
  fi

  mv "$tmp" "$out"
  # PNG 轉成 JPEG 後,原檔要移除,並記下來提醒改程式碼裡的副檔名
  if [ "$f" != "$out" ]; then
    rm "$f"
    converted_png+=("${f#public/images/}")
  fi

  after=$(stat -f%z "$out")
  before_total=$((before_total + bytes))
  after_total=$((after_total + after))
  processed=$((processed + 1))

  printf '  %-56s %6sK → %6sK\n' \
    "$(echo "${f#public/images/}" | cut -c1-56)" \
    "$((bytes / 1024))" "$((after / 1024))"
done < <(find "$TARGET" -type f \( -iname '*.jpg' -o -iname '*.jpeg' -o -iname '*.png' \) | sort)

echo
if [ "$processed" -eq 0 ]; then
  echo "沒有需要處理的圖片(已跳過 $skipped 張符合標準的)。"
else
  echo "已處理 $processed 張,跳過 $skipped 張。"
  echo "總計 $((before_total / 1048576)) MB → $((after_total / 1048576)) MB"
fi

# PNG 轉檔會改變副檔名,程式碼裡的路徑必須跟著改,否則會 404
if [ "${#converted_png[@]}" -gt 0 ]; then
  echo
  echo "⚠  以下 PNG 已轉為 JPEG,請更新 src/app.js 裡的副檔名:"
  for p in "${converted_png[@]}"; do echo "     $p"; done
  echo
  echo "   改完後用這行確認沒有漏掉:"
  echo "     grep -rn '\.png' src/"
fi
