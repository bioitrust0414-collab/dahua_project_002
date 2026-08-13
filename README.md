# dhl1688-vercel

這是一個以 **TanStack Start、React、Vite 與 Nitro** 建立的多頁式 SSR／品牌網站專案，包含大華醫事檢驗所的預防醫學介紹，以及 `/mal1688` 路徑下的 MitoActiveLife／MAL 活「粒」生活產品內容與教育頁面。

## 網站內容

根目錄首頁以「大華醫事檢驗所－精準醫學，數據實證」為主題，呈現健康檢查、基因檢測、過敏原檢測、專業諮詢、產品與預約等區段。MAL 子站則包含品牌故事、科學技術、產品配方、互動實驗室、價格方案與內部教育訓練沙盒。

| 路徑 | 內容 |
|---|---|
| `/` | 大華醫事檢驗所首頁 |
| `/mal1688/` | MAL 活「粒」生活品牌首頁 |
| `/mal1688/story` | 品牌初衷與研發理念 |
| `/mal1688/science` | 黃金協同技術 |
| `/mal1688/solutions` | 四重高效配方與產品結構 |
| `/mal1688/lab` | 成長灌溉實驗室互動頁 |
| `/mal1688/pricing` | 線上特惠訂購／補鈣方案 |
| `/mal1688/academy` | 內部教育訓練與合規指南沙盒 |

## 技術棧

- React 19
- TanStack Start、TanStack Router 與 TanStack Query
- Vite、Nitro 與 TypeScript
- Tailwind CSS 4、Radix UI 與 Lucide React
- Vercel SSR／Nitro preset

## 開發環境需求

建議使用 Node.js 22、npm 或 Bun。專案提供 `bun.lock`，而 `package.json` 定義的指令可直接使用 npm 執行。

```bash
npm install
npm run dev
```

常用指令：

```bash
npm run build       # 建立正式版產物
npm run preview     # 預覽建置結果
npm run lint        # 執行 ESLint
npm run format      # 使用 Prettier 格式化
```

## 專案結構

```text
src/
├── assets/              # 共用品牌與產品視覺素材
├── components/          # dahua、mal1688 與共用 UI 元件
├── data/                # 大華網站使用的內容資料
├── lib/                 # 錯誤處理、工具與共用邏輯
├── routes/              # TanStack file-based routes
│   ├── index.tsx        # 大華醫事檢驗所首頁
│   └── mal1688/         # MAL 子站路由
├── styles.css           # 全域樣式
├── router.tsx           # Router 設定
└── server.ts            # SSR server entry 與錯誤頁處理
public/                  # 靜態圖片與網站資源
vercel.json              # 安全標頭設定
vite.config.ts           # Vite／TanStack Start／Nitro 設定
```

## Vercel 部署

此專案使用 TanStack Start SSR，建置設定位於 `vite.config.ts`。部署至 Vercel 前請確認：

1. 使用 Node.js 22 或與專案相容的版本。
2. Vercel 專案指向正確的 repository 與 `main` 分支。
3. 所有外部連結、圖片資產與環境變數均已在正式環境設定。
4. `vercel.json` 的安全標頭未被平台層級設定覆蓋。

## 內容維護

新增頁面時，請在 `src/routes` 建立符合 TanStack file-based routing 規則的檔案，並在頁面 `head` 中補上適當的 title 與 description。MAL 子站的導覽連結集中於 `/mal1688` 相關路由，更新路徑時請同步檢查首頁卡片與導覽列。

健康、檢驗、營養與產品宣稱內容在正式發布前，應由負責單位完成事實、法規與品牌審核；`academy` 路由目前屬於內部教育訓練沙盒，不應在未確認權限與內容邊界前視為公開管理後台。

## 授權與使用

本儲存庫未提供明確的開源授權檔。除非另有書面授權，程式碼、品牌文案、產品資料與圖片素材均應視為保留所有權利，請勿未經授權複製或再發布。
