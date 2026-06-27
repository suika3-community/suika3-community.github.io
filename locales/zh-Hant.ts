import type { Messages } from "./types";

export const zhHant: Messages = {
  nav: {
    downloads: "下載",
    docs: "文件",
    features: "功能",
    platforms: "平台",
    philosophy: "理念",
    lineage: "歷史",
    language: "語言",
  },

  languages: {
    en: "English",
    ja: "日本語",
    "zh-Hans": "简体中文",
    "zh-Hant": "繁體中文",
    es: "Español",
    ru: "Русский",
    fr: "Français",
    de: "Deutsch",
  },

  hero: {
    tagline: "Suika3 引擎",
    title1: "新世代",
    title2: "2D 遊戲與視覺小說引擎",
    subtitle:
      "Suika3 源於對行動裝置的深厚熱情 —— " +
      "那些被主流 3D 引擎所忽視的平台。" +
      "這是一款強大、可投入生產的遊戲引擎，專為視覺小說和各類 2D 遊戲而設計，" +
      "能在您選擇的任何平台上完美運行。",
    downloadBtn: "下載",
    docsBtn: "閱讀文件",
    codeLabel: "範例",
  },

  stats: {
    items: [
      { value: "60",  unit: "FPS",  label: "在 Raspberry Pi 上" },
      { value: "4.5", unit: "×",    label: "比直譯器快（JIT）" },
      { value: "25+", unit: "年",   label: "研發歷程" },
      { value: "10",  unit: "年 LTS", label: "最低支援保證" },
      { value: "1%",  unit: "CPU",  label: "Core Ultra 5 在 60fps 時" },
      { value: "2",   unit: "MB",   label: "二進位大小" },
      { value: "20+", unit: "平台", label: "桌面、行動、網頁及主機" },
    ],
  },

  features: {
    heading: "核心優勢",
    subheading: "上市速度、可移植性與可擴展性，全面兼顧的設計。",
    items: [
      {
        title: "行動優先",
        description:
          "核心使用 C 語言撰寫，Suika3 輕量高效，即便在低階裝置上也能出色運行。" +
          "在優先支援行動平台的同時，功能上毫不妥協。",
      },
      {
        title: "NovelML",
        description: "借助專為視覺小說設計的 DSL —— NovelML，簡化您的工作流程。",
      },
      {
        title: "Ray 腳本",
        description:
          "只擴展您需要的部分。即時執行類 JS 的自訂語言，" +
          "並可在發布建置時編譯為原生二進位檔案。",
      },
      {
        title: "高度可移植",
        description:
          "隨處部署：Windows、macOS、Linux、Steam Deck、iOS、Android、" +
          "WebAssembly、Xbox、PS5、Switch 等。",
      },
      {
        title: "GUI 與動畫 DSL",
        description: "使用專用 DSL 輕鬆設計您的 UI/UX。",
      },
    ],
  },

  platforms: {
    heading: "全平台發布",
    subheading:
      "一套程式碼庫，涵蓋所有平台。從 Steam 到 App Store —— " +
      "借助我們自研的 JIT/AOT 腳本基礎設施，無需煩惱移植問題。",
    groupLabels: ["桌面端", "行動端", "網頁端", "主機", "應用商店", "小眾平台"],
  },

  vnFeatures: {
    heading: "行動 2D 遊戲與視覺小說所需的一切",
    subheading: "開箱即用，支援完整的視覺小說工作流程 —— 無需外掛，無需設定。",
    vnSectionTitle: "視覺小說功能",
    engineSectionTitle: "引擎亮點",
    vnItems: [
      "訊息顯示",
      "選項選擇",
      "背景與角色過場",
      "BGM / SE / 語音播放",
      "影片播放",
      "分層點陣圖動畫",
      "存檔 / 讀檔",
      "跳過模式與自動模式",
      "跳過已讀訊息",
      "訊息紀錄與語音回放",
      "CG 圖鑑",
      "本地化",
      "模擬參數顯示",
      "GUI / UX 建構 DSL",
      "口型同步",
      "眨眼動畫",
    ],
    engineItems: [
      { label: "JIT 虛擬機",  desc: "桌面端比直譯器快 2.5–4.5 倍" },
      { label: "AOT 編譯器",  desc: "用於 App Store 及主機認證的原生二進位檔案" },
      { label: "分代 GC",     desc: "幀同步，年輕代回收低於 0.1ms" },
      { label: "HAL 層",      desc: "DirectX 9/11/12 · Metal · OpenGL · OpenGL ES · WebGL" },
      { label: "音訊後端",    desc: "DirectSound · Audio Unit · ALSA · OpenSL ES · OSS" },
      { label: "ZLib 授權",   desc: "商業用途、閉源遊戲 —— 全部允許" },
    ],
    comingNextTitle: "即將推出",
    comingNextText:
      "2D RPG 地圖行走 · 3D 角色模型 · 聯網對戰 · 2D 射擊遊戲 · 音樂遊戲",
  },

  philosophy: {
    items: [
      {
        title: "相容 App Store / Play Store / Steam",
        description:
          "我們對視覺小說商業成功的承諾，" +
          "是對這一媒介長期健康發展的戰略性投入。",
      },
      {
        title: "輕量級，真正原生",
        description:
          "Suika3 在各類裝置上都能流暢運行 60fps —— " +
          "從課堂裡的 Raspberry Pi 到聯合國庇護所的 Chromebook。" +
          "通過彌合硬體差距，我們確保您的創造力是唯一的限制。",
      },
      {
        title: "低耗電，不發熱",
        description:
          "在 60fps 遊戲中，Core Ultra 5 僅占用 1% CPU，Apple M5 占用 8%，" +
          "Apple A15 Bionic 占用 20%。玩家的手機保持涼爽，電池持久續航。" +
          "無節流，無過熱 —— 隨時隨地享受流暢遊戲體驗。",
      },
    ],
  },

  lineage: {
    heading: "歷史：偉大的旅程",
    subheading: "Suika3 是逾二十年不懈創新與開發的集大成之作。",
    items: [
      {
        period: "2001–2004",
        title: "Suika Studio",
        description: "程式碼庫的起源，搭載了我們首個基於 GUI 的編輯器。",
        highlight: false,
      },
      {
        period: "2005–2015",
        title: "Unfruitful",
        description: "十年研發，專注於建立穩健的跨平台移植層。",
        highlight: false,
      },
      {
        period: "2016–2024",
        title: "Suika2",
        description:
          "當前架構的基石，十年專注研發的成果。" +
          "提供完整的視覺小說體驗，具備廣泛的平台相容性。",
        highlight: false,
      },
      {
        period: "2025–",
        title: "Playfield Engine",
        description: "源自 Suika 系列核心移植層的通用 2D 引擎。",
        highlight: false,
      },
      {
        period: "2026–",
        title: "Suika3",
        description:
          "融合這些傳承，並引入 NovelML 與 Ray，" +
          "Suika3 將前輩的堅如磐石的穩定性與現代技術的前沿靈活性完美結合。",
        highlight: true,
      },
    ],
  },

  footer: {
    tagline: "搭載 NovelML 與 Ray 的行動優先視覺小說引擎。",
    resources: "資源",
    community: "社群",
    download: "下載",
    documentation: "文件",
  },

  downloads: {
    backToHome: "返回首頁",
    pageTitle: "下載 Suika3",
    versionLabel: "目前版本：",
    licenseNote: "ZLib 授權 · 免費開源",
    ltsNote: "Suika3 26.07 LTS 提供最低 10 年支援保證。",
    binaryTitle: "二進位下載",
    allReleasesPrefix: "所有版本均可在",
    allReleasesLink: "GitHub Releases",
    allReleasesSuffix: "取得。",
    packagesTitle: "套件管理器",
    sourceTitle: "從原始碼建置",
    cmakeNote: "需要 CMake 3.21+ 和 C 編譯器（GCC、Clang 或 MSVC）。",
    buildDocsPrefix: "有關平台特定的說明，請參閱文件中的",
    buildDocsLink: "建置說明",
    buildDocsSuffix: "。",
    platformTitle: "iOS、Android 與主機",
    platformText1:
      "上方的 {FullZIP} 包含適用於 iOS 和 Android 的開發工具包。" +
      "附帶的範例遊戲專案可直接執行 —— 在 {Xcode}（iOS）或 {AndroidStudio}（Android）中開啟並點擊執行即可。" +
      "無需額外設定。",
    platformText2Prefix:
      "有關 HarmonyOS NEXT、Unity 外掛（PS5、Switch、Xbox）及 Xbox GDK 目標，請參閱文件中的",
    platformText2Link: "建置說明",
    platformText2Suffix: "。",
    binaryItems: [
      {
        os: "全平台",
        description: "包含所有二進位檔案和範例遊戲（含 VS Code 整合）的完整 ZIP 壓縮包",
        label: "下載 Full ZIP",
      },
      {
        os: "Windows（僅 EXE）",
        description: "Windows 7 SP1 及以上（64 位元），不含範例遊戲",
        label: "下載 .exe",
      },
      {
        os: "macOS（僅 DMG）",
        description: "macOS 10.11 El Capitan 及以上，不含範例遊戲。",
        label: "下載 .dmg",
      },
      {
        os: "Linux x86_64（僅 Flatpak）",
        description: "Ubuntu、Debian、Fedora 等，不含範例遊戲。",
        label: "下載 Flatpak",
      },
    ],
    packageManagers: [
      { label: "Linux — Flatpak" },
      { label: "macOS — Homebrew" },
      { label: "FreeBSD — Ports" },
    ],
  },
};
