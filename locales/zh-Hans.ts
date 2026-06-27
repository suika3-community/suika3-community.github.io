import type { Messages } from "./types";

export const zhHans: Messages = {
  nav: {
    downloads: "下载",
    docs: "文档",
    features: "功能",
    platforms: "平台",
    philosophy: "理念",
    lineage: "历史",
    language: "语言",
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
    title1: "新一代",
    title2: "2D 游戏与视觉小说引擎",
    subtitle:
      "Suika3 源于对移动设备的深厚热情 —— " +
      "那些被主流 3D 引擎所忽视的平台。" +
      "这是一款强大、可投入生产的游戏引擎，专为视觉小说和各类 2D 游戏而设计，" +
      "能在您选择的任何平台上完美运行。",
    downloadBtn: "下载",
    docsBtn: "阅读文档",
    codeLabel: "示例",
  },

  stats: {
    items: [
      { value: "60",  unit: "FPS",  label: "在 Raspberry Pi 上" },
      { value: "4.5", unit: "×",    label: "比解释器快（JIT）" },
      { value: "25+", unit: "年",   label: "研发历程" },
      { value: "10",  unit: "年 LTS", label: "最低支持保证" },
      { value: "1%",  unit: "CPU",  label: "Core Ultra 5 在 60fps 时" },
      { value: "2",   unit: "MB",   label: "二进制大小" },
      { value: "20+", unit: "平台", label: "桌面、移动、网页及主机" },
    ],
  },

  features: {
    heading: "核心优势",
    subheading: "上市速度、可移植性与可扩展性，全面兼顾的设计。",
    items: [
      {
        title: "移动优先",
        description:
          "核心使用 C 语言编写，Suika3 轻量高效，即便在低端设备上也能出色运行。" +
          "在优先支持移动平台的同时，功能上毫不妥协。",
      },
      {
        title: "NovelML",
        description: "借助专为视觉小说设计的 DSL —— NovelML，简化您的工作流程。",
      },
      {
        title: "Ray 脚本",
        description:
          "只扩展您需要的部分。即时执行类 JS 的自定义语言，" +
          "并可在发布构建时编译为原生二进制文件。",
      },
      {
        title: "高度可移植",
        description:
          "随处部署：Windows、macOS、Linux、Steam Deck、iOS、Android、" +
          "WebAssembly、Xbox、PS5、Switch 等。",
      },
      {
        title: "GUI 与动画 DSL",
        description: "使用专用 DSL 轻松设计您的 UI/UX。",
      },
    ],
  },

  platforms: {
    heading: "全平台发布",
    subheading:
      "一套代码库，覆盖所有平台。从 Steam 到 App Store —— " +
      "借助我们自研的 JIT/AOT 脚本基础设施，无需烦恼移植问题。",
    groupLabels: ["桌面端", "移动端", "网页端", "主机", "应用商店", "小众平台"],
  },

  vnFeatures: {
    heading: "移动 2D 游戏与视觉小说所需的一切",
    subheading: "开箱即用，支持完整的视觉小说工作流程 —— 无需插件，无需配置。",
    vnSectionTitle: "视觉小说功能",
    engineSectionTitle: "引擎亮点",
    vnItems: [
      "消息显示",
      "选项选择",
      "背景与角色过渡",
      "BGM / SE / 语音播放",
      "视频播放",
      "分层光栅图像动画",
      "存档 / 读档",
      "跳过模式与自动模式",
      "跳过已读消息",
      "消息记录与语音回放",
      "CG 图鉴",
      "本地化",
      "模拟参数显示",
      "GUI / UX 构建 DSL",
      "口型同步",
      "眨眼动画",
    ],
    engineItems: [
      { label: "JIT 虚拟机",   desc: "桌面端比解释器快 2.5–4.5 倍" },
      { label: "AOT 编译器",   desc: "用于 App Store 及主机认证的原生二进制文件" },
      { label: "分代 GC",      desc: "帧同步，年轻代回收低于 0.1ms" },
      { label: "HAL 层",       desc: "DirectX 9/11/12 · Metal · OpenGL · OpenGL ES · WebGL" },
      { label: "音频后端",     desc: "DirectSound · Audio Unit · ALSA · OpenSL ES · OSS" },
      { label: "ZLib 许可证",  desc: "商业用途、闭源游戏 —— 全部允许" },
    ],
    comingNextTitle: "即将推出",
    comingNextText:
      "2D RPG 地图行走 · 3D 角色模型 · 联网对战 · 2D 射击游戏 · 音乐游戏",
  },

  philosophy: {
    items: [
      {
        title: "兼容 App Store / Play Store / Steam",
        description:
          "我们对视觉小说商业成功的承诺，" +
          "是对这一媒介长期健康发展的战略性投入。",
      },
      {
        title: "轻量级，真正原生",
        description:
          "Suika3 在各类设备上都能流畅运行 60fps —— " +
          "从课堂里的 Raspberry Pi 到联合国庇护所的 Chromebook。" +
          "通过弥合硬件差距，我们确保您的创造力是唯一的限制。",
      },
      {
        title: "低耗电，不发热",
        description:
          "在 60fps 游戏中，Core Ultra 5 仅占用 1% CPU，Apple M5 占用 8%，" +
          "Apple A15 Bionic 占用 20%。玩家的手机保持凉爽，电池持久续航。" +
          "无节流，无过热 —— 随时随地享受流畅游戏体验。",
      },
    ],
  },

  lineage: {
    heading: "历史：伟大的旅程",
    subheading: "Suika3 是逾二十年不懈创新与开发的集大成之作。",
    items: [
      {
        period: "2001–2004",
        title: "Suika Studio",
        description: "代码库的起源，搭载了我们首个基于 GUI 的编辑器。",
        highlight: false,
      },
      {
        period: "2005–2015",
        title: "Unfruitful",
        description: "十年研发，专注于建立稳健的跨平台移植层。",
        highlight: false,
      },
      {
        period: "2016–2024",
        title: "Suika2",
        description:
          "当前架构的基石，十年专注研发的成果。" +
          "提供完整的视觉小说体验，具备广泛的平台兼容性。",
        highlight: false,
      },
      {
        period: "2025–",
        title: "Playfield Engine",
        description: "源自 Suika 系列核心移植层的通用 2D 引擎。",
        highlight: false,
      },
      {
        period: "2026–",
        title: "Suika3",
        description:
          "融合这些传承，并引入 NovelML 与 Ray，" +
          "Suika3 将前辈的坚如磐石的稳定性与现代技术的前沿灵活性完美结合。",
        highlight: true,
      },
    ],
  },

  footer: {
    tagline: "搭载 NovelML 与 Ray 的移动优先视觉小说引擎。",
    resources: "资源",
    community: "社区",
    download: "下载",
    documentation: "文档",
  },

  downloads: {
    backToHome: "返回首页",
    pageTitle: "下载 Suika3",
    versionLabel: "当前版本：",
    licenseNote: "ZLib 许可证 · 免费开源",
    ltsNote: "Suika3 26.07 LTS 提供最低 10 年支持保证。",
    binaryTitle: "二进制下载",
    allReleasesPrefix: "所有版本均可在",
    allReleasesLink: "GitHub Releases",
    allReleasesSuffix: "获取。",
    packagesTitle: "包管理器",
    sourceTitle: "从源码构建",
    cmakeNote: "需要 CMake 3.21+ 和 C 编译器（GCC、Clang 或 MSVC）。",
    buildDocsPrefix: "有关平台特定的说明，请参阅文档中的",
    buildDocsLink: "构建说明",
    buildDocsSuffix: "。",
    platformTitle: "iOS、Android 与主机",
    platformText1:
      "上方的 {FullZIP} 包含适用于 iOS 和 Android 的开发工具包。" +
      "附带的示例游戏项目可直接运行 —— 在 {Xcode}（iOS）或 {AndroidStudio}（Android）中打开并点击运行即可。" +
      "无需额外配置。",
    platformText2Prefix:
      "有关 HarmonyOS NEXT、Unity 插件（PS5、Switch、Xbox）及 Xbox GDK 目标，请参阅文档中的",
    platformText2Link: "构建说明",
    platformText2Suffix: "。",
    binaryItems: [
      {
        os: "全平台",
        description: "包含所有二进制文件和示例游戏（含 VS Code 集成）的完整 ZIP 压缩包",
        label: "下载 Full ZIP",
      },
      {
        os: "Windows（仅 EXE）",
        description: "Windows 7 SP1 及以上（64 位），不含示例游戏",
        label: "下载 .exe",
      },
      {
        os: "macOS（仅 DMG）",
        description: "macOS 10.11 El Capitan 及以上，不含示例游戏。",
        label: "下载 .dmg",
      },
      {
        os: "Linux x86_64（仅 Flatpak）",
        description: "Ubuntu、Debian、Fedora 等，不含示例游戏。",
        label: "下载 Flatpak",
      },
    ],
    packageManagers: [
      { label: "Linux — Flatpak" },
      { label: "macOS — Homebrew" },
      { label: "FreeBSD — Ports" },
    ],
  },
};
