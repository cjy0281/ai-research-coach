const coaches = [
  {
    id: '01', title: '研究方向與題目訂定', problem: '我要研究什麼？', accent: '#e95d3f',
    starters: [
      '請先診斷我的研究想法做到哪一步，再一步一步引導我。',
      '我觀察到一個現象，請引導我判斷是否值得研究。',
      '我已有想研究的現象，請引導我形成並聚焦研究問題。',
      '請檢查我的研究方向、研究問題與題目是否一致且可研究。'
    ]
  },
  {
    id: '02', title: '前言思考', problem: '為什麼值得研究？', accent: '#d8942c',
    starters: [
      '請先診斷我的前言思考進度，再一步一步引導我。',
      '我已有研究題目，請引導我建立前言思考架構。',
      '我的前言思考卡住了，請針對卡住的部分引導我。',
      '請檢查我的前言思考是否完整、連貫且具有研究邏輯。'
    ]
  },
  {
    id: '03', title: '文獻閱讀與整合', problem: '別人研究過什麼？', accent: '#90a83c',
    starters: [
      '請先診斷我的文獻閱讀與整合進度，再一步一步引導我。',
      '我不知道該搜尋哪些文獻，請引導我建立搜尋策略。',
      '我已找到幾篇文獻，請引導我比較、分類並整理重點。',
      '請判斷目前文獻是否足以支撐我的研究，並找出可能缺少的文獻。'
    ]
  },
  {
    id: '04', title: '研究方法', problem: '我要用什麼證據回答？', accent: '#3ca988',
    starters: [
      '請先診斷我的研究方法思考進度，再一步一步引導我。',
      '我已有研究問題，請引導我判斷需要哪些證據。',
      '請檢查我的研究方法是否真的能回答研究問題。',
      ' 請檢查我的研究設計是否可信、合乎倫理，而且實際可行。'
    ]
  },
  {
    id: '05', title: '資料分析', problem: '我的資料到底告訴我什麼？', accent: '#338ca5',
    starters: [
      '請先診斷我的資料分析進度，再一步一步引導我。',
      '我已整理好資料，請引導我觀察、比較並解讀資料。',
      '請檢查我的資料分析是否有過度推論、忽略限制或與資料不一致。',
      '請引導我比較研究結果與既有文獻，並思考可能的解釋。'
    ]
  },
  {
    id: '06', title: '結論反思', problem: '我的研究最後回答了什麼？', accent: '#5578bb',
    starters: [
      '請先診斷我的結論反思進度，再一步一步引導我。',
      '請檢查我的研究問題是否真的已被研究結果回答。',
      '請引導我根據研究發現建立有證據支持的結論。',
      '請檢查我的結論與建議是否都有研究結果支持。'
    ]
  },
  {
    id: '07', title: '引註與學術倫理', problem: '這樣使用別人的內容適當嗎？', accent: '#9069bb',
    starters: [
      '請先診斷我的引註與學術倫理進度，再一步一步引導我。',
      '請引導我判斷哪些內容需要正文引註，並說明原因，同時列出建議引註的內文。',
      '請幫我判斷改寫、引用或使用他人內容的方式是否適當。',
      '請幫我判斷圖表、圖片或網路資料的使用與標示是否適當。'
    ]
  },
  {
    id: '08', title: 'APA / Citation Audit', problem: '我的引註與格式做對了嗎？', accent: '#c05b87',
    starters: [
      '請先診斷我的 APA 引註進度，再一步一步引導我。',
      '請引導我判斷文獻類型，再一步一步建立 APA 格式。',
      '我已有 APA 參考文獻格式，請幫我找出格式錯誤。',
      '請逐筆檢查正文引註與參考文獻是否正確且相互對應並一一列出。'
    ]
  }
];

const GPT_LINKS = {
  '01': 'https://chatgpt.com/g/g-6a6d95dca6508191a9738101f2c4daa2-yan-jiu-fang-xiang-yu-ti-mu-ding-ding-jiao-lian',
  '02': 'https://chatgpt.com/g/g-6a6d98a7c80c8191a82b8d0968602a7f-qian-yan-si-kao-jiao-lian-xiu-zheng-ban',
  '03': 'https://chatgpt.com/g/g-6a6d846b3f748191a4c89c33a50eb8ce-wen-xian-yue-du-yu-zheng-he-jiao-lian',
  '04': 'https://chatgpt.com/g/g-6a6d8c0b6db4819181efc8c511cb1637-yan-jiu-fang-fa-jiao-lian',
  '05': 'https://chatgpt.com/g/g-6a76aacbd37081918367991725d29d9f-zi-liao-fen-xi-jiao-lian-jia-wen-xian-bi-jiao',
  '06': 'https://chatgpt.com/g/g-6a6d91084edc8191ba8bac9c1c2d03fa-jie-lun-fan-si-jiao-lian',
  '07': 'https://chatgpt.com/g/g-6a6d92e0905081918608ecfebce7b7c4-yin-zhu-yu-xue-shu-lun-li',
  '08': 'https://chatgpt.com/g/g-6a6d9c9e5d748191ac5cbbad472c62b6-apa-yin-zhu-ge-shi-jiao-lian-gao-zhong-xiao-lun-wen-ban'
};
const coachGrid = document.querySelector('#coach-grid');

coachGrid.innerHTML = coaches.map((coach) => `
  <article class="coach-card" style="--accent:${coach.accent}">
    <button class="coach-summary" type="button" aria-expanded="false" aria-controls="coach-${coach.id}">
      <span class="coach-number">${coach.id}</span>
      <span class="coach-title"><small>AI COACH</small><strong>${coach.title}</strong><em>${coach.problem}</em></span>
      <span class="expand-icon" aria-hidden="true">＋</span>
    </button>
    <div class="coach-detail" id="coach-${coach.id}" hidden>
      <p class="starter-label">選一個最接近的起點</p>
      <div class="starter-list">
        ${coach.starters.map((starter, index) => `
          <div class="starter-item">
            <span>${String(index + 1).padStart(2, '0')}</span>
            <p>${starter}</p>
            <button class="copy-button" type="button" data-copy="${encodeURIComponent(starter)}" aria-label="複製第 ${index + 1} 個提問">複製</button>
          </div>`).join('')}
      </div>
      <a class="button coach-link" href="${GPT_LINKS[coach.id]}" target="_blank" rel="noopener noreferrer">進入 ChatGPT 教練 <span>↗</span></a>
      <p class="placeholder-note">目前為示範連結，發布前請依 README 替換。</p>
    </div>
  </article>`).join('');

document.querySelectorAll('.coach-summary').forEach((button) => {
  button.addEventListener('click', () => {
    const detail = document.querySelector(`#${button.getAttribute('aria-controls')}`);
    const isOpen = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!isOpen));
    detail.hidden = isOpen;
  });
});

const toast = document.querySelector('#toast');
let toastTimer;
document.querySelectorAll('.copy-button').forEach((button) => {
  button.addEventListener('click', async () => {
    const text = decodeURIComponent(button.dataset.copy);
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const area = document.createElement('textarea');
      area.value = text; area.style.position = 'fixed'; area.style.opacity = '0';
      document.body.append(area); area.select(); document.execCommand('copy'); area.remove();
    }
    button.textContent = '已複製'; button.classList.add('copied');
    toast.classList.add('show'); clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 1800);
    setTimeout(() => { button.textContent = '複製'; button.classList.remove('copied'); }, 1800);
  });
});

const resources = [
  {
    name: '能力地圖',
    href: '能力地圖.png',
    status: '開啟圖片'
  },
  {
    name: '32 Starters 總表',
    href: '32Starters.pdf',
    status: '開啟總表'
  },
  {
    name: '學習單'
  },
  {
    name: '教師版'
  },
  {
    name: '教學簡報'
  },
  {
    name: 'Kahoot'
  },
  {
    name: 'AI 使用倫理'
  }
];

document.querySelector('#resource-grid').innerHTML = resources.map((item, index) => {
  const content = `
    <span>${String(index + 1).padStart(2, '0')}</span>
    <strong>${item.name}</strong>
    <small>${item.status || 'COMING SOON'}</small>
  `;

  if (item.href) {
    return `
      <a
        class="resource-card"
        href="${item.href}"
        target="_blank"
        rel="noopener noreferrer"
      >
        ${content}
      </a>
    `;
  }

  return `
    <div class="resource-card">
      ${content}
    </div>
  `;
}).join('');
 
