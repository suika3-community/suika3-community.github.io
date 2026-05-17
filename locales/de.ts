import type { Messages } from "./types";

export const de: Messages = {
  nav: {
    downloads: "Downloads",
    docs: "Dokumentation",
    features: "Funktionen",
    platforms: "Plattformen",
    philosophy: "Philosophie",
    lineage: "Geschichte",
  },

  hero: {
    tagline: "Suika3 Engine",
    title1: "Nächste Generation:",
    title2: "2D-Spiel- und Visual-Novel-Engine",
    subtitle:
      "Standard-Universal-Infrastruktur für Kinetische Artefakte, Generation 3<br>" +
      "Suika3 wurde mit tiefer Leidenschaft für mobile Geräte entwickelt — " +
      "die Plattformen, die große 3D-Engines vernachlässigt haben. " +
      "Es ist eine leistungsstarke, produktionsreife Spiele-Engine für Visual Novels " +
      "und alle Arten von 2D-Spielen, die auf jeder gewählten Plattform hervorragend läuft.",
    downloadBtn: "Herunterladen",
    docsBtn: "Dokumentation lesen",
    codeLabel: "Beispiel",
  },

  stats: {
    items: [
      { value: "60",  unit: "FPS",          label: "auf Raspberry Pi" },
      { value: "4.5", unit: "×",            label: "schneller als Interpreter (JIT)" },
      { value: "25+", unit: "Jahre",        label: "F&E-Geschichte" },
      { value: "10",  unit: "Jahre LTS",    label: "Mindest-Support-Garantie" },
      { value: "1%",  unit: "CPU",          label: "auf Core Ultra 5 bei 60 fps" },
      { value: "2",   unit: "MB",           label: "Binärgröße" },
      { value: "20+", unit: "Plattformen",  label: "PC, Mobil, Web & Konsole" },
    ],
  },

  features: {
    heading: "Was Sie erhalten",
    subheading: "Zeit bis zur Markteinführung, Portabilität und Erweiterbarkeit. Ein Design, das alles berücksichtigt.",
    items: [
      {
        title: "Mobile zuerst",
        description:
          "Mit einem in C geschriebenen Kern ist Suika3 leichtgewichtig und läuft gut selbst auf schwacher Hardware. " +
          "Das Design priorisiert mobile Plattformen ohne Kompromisse bei den Funktionen.",
      },
      {
        title: "NovelML",
        description: "Optimieren Sie Ihren Workflow mit NovelML, einer DSL für Visual Novels.",
      },
      {
        title: "Ray-Scripting",
        description:
          "Erweitern Sie nur, was Sie brauchen. Führen Sie eine JS-ähnliche Sprache on-the-fly aus. " +
          "Kompilieren Sie sie für den Produktions-Build in ein natives Binary.",
      },
      {
        title: "Portabel",
        description:
          "Veröffentlichen Sie buchstäblich überall: Windows, macOS, Linux, Steam Deck, iOS, Android, " +
          "WebAssembly, Xbox, PS5, Switch und mehr.",
      },
      {
        title: "GUI- und Animations-DSL",
        description: "Gestalten Sie Ihre UI/UX einfach mit unseren dedizierten DSLs.",
      },
    ],
  },

  platforms: {
    heading: "Überall veröffentlichen",
    subheading:
      "Eine Codebasis. Jede Plattform. Von Steam bis zum App Store — " +
      "keine Portierungsprobleme dank unserer JIT/AOT-Scripting-Infrastruktur.",
    groupLabels: ["Desktop", "Mobil", "Web", "Konsole", "Stores", "Exotisch"],
  },

  vnFeatures: {
    heading: "Alles, was ein mobiles 2D-Spiel und eine Visual Novel brauchen",
    subheading: "Vollständige Unterstützung des Visual-Novel-Workflows ohne Plugins und Konfiguration.",
    vnSectionTitle: "Visual-Novel-Funktionen",
    engineSectionTitle: "Engine-Highlights",
    vnItems: [
      "Nachrichtenanzeige",
      "Optionsauswahl",
      "Hintergrund- und Charakterübergänge",
      "BGM / SE / Sprachausgabe",
      "Videowiedergabe",
      "Gestapelte Rasterbildanimation",
      "Speichern / Laden",
      "Überspringen- und Automatikmodus",
      "Gelesene Nachrichten überspringen",
      "Nachrichtenverlauf & Sprachwiederholung",
      "CG-Galerie",
      "Lokalisierung",
      "Simulationsparameteranzeige",
      "GUI / UX-Konstruktions-DSL",
      "Lippensynchronisation",
      "Blinzelanimation",
    ],
    engineItems: [
      { label: "JIT VM",           desc: "2.5–4.5× schneller als Interpreter auf dem Desktop" },
      { label: "AOT-Compiler",     desc: "Natives Binary für App Store & Konsolen-Zertifizierung" },
      { label: "Generationeller GC", desc: "Frame-synchronisiert, Young-Gen-Sammlung < 0.1ms" },
      { label: "HAL-Schicht",      desc: "DirectX 9/11/12 · Metal · OpenGL · OpenGL ES · WebGL" },
      { label: "Audio-Backends",   desc: "DirectSound · Audio Unit · ALSA · OpenSL ES · OSS" },
      { label: "ZLib-Lizenz",      desc: "Kommerziell, Closed-Source-Spiele — alles erlaubt" },
    ],
    comingNextTitle: "Demnächst",
    comingNextText:
      "2D-RPG-Karte · 3D-Charaktermodelle · Netzwerkspiel · 2D-Shooter · Rhythmusspiele",
  },

  philosophy: {
    items: [
      {
        title: "Bereit für App Store / Play Store / Steam",
        description:
          "Unser Engagement für den kommerziellen Erfolg von Visual Novels ist " +
          "eine strategische Investition in die langfristige Gesundheit des Mediums.",
      },
      {
        title: "Leichtgewichtig, wirklich nativ",
        description:
          "Suika3 liefert flüssige 60 fps auf Geräten aller Art — " +
          "von Raspberry Pis im Unterricht bis zu Chromebooks in UN-Unterkünften. " +
          "Durch das Schließen der Hardware-Lücke stellen wir sicher, dass Ihr Einfallsreichtum das Einzige ist, was zählt.",
      },
      {
        title: "Kühl und akkuschonend",
        description:
          "Mit nur 1% CPU-Nutzung auf Core Ultra 5, 8% auf Apple M5 " +
          "und 20% auf Apple A15 Bionic bei 60 fps bleiben die Telefone Ihrer Spieler kühl " +
          "und die Akkus halten länger. Kein Throttling, keine Überhitzung — " +
          "nur reibungslose Spielsitzungen, wo immer sie spielen.",
      },
    ],
  },

  lineage: {
    heading: "Geschichte: Die große Reise",
    subheading: "Suika3 ist der Höhepunkt von mehr als zwei Jahrzehnten unablässiger Innovation und Entwicklung.",
    items: [
      {
        period: "2001–2004",
        title: "Suika Studio",
        description: "Der Ursprung unserer Codebasis mit unseren ersten GUI-basierten Editoren.",
        highlight: false,
      },
      {
        period: "2005–2015",
        title: "Unfruitful",
        description: "Ein Jahrzehnt F&E zur Entwicklung einer robusten Portabilitätsschicht für plattformübergreifende Unterstützung.",
        highlight: false,
      },
      {
        period: "2016–2024",
        title: "Suika2",
        description:
          "Der Grundstein unserer aktuellen Architektur und die Frucht eines Jahrzehnts F&E. " +
          "Bietet ein vollständiges Visual-Novel-Erlebnis mit breiter Plattformkompatibilität.",
        highlight: false,
      },
      {
        period: "2025–",
        title: "Playfield Engine",
        description: "Eine vielseitige 2D-Engine, abgeleitet aus der Kern-Portabilitätsschicht der Suika-Serie.",
        highlight: false,
      },
      {
        period: "2026–",
        title: "Suika3",
        description:
          "Durch die Synthese dieser Vermächtnisse und die Einführung von NovelML und Ray " +
          "bietet Suika3 die felsenfeste Stabilität seiner Vorgänger zusammen mit der modernsten Flexibilität.",
        highlight: true,
      },
    ],
  },

  footer: {
    tagline: "Mobile-first Visual-Novel-Engine mit NovelML und Ray.",
    resources: "Ressourcen",
    community: "Community",
    download: "Download",
    documentation: "Dokumentation",
  },

  downloads: {
    backToHome: "Zurück zur Startseite",
    pageTitle: "Suika3 herunterladen",
    versionLabel: "Aktuelle Version:",
    licenseNote: "ZLib-Lizenz · Kostenlos und Open Source",
    ltsNote: "Suika3 26.07 LTS ist für den 1. Juli 2026 geplant mit einer Mindest-Support-Garantie von 10 Jahren.",
    binaryTitle: "Binäre Downloads",
    allReleasesPrefix: "Alle Versionen sind verfügbar auf",
    allReleasesLink: "GitHub Releases",
    allReleasesSuffix: ".",
    packagesTitle: "Paketmanager",
    sourceTitle: "Aus dem Quellcode erstellen",
    cmakeNote: "Erfordert CMake 3.21+ und einen C-Compiler (GCC, Clang oder MSVC).",
    buildDocsPrefix: "Plattformspezifische Anweisungen finden Sie in den",
    buildDocsLink: "Build-Anweisungen",
    buildDocsSuffix: "in der Dokumentation.",
    platformTitle: "iOS, Android & Konsolen",
    platformText1:
      "Der {FullZIP}-Download enthält Entwicklungskits für iOS und Android. " +
      "Die enthaltenen Beispielspiel-Projekte sind sofort ausführbar — " +
      "öffnen Sie sie in {Xcode} (iOS) oder {AndroidStudio} (Android) und drücken Sie Ausführen. " +
      "Keine weitere Konfiguration erforderlich.",
    platformText2Prefix: "Für HarmonyOS NEXT, Unity-Plugin (PS5, Switch, Xbox) und Xbox GDK-Ziele, siehe die",
    platformText2Link: "Build-Anweisungen",
    platformText2Suffix: "in der Dokumentation.",
    binaryItems: [
      {
        os: "Alle Plattformen",
        description: "Vollständiges ZIP-Archiv mit allen Binärdateien und Beispielspiel mit VS Code-Integration",
        label: "Full ZIP herunterladen",
      },
      {
        os: "Windows (nur EXE)",
        description: "Windows 7 SP1 und neuer (64-Bit), ohne Beispielspiel",
        label: ".exe herunterladen",
      },
      {
        os: "macOS (nur DMG)",
        description: "macOS 10.11 El Capitan und neuer. Ohne Beispielspiel.",
        label: ".dmg herunterladen",
      },
      {
        os: "Linux x86_64 (nur Flatpak)",
        description: "Ubuntu, Debian, Fedora und mehr. Ohne Beispielspiel.",
        label: "Flatpak herunterladen",
      },
    ],
    packageManagers: [
      { label: "Linux — Flatpak" },
      { label: "macOS — Homebrew" },
      { label: "FreeBSD — Ports" },
    ],
  },
};
