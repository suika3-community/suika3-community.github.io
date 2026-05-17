import type { Messages } from "./types";

export const en: Messages = {
  nav: {
    downloads: "Downloads",
    docs: "Docs",
    features: "Features",
    platforms: "Platforms",
    philosophy: "Philosophy",
    lineage: "Lineage",
  },

  hero: {
    tagline: "Suika3 Engine",
    title1: "Next-Generation",
    title2: "2D Game & Visual Novel Engine",
    subtitle:
      "The Standard Universal Infrastructure for Kinetic Arts Generation 3<br>" +
      "We've brought Suika3 to life with a deep love for mobile devices — " +
      "the platforms that major 3D engines left behind. " +
      "It's a powerful, production-ready game engine for visual novels and all kinds of 2D games, " +
      "designed to run beautifully on any platform you choose.",
    downloadBtn: "Download",
    docsBtn: "Read the Docs",
    codeLabel: "Quick taste",
  },

  stats: {
    items: [
      { value: "60",  unit: "FPS",      label: "on Raspberry Pi" },
      { value: "4.5", unit: "×",        label: "faster than interpreter (JIT)" },
      { value: "25+", unit: "years",    label: "of R&D heritage" },
      { value: "10",  unit: "yr LTS",   label: "minimum support guarantee" },
      { value: "1%",  unit: "CPU",      label: "on Core Ultra 5 at 60 fps" },
      { value: "2",   unit: "MB",       label: "binary footprint" },
      { value: "20+", unit: "platforms", label: "desktop, mobile, web & console" },
    ],
  },

  features: {
    heading: "What you get",
    subheading: "Time to market, portability, and extensibility. A design that takes it all.",
    items: [
      {
        title: "Mobile First",
        description:
          "With its core written in C, Suika3 is lightweight and performs well even on low-end devices. " +
          "Its design prioritizes mobile platforms without compromising on features.",
      },
      {
        title: "NovelML",
        description: "Streamline your workflow with NovelML, a DSL for visual novels.",
      },
      {
        title: "Ray Scripting",
        description:
          "Extend only what you need. Execute a JS-like custom language on the fly. " +
          "Compile it into a native binary for production build.",
      },
      {
        title: "Portable",
        description:
          "Ship literally anywhere: Windows, macOS, Linux, Steam Deck, iOS, Android, " +
          "WebAssembly, Xbox, PS5, Switch, and more.",
      },
      {
        title: "GUI and Anime DSL",
        description: "Design your UI/UX easily with our dedicated DSLs.",
      },
    ],
  },

  platforms: {
    heading: "Ship Everywhere",
    subheading:
      "One codebase. Every platform. From Steam to the App Store — no porting headaches, " +
      "thanks to our custom JIT/AOT scripting infrastructure.",
    groupLabels: ["Desktop", "Mobile", "Web", "Console", "Stores", "Exotic"],
  },

  vnFeatures: {
    heading: "Everything a Mobile 2D Game & Visual Novel Needs",
    subheading:
      "Out-of-the-box support for the full visual novel workflow — no plugins, no configuration.",
    vnSectionTitle: "Visual Novel Features",
    engineSectionTitle: "Engine Highlights",
    vnItems: [
      "Message Display",
      "Option Selection",
      "Background & Character Transitions",
      "BGM / SE / Voice Playback",
      "Movie Playback",
      "Layered Raster Image Animation",
      "Save / Load",
      "Skip Mode & Auto Mode",
      "Skip Seen Messages",
      "Message History & Voice Replay",
      "CG Gallery",
      "Localization",
      "Simulation Parameter Display",
      "GUI / UX Construction DSL",
      "Lip Sync",
      "Eye Blink Animation",
    ],
    engineItems: [
      { label: "JIT VM",           desc: "2.5–4.5× faster than interpreter on desktop" },
      { label: "AOT Compiler",     desc: "Native binary for App Store & console certification" },
      { label: "Generational GC",  desc: "Frame-synchronized, sub-0.1ms young-gen collection" },
      { label: "HAL Layer",        desc: "DirectX 9/11/12 · Metal · OpenGL · OpenGL ES · WebGL" },
      { label: "Audio Backends",   desc: "DirectSound · Audio Unit · ALSA · OpenSL ES · OSS" },
      { label: "ZLib License",     desc: "Commercial use, closed-source games — all allowed" },
    ],
    comingNextTitle: "Coming next",
    comingNextText:
      "2D RPG map walk · 3D character models · Network play · 2D shooting games · Sound games",
  },

  philosophy: {
    items: [
      {
        title: "App Store / Play Store / Steam Ready",
        description:
          "Our commitment to the commercial success of visual novels is a " +
          "strategic investment in the long-term health of the medium.",
      },
      {
        title: "Lightweight, True Native",
        description:
          "Suika3 delivers a smooth 60 fps on devices of all kinds — from " +
          "classroom Raspberry Pis to Chromebooks in UN shelters. By closing the " +
          "hardware gap, we ensure that your ingenuity is the only thing that matters.",
      },
      {
        title: "Cool & Battery-Friendly",
        description:
          "With only 1% CPU usage on Core Ultra 5, 8% on Apple M5, and 20% on " +
          "Apple A15 Bionic during 60 fps gameplay, your players' phones stay cool " +
          "and their batteries last. No throttling, no overheating — just smooth, " +
          "uninterrupted sessions, wherever they play.",
      },
    ],
  },

  lineage: {
    heading: "Lineage: The Grand Journey",
    subheading:
      "Suika3 represents the culmination of over two decades of relentless innovation and development.",
    items: [
      {
        period: "2001–2004",
        title: "Suika Studio",
        description: "The origin of our codebase, featuring our first GUI-based editors.",
        highlight: false,
      },
      {
        period: "2005–2015",
        title: "Unfruitful",
        description:
          "A decade of R&D focused on establishing a robust portability layer for cross-platform support.",
        highlight: false,
      },
      {
        period: "2016–2024",
        title: "Suika2",
        description:
          "The cornerstone of our current architecture and the fruit of a decade of dedicated R&D. " +
          "It delivers a full visual novel experience with extensive platform compatibility.",
        highlight: false,
      },
      {
        period: "2025–",
        title: "Playfield Engine",
        description:
          "A versatile 2D engine derived from the core portability layer of the Suika series.",
        highlight: false,
      },
      {
        period: "2026–",
        title: "Suika3",
        description:
          "By synthesizing these legacies and introducing NovelML and Ray, Suika3 delivers the " +
          "rock-solid stability of its predecessors alongside the cutting-edge flexibility of modern technology.",
        highlight: true,
      },
    ],
  },

  footer: {
    tagline: "Mobile-first visual novel engine with NovelML and Ray.",
    resources: "Resources",
    community: "Community",
    download: "Download",
    documentation: "Documentation",
  },

  downloads: {
    backToHome: "Back to home",
    pageTitle: "Download Suika3",
    versionLabel: "Current version:",
    licenseNote: "ZLib License · Free & open source",
    ltsNote:
      "Suika3 26.07 LTS is scheduled for July 1, 2026 with a minimum 10-year support guarantee.",
    binaryTitle: "Binary Downloads",
    allReleasesPrefix: "All releases are available on",
    allReleasesLink: "GitHub Releases",
    allReleasesSuffix: ".",
    packagesTitle: "Package Managers",
    sourceTitle: "Build from Source",
    cmakeNote: "Requires CMake 3.21+ and a C compiler (GCC, Clang, or MSVC).",
    buildDocsPrefix: "For platform-specific instructions, see the",
    buildDocsLink: "Build Instructions",
    buildDocsSuffix: "in the documentation.",
    platformTitle: "iOS, Android & Console",
    platformText1:
      "The {FullZIP} download above includes development kits for iOS and Android. " +
      "The bundled sample game projects are ready to run — just open them in {Xcode} (iOS) " +
      "or {AndroidStudio} (Android) and hit the Run button. No additional configuration needed.",
    platformText2Prefix:
      "For HarmonyOS NEXT, Unity Plugin (PS5, Switch, Xbox), and Xbox GDK targets, see the",
    platformText2Link: "Build Instructions",
    platformText2Suffix: "in the documentation.",
    binaryItems: [
      {
        os: "All platforms",
        description: "Full ZIP archive with all binaries and sample game with VS Code Integration",
        label: "Download Full ZIP",
      },
      {
        os: "Windows (EXE Only)",
        description: "Windows 7 SP1 and later (64-bit), no sample game",
        label: "Download .exe",
      },
      {
        os: "macOS (DMG Only)",
        description: "macOS 10.11 El Capitan and later. No sample game.",
        label: "Download .dmg",
      },
      {
        os: "Linux x86_64 (Flatpak Only)",
        description: "Ubuntu, Debian, Fedora and more. No sample game.",
        label: "Download Flatpak",
      },
    ],
    packageManagers: [
      { label: "Linux — Flatpak" },
      { label: "macOS — Homebrew" },
      { label: "FreeBSD — Ports" },
    ],
  },
};
