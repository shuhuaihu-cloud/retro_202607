const asset = (path) => encodeURI(import.meta.env.BASE_URL + path);

export default class App {
  constructor(el) {
    this.el = el;
    this.story = [
      { 
        id: 'cover',
        title: '現代的另類想像',
        subtitle: '1900–1930年代上海建築案例',
        type: 'hero',
        meta: [
          '簡報人：Sam',
          '簡報日期：2026-07-29'
        ]
      },
      {
        id: 'toc',
        title: '目錄',
        type: 'toc',
        sections: [
          {
            title: '1. 建築學名詞',
            items: [
              '概念：尺度大小',
              '建築師：鄔達克',
              '風格：折衷主義與 Art Deco'
            ]
          },
          {
            title: '2. 上海建築',
            items: [
              '租界地圖與歷史脈絡',
              '榮宅',
              '外灘源與真光大樓',
              '孫科別墅',
              '吳同文住宅'
            ]
          },
          {
            title: '3. 個人作品', 
          items: [
            ]
          }  
        ]
      },
      {
        id: 'gallery',
        title: '上海常見景點',
        type: 'gallery',
        images: [
          '上海常見景點/截圖 2026-07-26 下午6.58.14.jpg',
          '上海常見景點/截圖 2026-07-26 下午6.58.43.jpg',
          '上海常見景點/截圖 2026-07-26 下午6.59.03.jpg',
          '上海常見景點/截圖 2026-07-26 下午6.59.15.jpg',
          '上海常見景點/截圖 2026-07-26 下午6.59.27.jpg'
        ]
      },
      {
        id: 'term-scale',
        title: '概念：尺度大小',
        type: 'section',
        content: [
          '尺度指建築與人體、環境之間的比例關係',
          '不同尺度營造出宏偉、莊嚴或親切的空間感受'
        ],
        images: [
          '尺度大小/Basilica_di_San_Pietro_in_Vaticano_September_2015-1a.jpg'
        ]
      },
      {
        id: 'term-scale-2',
        title: '概念：尺度大小',
        type: 'section',
        content: [
          '政治大學：商學院、綜合院館與行政大樓的量體對比',
        ],
        images: [
          '尺度大小/retro_202607_nccu_business.jpg',
          '尺度大小/retro_202607_nccu_comprehensive.jpg',
          '尺度大小/retro_202607_nccu_executive.jpg'
        ]
      },
      {
        id: 'term-scale-3',
        title: '概念：尺度大小',
        type: 'section',
        content: [
          '行政院：辦公空間、廊道與樓梯所塑造的機構性尺度',
        ],
        images: [
          '尺度大小/retro_202607_executive_yuan_outlook.jpg',
          '尺度大小/retro_202607_executive_yuan_office1.jpg',
          '尺度大小/retro_202607_executive_yuan_office2.jpg',
          '尺度大小/retro_202607_executive_yuan_stairs.jpg'
        ]
      },
      {
        id: 'term-architect',
        title: '建築師：鄔達克',
        type: 'section',
        content: [
          '鄔達克（László Hudec）——斯洛伐克裔匈牙利籍建築師',
          '1918 年抵達上海，執業至 1947 年，全盛期為 1920–30 年代',
          '孫科別墅、吳同文住宅（綠房子）、真光大樓皆出自其手'
        ],
        images: [
          '鄔達克/hudec_portrait_1934.jpg'
        ]
      },
      {
        id: 'term-architect-2',
        title: '建築師：鄔達克',
        type: 'section',
        content: [
          '1918 年因俄國內戰輾轉抵達上海，先入美籍建築師克利洋行，1925 年自立開業',
          '在上海設計逾百幢建築，其中三十餘幢列為上海市優秀歷史建築',
          '代表作：國際飯店（1934，22 層，落成後長期為遠東最高建築）、大光明電影院、慕爾堂'
        ],
        images: [
          '鄔達克/IMG20260726205458.jpg',
          '鄔達克/IMG20260726205620.jpg'
        ]
      },
      {
        id: 'term-architect-3',
        title: '建築師：鄔達克',
        type: 'section',
        content: [
          '他不是風格的信徒：同一雙手交出西班牙式自宅、Art Deco 辦公樓與現代主義住宅',
          '1947 年離開上海，先後移居盧加諾、羅馬，1950 年定居柏克萊，1958 年逝於加州'
        ],
        images: [
          '鄔達克/IMG_20260726_212249.jpg',
          '鄔達克/IMG_20260726_212306.jpg'
        ]
      },
      {
        id: 'term-style',
        title: '風格：折衷主義與 Art Deco',
        type: 'section',
        content: [
          '折衷主義——不追求風格純粹，依業主意向與場地條件調度歷史語彙',
          'Art Deco——1920–30 年代盛行的裝飾藝術，強調幾何線條與現代感',
          '「Art Deco」之名源自 1925 年巴黎萬國裝飾藝術與現代工業博覽會',
          '兩者在當時的上海同時流行，甚至並存於同一幢建築之上'
        ],
        images: [
          '折衷主義/9KWXBNGUWKnJAMNeUmK2uT.jpg',
          '折衷主義/art-deco-centenary-sq_dezeen_2364_col_0-852x852.jpg',
          '折衷主義/o-que-e-arquitetura-ecletica_11.jpg'
        ]
      },
      {
        id: 'shanghai-map',
        title: '上海地圖與租界',
        type: 'section',
        content: [
          '1843 年上海開埠，英租界劃定於縣城以北，法租界、美租界隨後設立',
          '1863 年英、美租界合併為公共租界；1899 年 5 月公共租界大擴張，西界抵靜安寺',
          '公共租界與法租界以洋涇浜（今延安東路）、長浜（今延安中路）為界',
          '本次三個住宅案例都落在這波西擴與越界築路所開拓的西區版圖上'
        ],
        images: [
          '上海地圖/shanghai_map.jpg',
          '上海地圖/Seal_of_the_Shanghai_International_Settlement_pre-WWI.svg.webp'
        ]
      },
      {
        id: 'rong-zhai',
        title: '榮宅',
        type: 'villa',
        preview: '榮宅/retro_202607_rong_external.jpg',
        details: {
          '歷史背景': '榮宗敬（1873–1938）——麵粉大王與棉紗大王',
          '建築師': '陳椿江（1918 年榮宗敬購入後改建設計）；原屋 1908 年由外僑興建，設計者不詳',
          '規劃與佈局': '公共租界西區（原西摩路，今陝西北路）的典型花園洋房',
          '立面設計': '折衷主義風格，主立面兩層列柱敞廊具法國古典主義特徵',
          '建築語言': '法國古典主義與折衷風格的融合；彩色玻璃與牆磚全由歐洲進口'
        },
        links: [
          { url: 'https://www.youtube.com/watch?v=ZbX73-QJ_UE', label: '榮宅花磚' },
          { url: 'https://www.youtube.com/watch?v=cuLSbyPzdjQ', label: '王家衛介紹' }
        ]
      },
      {
        id: 'rong-zhai-photos',
        title: '榮宅：室內與細部',
        type: 'section',
        content: [
          '彩色玻璃與牆磚全數自歐洲進口，宴會廳上方另設彩色玻璃天頂',
          '玻璃圖案各有講究：有的隱喻榮氏創業歷程，有的近似教堂花窗',
          '底樓宴會廳與客廳分列甬道兩側，接待與家居動線因此得以分開'
        ],
        images: [
          '榮宅/retro_202607_rong_internal.jpg',
          '榮宅/retro_202607_rong_internal_roof.jpg',
          '榮宅/retro_202607_internal_door.jpg',
          '榮宅/retro_202607_rong_fire_cache.jpg'
        ]
      },
      {
        id: 'rong-zhai-exhibition',
        title: '榮宅：從私宅到展場',
        type: 'section',
        content: [
          '榮宗敬在此居住約二十年，1938 年初離開上海',
          '2004 年列為上海市優秀歷史建築，2014 年列為上海市文物保護單位',
          'Prada 自 2011 年起歷時六年修繕，2017 年 10 月 12 日作為文化活動空間對外開放'
        ],
        images: [
          '榮宅/retro_202607_exhibition.jpg',
          '榮宅/retro_202607_exhibition2.jpg',
          '榮宅/retro_202607_exhibition3.jpg'
        ]
      },
      {
        id: 'bund-source',
        title: '外灘源與真光大樓',
        type: 'villa',
        preview: '外灘源/light_building.jpg',
        details: {
          '地點與意義': '外灘源（圓明園路一帶）保有外灘地區最早的建築群，1848 年英國領事館最先在此興建，是外灘的起點',
          '真光大樓': '鄔達克設計，1930 年領照、1932 年竣工；原為浸會書局所有，「真光」得名於其《真光》月刊，西側與廣學會的廣學大樓平面連通',
          '建築特徵': '裝飾藝術（Art Deco）風格，強調豎向線條，壁柱截面作皇冠形與銳角三角形；真光 9 層、廣學 8 層',
          '文化意義': '出版與辦公機構的大樓，見證上海現代都市文明，也顯示鄔達克從住宅延伸到都市建築的軌跡'
        }
      },
      {
        id: 'bund-source-rock-bund',
        title: '外灘源：洛克·外灘源',
        type: 'section',
        content: [
          '範圍涵蓋圓明園路、北京東路、虎丘路一帶，是上海歷史最悠久的街區之一',
          '圓明園路為外灘源一期改造區域，今以「洛克·外灘源」之名重新開放',
          '真光大樓與廣學大樓 1994 年同列第二批上海市優秀歷史建築'
        ],
        images: [
          '外灘源/retro_202607_rock_bund.jpg'
        ]
      },
      {
        id: 'bund-source-photos',
        title: '外灘源與真光大樓',
        type: 'section',
        images: [
          '外灘源/IMG20260621161727.jpg',
          '外灘源/IMG20260621162143.jpg'
        ]
      },
      {
        id: 'bund-source-photos-2',
        title: '外灘源與真光大樓',
        type: 'section',
        images: [
          '外灘源/retro_202607_shanghai_light_building.jpg',
          '外灘源/IMG20260726205458.jpg',
        ]
      },
      {
        id: 'sun-ke-villa',
        title: '孫科別墅',
        type: 'villa',
        preview: '孫科別墅/retro_202607_sunke_outlook.jpg',
        details: {
          '歷史背景': '鄔達克為自己設計的自宅，後因慕爾堂資金危機由孫科出資相助，遂以近乎餽贈的價格轉讓',
          '建築師': '鄔達克 (László Hudec)，1931 年建成',
          '規劃與佈局': '哥倫比亞住宅圈內（原哥倫比亞路 22 號），假三層磚木結構，附私人花園',
          '立面設計': '三個尖券門洞與依次排開的圓形拱門，四扇落地大窗拱衛中央鑄鐵欄杆陽台',
          '建築語言': '以西班牙式為主，混合意大利文藝復興與巴洛克元素的折衷手法'
        },
        links: [
          { url: 'https://www.youtube.com/watch?v=huvNe0zRpkQ', label: '孫科別墅展覽' }
        ]
      },
      {
        id: 'sun-ke-villa-photos',
        title: '孫科別墅：室內與細部',
        type: 'section',
        content: [
          '建築面積約 1051 平方公尺，假三層磚木結構，屋面覆紅色筒瓦',
          '門洞、拱圈與樓梯構成層層轉折的入口序列，尺度始終維持在住宅的親密感',
          '1951 年由上海生物製品研究所徵用，1989 年列為上海市文物保護單位與第一批優秀歷史建築，2020 年 11 月一層對外開放'
        ],
        images: [
          '孫科別墅/retro_202607_sunke_hall.jpg',
          '孫科別墅/retro_202607_sunke_stairs.jpg',
          '孫科別墅/retro_202607_sunke_bunk.jpg'
        ]
      },
      {
        id: 'wu-tongwen-residence',
        title: '吳同文住宅 / 綠房子',
        type: 'villa',
        preview: '吳同文/wutongwen.jpg',
        details: {
          '歷史背景': '顏料商吳同文（1908–1966）的夢想之屋，因銷售軍用綠色顏料致富',
          '建築師': '鄔達克 (László Hudec)，1937–38 年落成，為其在上海最後幾件重要作品之一',
          '規劃與佈局': '銅仁路、北京西路路口西南角的不規則轉角地塊，四層鋼筋混凝土結構',
          '立面設計': '弧形轉角大銅窗與通長平台銅欄杆，綠色釉面磚外牆，外觀如停泊的郵輪',
          '建築語言': '現代主義風格，局部帶裝飾藝術特徵，具流線型（Streamline Moderne）意象'
        },
        links: [
          { url: 'https://www.youtube.com/watch?v=ikIKChSjE1c&t=1s', label: '吳同文住宅：上海第一豪宅' }
        ]
      },
      {
        id: 'evolution',
        title: '風格演進軌跡',
        type: 'timeline',
        events: [
          '折衷主義　榮宅（1908／1918）——調度古典柱式與法式敞廊，以歷史語彙證明身份',
          '西班牙式與文藝復興的混合　孫科別墅（1931）——風格仍是引用，但已從都市體面轉向郊區生活',
          '裝飾藝術 Art Deco　真光大樓（1932）——裝飾退為幾何線條，垂直性成為現代都市的表情',
          '現代主義 Modernism　綠房子（1937–38）——形式來自機能與技術，郵輪意象取代歷史語彙'
        ]
      },
      {
        id: 'personal_artwork',
        title: '個人作品',
        type: 'section',
        images: [
          '個人作品/FB_IMG_1785127207776.jpg'
        ]
      },
      {
        id: 'chronology',
        title: '歷史脈絡',
        type: 'timeline',
        events: [
          '1843　上海開埠，英租界劃定於縣城以北',
          '1840 年代末　英國領事館在今圓明園路一帶興建，外灘最早的建築群由此開始',
          '1899　公共租界大擴張，西界抵靜安寺，西摩路一帶成為新興住宅地帶',
          '1908　榮宅前身落成——外僑的三層花園別墅，折衷主義',
          '1918　鄔達克抵達上海；同年榮宗敬購入榮宅，聘陳椿江改建',
          '1925　巴黎裝飾藝術博覽會確立 Art Deco 之名；鄔達克於上海自立開業',
          '1931　孫科別墅建成，原為鄔達克自宅',
          '1932　真光大樓竣工，Art Deco 進入都市高層建築',
          '1934　國際飯店落成，鄔達克職業生涯的頂峰',
          '1937–38　綠房子落成，現代主義住宅的極致',
          '1947　鄔達克離開上海'
        ]
      }
    ];

    this.render();
  }

  render() {
    let html = '';
    this.story.forEach(sectionData => {
      html += this.renderSection(sectionData);
    });
    this.el.innerHTML = html;
  }

  renderSection(data) {
    switch(data.type) {
      case 'hero':
        return (
          '<section id="' + data.id + '" class="hero">' +
            '<div class="hero-text-block">' +
              '<h1 class="hero-title">' + data.title + '</h1>' +
              '<p class="hero-subtitle">' + data.subtitle + '</p>' +
            '</div>' +
            (data.meta ?
              '<div class="hero-meta">' +
                data.meta.map(item => '<span class="hero-meta-item">' + item + '</span>').join('') +
              '</div>'
            : '') +
          '</section>'
        );
      case 'section':
        return (
          '<section id="' + data.id + '" class="story-section">' +
            '<h2>' + data.title + '</h2>' +
            (data.content ?
              '<ul class="story-list">' +
                data.content.map(item => '<li>' + item + '</li>').join('') +
              '</ul>'
            : '') +
            (data.images ?
              '<div class="topic-gallery' + (data.images.length === 1 ? ' topic-gallery--single' : '') + (data.images.length === 4 ? ' topic-gallery--quad' : '') + '">' +
                data.images.map((name, index) => (
                  '<img class="topic-image" src="' + asset('images/' + name) + '" alt="' + data.title + ' ' + (index + 1) + '" loading="lazy" />'
                )).join('') +
              '</div>'
            : '') +
          '</section>'
        );
      case 'gallery':
        return (
          '<section id="' + data.id + '" class="story-section">' +
            '<h2>' + data.title + '</h2>' +
            '<div class="gallery-grid">' +
              data.images.map((name, index) => (
                '<figure class="gallery-item">' +
                  '<img class="gallery-image" src="' + asset('images/' + name) + '" alt="作品 ' + (index + 1) + '" loading="lazy" />' +
                '</figure>'
              )).join('') +
            '</div>' +
          '</section>'
        );
      case 'timeline':
        return (
          '<section id="' + data.id + '" class="story-section">' +
            '<h2>' + data.title + '</h2>' +
            '<div class="story-timeline">' +
              data.events.map(event => (
                '<div class="timeline-item">' +
                  '<div class="timeline-dot"></div>' +
                  '<p class="timeline-text">' + event + '</p>' +
                '</div>'
              )).join('') +
            '</div>' +
          '</section>'
        );
      case 'villa':
        return (
          '<section id="' + data.id + '" class="story-section">' +
            '<h2>' + data.title + '</h2>' +
            '<div class="villa-grid">' +
              '<div class="villa-card">' +
                Object.entries(data.details).map(([key, value]) => (
                  '<div class="detail-block">' +
                    '<h3>' + key + '</h3>' +
                    '<p>' + value + '</p>' +
                  '</div>'
                )).join('') +
                (data.links ?
                  '<div class="villa-links">' +
                    data.links.map((link, index) => (
                      '<a class="villa-link" href="' + link.url + '" target="_blank" rel="noopener noreferrer">' +
                        (link.label || ('參考影片' + (data.links.length > 1 ? ' ' + (index + 1) : ''))) +
                      '</a>'
                    )).join('') +
                  '</div>'
                : '') +
              '</div>' +
              (data.preview ?
                '<div class="villa-image-card">' +
                  '<img class="villa-image" src="' + asset('images/' + data.preview) + '" alt="' + data.title + '" loading="lazy" />' +
                '</div>'
              : '<div class="placeholder-card">圖片預覽區</div>') +
            '</div>' +
          '</section>'
        );
      case 'comparison':
        return (
          '<section id="' + data.id + '" class="story-section">' +
            '<h2>' + data.title + '</h2>' +
            '<div class="comparison-card">' +
              '<table class="comparison-table">' +
                '<thead>' +
                  '<tr>' +
                    data.headers.map(header => '<th>' + header + '</th>').join('') +
                  '</tr>' +
                '</thead>' +
                '<tbody>' +
                  data.rows.map(row => (
                    '<tr>' +
                      row.map(cell => '<td>' + cell + '</td>').join('') +
                    '</tr>'
                  )).join('') +
                '</tbody>' +
              '</table>' +
            '</div>' +
          '</section>'
        );
      case 'toc':
        return (
          '<section id="' + data.id + '" class="story-section">' +
            '<h2>' + data.title + '</h2>' +
            '<div class="toc-card">' +
              '<div class="toc-content">' +
                data.sections.map(group => {
                  const titleMatch = group.title.match(/^(\d+\.\s*)/);
                  const number = titleMatch ? titleMatch[1] : '';
                  const label = titleMatch ? group.title.slice(titleMatch[0].length) : group.title;
                  return (
                    '<div class="toc-group">' +
                      '<h3>' +
                        (number ? '<span class="toc-number">' + number + '</span>' : '') +
                        label +
                      '</h3>' +
                      '<ul class="toc-list">' +
                        group.items.map(item => '<li>' + item + '</li>').join('') +
                      '</ul>' +
                    '</div>'
                  );
                }).join('') +
              '</div>' +
              '<div class="toc-image-panel">' +
                '<div class="toc-image-frame">' +
                  '<img class="toc-image" src="' + asset('images/content_image.jpg') + '" alt="Shanghai villa reference image" />' +
                  '<a class="toc-image-link" href="https://www.youtube.com/shorts/nDBkDvbwFqI" target="_blank" rel="noopener noreferrer">' +
                    '<span>longchamp: 上海常見景點</span>' +
                  '</a>' +
                '</div>' +
              '</div>' +
            '</div>' +
          '</section>'
        );
      default:
        // 沒有對應的 case 就整節消失,而且畫面上不會有任何跡象。
        // 多半是 type 打錯字,所以留個線索指出是哪一節。
        console.warn(
          '[app] 未知的 section type「' + data.type + '」(id: ' + data.id + '),該節未渲染'
        );
        return '';
    }
  }
}
