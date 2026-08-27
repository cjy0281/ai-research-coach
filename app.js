const coaches = [
  {
    id: '01', title: '研究方向與題目訂定', problem: '我要研究什麼？', accent: '#e95d3f',
    starters: [
      '我只觀察到一個現象，請用提問幫我找出其中值得研究的問題，不要直接替我決定題目。',
      '我有一個感興趣的主題，請引導我從人物、時間、地點、原因與影響等角度，把興趣轉成可研究的問題。',
      '我的研究題目好像太大，請幫我辨認範圍過大的地方，並用問題引導我縮小研究對象與範圍。',
      '我已經有研究題目，請從明確性、可研究性、資料可得性與高中生可完成性四方面協助我檢查。'
    ]
  },
  {
    id: '02', title: '前言思考', problem: '為什麼值得研究？', accent: '#d8942c',
    starters: [
      '請用提問引導我說明為什麼會注意到這個研究現象，幫我整理出研究動機，但不要直接代寫。',
      '請幫我分辨研究背景、研究動機與研究目的的差異，並逐項問我需要補充的內容。',
      '請檢查我的研究目的是否和題目一致，指出不一致或太籠統之處，並引導我修改。',
      '請根據我提供的題目與想法，引導我形成清楚、可回答的研究問題，並檢查彼此是否重複。'
    ]
  },
  {
    id: '03', title: '文獻閱讀與整合', problem: '別人研究過什麼？', accent: '#90a83c',
    starters: [
      '請教我如何快速判斷一篇文獻是否與我的研究問題相關，並提供可實際使用的閱讀檢核問題。',
      '請引導我辨認這篇文獻的研究問題、方法、主要發現與限制，不要替我做完整摘要。',
      '我有多篇文獻筆記，請幫我找出它們相同、不同與互相矛盾的觀點，並提示我回查原文。',
      '請引導我依概念或觀點整合文獻，而不是一篇接一篇介紹，並檢查我的段落是否有自己的比較與判斷。'
    ]
  },
  {
    id: '04', title: '研究方法', problem: '我要用什麼證據回答？', accent: '#3ca988',
    starters: [
      '請根據我的研究問題，用提問協助我比較問卷、訪談、觀察與文本分析哪一種方法較合適。',
      '請檢查我的研究對象與抽樣方式能否回答研究問題，並提醒可能的偏差與限制。',
      '我正在設計問卷或訪談題目，請逐題檢查是否中立、清楚、一次只問一件事，並說明原因。',
      '請協助我把資料蒐集流程整理成可執行的步驟，並檢查研究倫理、同意與隱私保護。'
    ]
  },
  {
    id: '05', title: '資料分析', problem: '我的資料到底告訴我什麼？', accent: '#338ca5',
    starters: [
      '請先問我研究問題與資料形式，再引導我選擇合適的整理與分析方式，不要直接替我下結論。',
      '請幫我分辨資料中哪些是描述、哪些是解釋，並提醒我避免把相關誤認為因果。',
      '請引導我比較不同組別、題項或受訪者的共同點、差異與例外，並列出需要再查證的地方。',
      '請檢查我的圖表與文字解讀是否一致、標示是否完整，以及是否有超出資料支持範圍的推論。'
    ]
  },
  {
    id: '06', title: '結論反思', problem: '我的研究最後回答了什麼？', accent: '#5578bb',
    starters: [
      '請逐一對照我的研究問題與研究結果，協助我判斷每個問題是否都有證據支持的回答。',
      '請檢查我的結論是否只是重複結果，並用提問引導我說明研究發現的意義。',
      '請協助我辨認這項研究在樣本、方法、資料與推論上的限制，避免寫成空泛的自我批評。',
      '請引導我提出從研究結果與限制推導出的具體建議，並反思下一次研究可以如何改進。'
    ]
  },
  {
    id: '07', title: '引註與學術倫理', problem: '這樣使用別人的內容適當嗎？', accent: '#9069bb',
    starters: [
      '請逐句協助我判斷哪些內容屬於常識、自己的分析或他人的觀點，以及哪些地方需要正文引註。',
      '請幫我判斷這段內容應該直接引用、改寫或摘要，並提醒每種做法需要的引註方式。',
      '請檢查我的改寫是否仍太接近原文，指出問題類型並教我如何重新理解後用自己的話表達。',
      '請用學術倫理角度檢查我使用 AI、圖片、數據與網路資料的方式，列出需要揭露、授權或標註之處。'
    ]
  },
  {
    id: '08', title: 'APA / Citation Audit', problem: '我的引註與格式做對了嗎？', accent: '#c05b87',
    starters: [
      '請逐句判斷哪些內容需要正文引註，說明理由，並標出我需要補查原始來源的位置。',
      '請判斷我改寫、直接引用或使用他人內容的方式是否適當，並逐項說明要修正的問題。',
      '請依 APA 第 7 版逐筆檢查我的參考文獻格式，列出錯誤、修改建議與仍缺少的資訊。',
      '請逐筆核對正文引註與參考文獻是否相互對應，分別列出正文有但文末沒有、文末有但正文未引的項目。'
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
 
