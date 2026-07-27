const asset = (path) => encodeURI(import.meta.env.BASE_URL + path);

export default class App {
  constructor(el) {
    this.el = el;
    this.story = [
      { 
        id: 'cover',
        title: '現代的另類想像',
        subtitle: '1930年代上海建築案例',
        type: 'hero'
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
              '榮宅',
              '外灘源',
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
          '上海常見景點/截圖 2026-07-26 下午6.58.14.png',
          '上海常見景點/截圖 2026-07-26 下午6.58.43.png',
          '上海常見景點/截圖 2026-07-26 下午6.59.03.png',
          '上海常見景點/截圖 2026-07-26 下午6.59.15.png',
          '上海常見景點/截圖 2026-07-26 下午6.59.27.png'
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
        images: [
          '尺度大小/retro_202607_executive_yuan_office1.jpg',
          '尺度大小/retro_202607_executive_yuan_office2.jpg',
          '尺度大小/retro_202607_executive_yuan_outlook.jpg',
          '尺度大小/retro_202607_executive_yuan_stairs.jpg'
        ]
      },
      {
        id: 'term-architect',
        title: '建築師：鄔達克',
        type: 'section',
        content: [
          '鄔達克（László Hudec）——匈牙利裔建築師',
          '活躍於 1920–30 年代的上海，作品風格多元',
          '孫科別墅、吳同文住宅（綠房子）皆出自其手'
        ],
        images: [
          '鄔達克/hudec_portrait_1934.png'
        ]
      },
      {
        id: 'term-architect-2',
        title: '建築師：鄔達克',
        type: 'section',
        images: [
          '鄔達克/IMG20260726205458.jpg',
          '鄔達克/IMG20260726205620.jpg'
        ]
      },
      {
        id: 'term-architect-3',
        title: '建築師：鄔達克',
        type: 'section',
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
          '折衷主義——融合多種歷史風格元素的設計手法',
          'Art Deco——1920–30 年代盛行的裝飾藝術，強調幾何線條與現代感'
        ],
        images: [
          '折衷主義/9KWXBNGUWKnJAMNeUmK2uT.jpg',
          '折衷主義/art-deco-centenary-sq_dezeen_2364_col_0-852x852.jpg',
          '折衷主義/o-que-e-arquitetura-ecletica_11.jpg'
        ]
      },
      {
        id: 'shanghai-map',
        title: '上海地圖',
        type: 'section',
        images: [
          '上海地圖/shanghai_map.jpg'
        ]
      },
      {
        id: 'rong-zhai',
        title: '榮宅',
        type: 'villa',
        preview: '榮宅/retro_202607_rong_external.jpg',
        details: {
          '歷史背景': '榮宗敬——麵粉大王',
          '建築師': '陳椿江 / 近代西方建築師',
          '規劃與佈局': '典型的花園洋房，法租界核心',
          '立面設計': '法國古典主義、折衷主義風格',
          '建築語言': '極致優雅的法國古典主義與折衷風格的融合'
        }
      },
      {
        id: 'rong-zhai-photos',
        title: '榮宅',
        type: 'section',
        images: [
          '榮宅/retro_202607_rong_internal.jpg',
          '榮宅/retro_202607_rong_internal_roof.jpg',
          '榮宅/retro_202607_internal_door.jpg',
          '榮宅/retro_202607_rong_fire_cache.jpg',
          '榮宅/retro_202607_exhibition.jpg',
          '榮宅/retro_202607_exhibition2.jpg',
          '榮宅/retro_202607_exhibition3.jpg'
        ]
      },
      {
        id: 'bund-source',
        title: '外灘源與真光大樓',
        type: 'villa',
        preview: '外灘源/retro_202607_rock_bund.png',
        details: {
          '地點與意義': '外灘源是上海近代都市空間的重要脈絡，代表外灘與租界文化的延伸',
          '真光大樓': '真光大樓是上海早期現代商業建築的重要代表，反映城市現代化與國際化的特質',
          '建築特徵': '高層商業建築、強烈的現代幾何感與立面節奏',
          '文化意義': '作為上海近代生活與商業文明的象徵，連結了城市記憶與建築演變'
        }
      },
      {
        id: 'bund-source-photos',
        title: '外灘源與真光大樓',
        type: 'section',
        images: [
          '外灘源/retro_202607_shanghai_light_building.jpg',
          '外灘源/IMG20260726205458.jpg'
        ]
      },
      {
        id: 'sun-ke-villa',
        title: '孫科別墅',
        type: 'villa',
        preview: '孫科別墅/retro_202607_sunke_outlook.jpg',
        details: {
          '歷史背景': '孫科與鄔達克的故事',
          '建築師': '鄔達克 (László Hudec)',
          '規劃與佈局': '西班牙同樂會、私人花園',
          '立面設計': '西班牙式巴洛克、古典拱門',
          '建築語言': '折衷主義與西班牙風格的過渡'
        }
      },
      {
        id: 'sun-ke-villa-photos',
        title: '孫科別墅',
        type: 'section',
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
        details: {
          '歷史背景': '顏料大王吳同文的夢想之屋',
          '建築師': '鄔達克 (László Hudec)（鄔達克在上海的收官之作）',
          '規劃與佈局': '三角地塊的極致利用，現代流線型',
          '立面設計': '弧形陽台、大面橫向舷窗、綠色面磚',
          '建築語言': '極致的現代主義、流線型現代主義 Streamline Moderne'
        }
      },
      {
        id: 'comparison',
        title: '外灘源與別墅樣式對比分析',
        type: 'comparison',
        headers: ['特性', '榮宅', '外灘源&nbsp;/&nbsp;真光大樓', '孫科別墅', '吳同文住宅'],
        rows: [
          ['功能定位', '豪宅與資本象徵', '商業與都市象徵', '住宅與政治空間', '住宅與現代生活追求'],
          ['建築語言', '法國古典主義與折衷風格', '現代商業建築', '折衷主義與西班牙風格', '現代主義與流線型'],
          ['城市意義', '展現洋房與資本力量', '彰顯上海現代化', '反映精英居住文化', '代表摩登上海新風格']
        ]
      },
      {
        id: 'conclusion',
        title: '結語',
        type: 'section',
        content: [
          '這三座別墅向我們揭示了民國時期上海的什麼面貌？',
          '西方先鋒思潮與東方海派文化的共生、交融與演變。'
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
                        '<span class="toc-title-text">' + label + '</span>' +
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
                  '<img class="toc-image" src="' + asset('images/content_image.png') + '" alt="Shanghai villa reference image" />' +
                  '<a class="toc-image-link" href="https://www.youtube.com/shorts/nDBkDvbwFqI" target="_blank" rel="noopener noreferrer">' +
                    '<span>Open reference video</span>' +
                  '</a>' +
                '</div>' +
              '</div>' +
            '</div>' +
          '</section>'
        );
      default:
        return '';
    }
  }
}
