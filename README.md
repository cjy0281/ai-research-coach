# 高中小論文 AI Research Coach System

一個可直接部署到 GitHub Pages 的繁體中文公開入口網站。網站本身不呼叫 OpenAI API、不含任何 API Key，也不蒐集使用者資料；學生會從網站開啟對應的 ChatGPT GPT，使用自己的 ChatGPT 帳號與額度。

## 功能

- 8 支研究階段 AI 教練
- 每支 4 個 Conversation Starter，共 32 個
- 一鍵複製提問（含舊版瀏覽器備援方式）
- 每支教練的 ChatGPT 外部連結
- 手機、平板、桌機響應式版面
- 教師資源入口預留
- 純 HTML、CSS、JavaScript，沒有框架與建置步驟

## 本機執行

最簡單的方式是直接以瀏覽器開啟 `index.html`。若要在本機伺服器預覽，可在專案資料夾執行：

```powershell
python -m http.server 8000
```

再開啟 `http://localhost:8000`。若電腦沒有 Python，也可使用 VS Code 的 Live Server。

## 替換 8 個 GPT 連結

用文字編輯器開啟 `app.js`，找到：

```js
const GPT_LINKS = Object.fromEntries(coaches.map(({ id }) => [id, `https://chatgpt.com/g/g-REPLACE-ME-${id}`]));
```

將它替換為以下格式，貼上實際的 8 個 GPT 網址：

```js
const GPT_LINKS = {
  '01': 'https://chatgpt.com/g/https://chatgpt.com/g/g-6a6d95dca6508191a9738101f2c4daa2-yan-jiu-fang-xiang-yu-ti-mu-ding-ding-jiao-lian',
  '02': 'https://chatgpt.com/g/https://chatgpt.com/g/g-6a6d98a7c80c8191a82b8d0968602a7f-qian-yan-si-kao-jiao-lian-xiu-zheng-ban',
  '03': 'https://chatgpt.com/g/https://chatgpt.com/g/g-6a6d846b3f748191a4c89c33a50eb8ce-wen-xian-yue-du-yu-zheng-he-jiao-lian',
  '04': 'https://chatgpt.com/g/https://chatgpt.com/g/g-6a6d8c0b6db4819181efc8c511cb1637-yan-jiu-fang-fa-jiao-lian',
  '05': 'https://chatgpt.com/g/https://chatgpt.com/g/g-6a76aacbd37081918367991725d29d9f-zi-liao-fen-xi-jiao-lian-jia-wen-xian-bi-jiao',
  '06': 'https://chatgpt.com/g/https://chatgpt.com/g/g-6a6d91084edc8191ba8bac9c1c2d03fa-jie-lun-fan-si-jiao-lian',
  '07': 'https://chatgpt.com/g/https://chatgpt.com/g/g-6a6d92e0905081918608ecfebce7b7c4-yin-zhu-yu-xue-shu-lun-li',
  '08': 'https://chatgpt.com/g/https://chatgpt.com/g/g-6a6d9c9e5d748191ac5cbbad472c62b6-apa-yin-zhu-ge-shi-jiao-lian-gao-zhong-xiao-lun-wen-ban'
};
```

儲存後重新整理網頁即可。正式發布前，也可在 `app.js` 搜尋 `REPLACE-ME`，確認已無 placeholder。

## 部署到 GitHub Pages

1. 在 GitHub 建立新的公開 repository，例如 `ai-research-coach`。
2. 將 `index.html`、`styles.css`、`app.js` 與 `README.md` 上傳到 repository 根目錄。
3. 開啟 repository 的 **Settings → Pages**。
4. 在 **Build and deployment** 下將 Source 選成 **Deploy from a branch**。
5. Branch 選 `main`、資料夾選 `/(root)`，按 **Save**。
6. 等候約一至數分鐘，GitHub 會顯示公開網址，通常為 `https://帳號.github.io/ai-research-coach/`。

本專案只使用相對路徑，因此部署在 GitHub Pages 的子路徑時不需修改設定。

## 上線前檢查

- 搜尋並替換全部 `REPLACE-ME` 連結。
- 逐一展開 8 支教練。
- 每支至少測一次複製按鈕，並確認共 32 個 Starter。
- 逐一確認 8 個「進入 ChatGPT 教練」開啟正確 GPT。
- 用手機或瀏覽器窄視窗確認版面。
- 確認 GPT 的分享權限允許持有連結的學生使用。

## 安全與隱私

原始碼不應加入 API Key。若未來改版需要 API，請勿把密鑰寫在前端或 GitHub repository；此版本刻意不含 API 與後端，以維持零密鑰、低維護的公開入口。
