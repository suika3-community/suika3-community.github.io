import type { Messages } from "./types";

export const ja: Messages = {
  nav: {
    downloads: "ダウンロード",
    docs: "ドキュメント",
    features: "機能",
    platforms: "プラットフォーム",
    philosophy: "哲学",
    lineage: "系譜",
    language: "言語",
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
    tagline: "Suika3 エンジン",
    title1: "次世代",
    title2: "2D ゲーム・ビジュアルノベルエンジン",
    subtitle:
      "Suika3 は「第三世代標準汎用動的視覚表現実行基盤」(Standard Universal Infrastructure for Kinetic Arts Gen3)の略です。\n" +
      "モバイルデバイスへの深い愛情から生まれた Suika3 は、" +
      "主要な 3D エンジンが見捨てたプラットフォームに真剣に向き合います。" +
      "ビジュアルノベルとあらゆる 2D ゲームに対応した、" +
      "実績ある高性能ゲームエンジンです。どのプラットフォームでも美しく動作します。",
    downloadBtn: "ダウンロード",
    docsBtn: "ドキュメントを読む",
    codeLabel: "サンプル",
  },

  stats: {
    items: [
      { value: "60",  unit: "FPS",      label: "Raspberry Pi 上" },
      { value: "4.5", unit: "×",        label: "インタープリタより高速（JIT）" },
      { value: "25+", unit: "年間",     label: "の研究開発の歴史" },
      { value: "10",  unit: "年 LTS",   label: "最低サポート保証" },
      { value: "1%",  unit: "CPU",      label: "Core Ultra 5 で 60fps 時" },
      { value: "2",   unit: "MB",       label: "バイナリサイズ" },
      { value: "20+", unit: "以上",     label: "PC・モバイル・Web・コンソール" },
    ],
  },

  features: {
    heading: "Suika3 でできること",
    subheading: "市場投入速度、移植性、拡張性。すべてを兼ね備えた設計です。",
    items: [
      {
        title: "モバイルファースト",
        description:
          "C 言語で書かれたコアにより、軽量で低スペックデバイスでも高いパフォーマンスを発揮します。" +
          "モバイルプラットフォームを優先しながら、機能面でも妥協しない設計です。",
      },
      {
        title: "NovelML",
        description: "ビジュアルノベル専用 DSL「NovelML」でワークフローを効率化。",
      },
      {
        title: "Ray スクリプティング",
        description:
          "必要な部分だけ拡張できます。JS 風のカスタム言語をその場で実行し、" +
          "本番ビルドではネイティブバイナリにコンパイルします。",
      },
      {
        title: "高い移植性",
        description:
          "どこでも動作：Windows、macOS、Linux、Steam Deck、iOS、Android、" +
          "WebAssembly、Xbox、PS5、Switch など。",
      },
      {
        title: "GUI・アニメ DSL",
        description: "専用 DSL を使って、UI/UX を簡単に設計できます。",
      },
    ],
  },

  platforms: {
    heading: "あらゆる場所に配信",
    subheading:
      "ひとつのコードベースで全プラットフォームに対応。Steam から App Store まで — " +
      "カスタム JIT/AOT スクリプトインフラにより移植の手間は不要。",
    groupLabels: ["デスクトップ", "モバイル", "Web", "コンソール", "ストア", "エキゾチック"],
  },

  vnFeatures: {
    heading: "モバイル 2D ゲーム・ビジュアルノベルに必要なすべて",
    subheading:
      "プラグインや設定なしで、ビジュアルノベル制作の全ワークフローをすぐに使えます。",
    vnSectionTitle: "ビジュアルノベル機能",
    engineSectionTitle: "エンジンハイライト",
    vnItems: [
      "メッセージ表示",
      "選択肢",
      "背景・キャラクタートランジション",
      "BGM / SE / ボイス再生",
      "ムービー再生",
      "レイヤードラスター画像アニメーション",
      "セーブ・ロード",
      "スキップモード・オートモード",
      "既読スキップ",
      "メッセージ履歴・ボイス再生",
      "CG ギャラリー",
      "ローカライゼーション",
      "シミュレーションパラメーター表示",
      "GUI / UX 構築 DSL",
      "リップシンク",
      "瞬きアニメーション",
    ],
    engineItems: [
      { label: "JIT VM",          desc: "デスクトップでインタープリタより 2.5〜4.5 倍高速" },
      { label: "AOT コンパイラ",  desc: "App Store・コンソール審査用のネイティブバイナリ" },
      { label: "世代別 GC",       desc: "フレーム同期、Young 世代 0.1ms 未満の GC" },
      { label: "HAL レイヤ",      desc: "DirectX 9/11/12 · Metal · OpenGL · OpenGL ES · WebGL" },
      { label: "オーディオ",      desc: "DirectSound · Audio Unit · ALSA · OpenSL ES · OSS" },
      { label: "ZLib ライセンス", desc: "商用利用・クローズドソースゲーム — すべて許可" },
    ],
    comingNextTitle: "今後の予定",
    comingNextText:
      "2D RPG マップ移動 · 3D キャラクターモデル · ネットワーク対戦 · 2D シューティング · 音楽ゲーム",
  },

  philosophy: {
    items: [
      {
        title: "App Store / Play Store / Steam 対応",
        description:
          "ビジュアルノベルの商業的成功へのコミットは、" +
          "このメディアの長期的な健全性への戦略的投資です。",
      },
      {
        title: "軽量・真のネイティブ",
        description:
          "Suika3 は Raspberry Pi から Chromebook まで、あらゆるデバイスで滑らかな 60fps を実現します。" +
          "ハードウェアの差を埋めることで、あなたの創造力だけが問われる環境を作ります。",
      },
      {
        title: "省電力・低発熱",
        description:
          "Core Ultra 5 で CPU 使用率 1%、Apple M5 で 8%、Apple A15 Bionic で 20%（60fps 時）という性能により、" +
          "プレイヤーの端末は熱くなりません。スロットリングなし、オーバーヒートなし — " +
          "快適なゲーム体験をどこでも。",
      },
    ],
  },

  lineage: {
    heading: "系譜：長い旅路",
    subheading: "Suika3 は 20 年以上にわたる絶え間ない革新と開発の集大成です。",
    items: [
      {
        period: "2001–2004",
        title: "Suika Studio",
        description: "コードベースの原点。GUI ベースの初のエディタを搭載。",
        highlight: false,
      },
      {
        period: "2005–2015",
        title: "Unfruitful",
        description:
          "クロスプラットフォーム対応のための堅牢な移植レイヤーの確立に注力した 10 年間の R&D。",
        highlight: false,
      },
      {
        period: "2016–2024",
        title: "Suika2",
        description:
          "現在のアーキテクチャの礎となり、10 年間の R&D の成果。" +
          "広範なプラットフォーム互換性を持つ完全なビジュアルノベル体験を提供。",
        highlight: false,
      },
      {
        period: "2025–",
        title: "Playfield Engine",
        description: "Suika シリーズのコア移植レイヤーから派生した汎用 2D エンジン。",
        highlight: false,
      },
      {
        period: "2026–",
        title: "Suika3",
        description:
          "これらの遺産を統合し、NovelML と Ray を導入することで、" +
          "前身の盤石な安定性と最新技術の柔軟性を兼ね備えたエンジンが誕生しました。",
        highlight: true,
      },
    ],
  },

  footer: {
    tagline: "NovelML と Ray を搭載したモバイルファーストのビジュアルノベルエンジン。",
    resources: "リソース",
    community: "コミュニティ",
    download: "ダウンロード",
    documentation: "ドキュメント",
  },

  downloads: {
    backToHome: "ホームへ戻る",
    pageTitle: "Suika3 をダウンロード",
    versionLabel: "現在のバージョン:",
    licenseNote: "ZLib ライセンス · 無料・オープンソース",
    ltsNote:
      "Suika3 26.07 LTS は 2026 年 7 月 1 日リリース予定。最低 10 年間のサポート保証。",
    binaryTitle: "バイナリダウンロード",
    allReleasesPrefix: "すべてのリリースは",
    allReleasesLink: "GitHub Releases",
    allReleasesSuffix: "で公開しています。",
    packagesTitle: "パッケージマネージャ",
    sourceTitle: "ソースからビルド",
    cmakeNote: "CMake 3.21 以上と C コンパイラ（GCC、Clang、または MSVC）が必要です。",
    buildDocsPrefix: "プラットフォーム固有の手順については、ドキュメントの",
    buildDocsLink: "ビルド手順",
    buildDocsSuffix: "をご覧ください。",
    platformTitle: "iOS・Android・コンソール",
    platformText1:
      "上記の {FullZIP} にはiOSとAndroid向けの開発キットが含まれています。" +
      "付属のサンプルゲームプロジェクトはすぐに実行可能です。" +
      "{Xcode}（iOS）または {AndroidStudio}（Android）で開き、実行ボタンを押すだけです。" +
      "追加設定は不要です。",
    platformText2Prefix:
      "HarmonyOS NEXT、Unity プラグイン（PS5、Switch、Xbox）、Xbox GDK ターゲットについては、ドキュメントの",
    platformText2Link: "ビルド手順",
    platformText2Suffix: "をご覧ください。",
    binaryItems: [
      {
        os: "全プラットフォーム",
        description: "すべてのバイナリとサンプルゲーム（VS Code 統合）を含むフル ZIP アーカイブ",
        label: "Full ZIP をダウンロード",
      },
      {
        os: "Windows（EXE のみ）",
        description: "Windows 7 SP1 以降（64 ビット）。サンプルゲームなし。",
        label: ".exe をダウンロード",
      },
      {
        os: "macOS（DMG のみ）",
        description: "macOS 10.11 El Capitan 以降。サンプルゲームなし。",
        label: ".dmg をダウンロード",
      },
      {
        os: "Linux x86_64（Flatpak のみ）",
        description: "Ubuntu、Debian、Fedora など。サンプルゲームなし。",
        label: "Flatpak をダウンロード",
      },
    ],
    packageManagers: [
      { label: "Linux — Flatpak" },
      { label: "macOS — Homebrew" },
      { label: "FreeBSD — Ports" },
    ],
  },
};
