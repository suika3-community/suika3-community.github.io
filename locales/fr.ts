import type { Messages } from "./types";

export const fr: Messages = {
  nav: {
    downloads: "Téléchargements",
    docs: "Documentation",
    features: "Fonctionnalités",
    platforms: "Plateformes",
    philosophy: "Philosophie",
    lineage: "Histoire",
    language: "Langue",
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
    tagline: "Moteur Suika3",
    title1: "Nouvelle Génération :",
    title2: "Moteur de Jeu 2D et Roman Visuel",
    subtitle:
      "Suika3 est né d'un amour profond pour les appareils mobiles — " +
      "les plateformes que les grands moteurs 3D ont délaissées. " +
      "C'est un moteur de jeu puissant et prêt pour la production, " +
      "conçu pour les romans visuels et tous types de jeux 2D, " +
      "capable de fonctionner parfaitement sur n'importe quelle plateforme.",
    downloadBtn: "Télécharger",
    docsBtn: "Lire la documentation",
    codeLabel: "Aperçu",
  },

  stats: {
    items: [
      { value: "60",  unit: "FPS",          label: "sur Raspberry Pi" },
      { value: "4.5", unit: "×",            label: "plus rapide que l'interpréteur (JIT)" },
      { value: "25+", unit: "ans",          label: "d'héritage R&D" },
      { value: "10",  unit: "ans LTS",      label: "garantie minimale de support" },
      { value: "1%",  unit: "CPU",          label: "sur Core Ultra 5 à 60 fps" },
      { value: "2",   unit: "Mo",           label: "taille du binaire" },
      { value: "20+", unit: "plateformes",  label: "PC, mobile, web et console" },
    ],
  },

  features: {
    heading: "Ce que vous obtenez",
    subheading: "Rapidité de mise sur le marché, portabilité et extensibilité. Une conception qui concilie tout.",
    items: [
      {
        title: "Mobile d'abord",
        description:
          "Avec son noyau écrit en C, Suika3 est léger et performant même sur les appareils bas de gamme. " +
          "Sa conception priorise les plateformes mobiles sans compromis sur les fonctionnalités.",
      },
      {
        title: "NovelML",
        description: "Optimisez votre workflow avec NovelML, un DSL dédié aux romans visuels.",
      },
      {
        title: "Scripting Ray",
        description:
          "Étendez uniquement ce dont vous avez besoin. Exécutez un langage personnalisé similaire à JS à la volée. " +
          "Compilez-le en binaire natif pour la version de production.",
      },
      {
        title: "Portable",
        description:
          "Publiez littéralement partout : Windows, macOS, Linux, Steam Deck, iOS, Android, " +
          "WebAssembly, Xbox, PS5, Switch et plus encore.",
      },
      {
        title: "DSL GUI et Animation",
        description: "Concevez facilement votre UI/UX avec nos DSLs dédiés.",
      },
    ],
  },

  platforms: {
    heading: "Publiez partout",
    subheading:
      "Une seule base de code. Toutes les plateformes. De Steam à l'App Store — " +
      "sans problème de portage grâce à notre infrastructure de scripting JIT/AOT.",
    groupLabels: ["Bureau", "Mobile", "Web", "Console", "Boutiques", "Exotiques"],
  },

  vnFeatures: {
    heading: "Tout ce qu'un jeu 2D mobile et un roman visuel nécessitent",
    subheading: "Support complet du flux de travail des romans visuels dès l'installation — sans plugins, sans configuration.",
    vnSectionTitle: "Fonctionnalités Roman Visuel",
    engineSectionTitle: "Points forts du moteur",
    vnItems: [
      "Affichage des messages",
      "Sélection d'options",
      "Transitions de décors et personnages",
      "Lecture BGM / SE / Voix",
      "Lecture vidéo",
      "Animation d'images raster en couches",
      "Sauvegarde / Chargement",
      "Mode skip et mode automatique",
      "Ignorer les messages déjà lus",
      "Historique des messages et réécoute",
      "Galerie CG",
      "Localisation",
      "Affichage des paramètres de simulation",
      "DSL de construction GUI / UX",
      "Synchronisation labiale",
      "Animation de clignement",
    ],
    engineItems: [
      { label: "JIT VM",           desc: "2.5–4.5× plus rapide que l'interpréteur sur PC" },
      { label: "Compilateur AOT",  desc: "Binaire natif pour la certification App Store et console" },
      { label: "GC générationnel", desc: "Synchronisé par frame, collecte jeune génération < 0.1ms" },
      { label: "Couche HAL",       desc: "DirectX 9/11/12 · Metal · OpenGL · OpenGL ES · WebGL" },
      { label: "Backends audio",   desc: "DirectSound · Audio Unit · ALSA · OpenSL ES · OSS" },
      { label: "Licence ZLib",     desc: "Usage commercial, jeux sources fermées — tout autorisé" },
    ],
    comingNextTitle: "Prochainement",
    comingNextText:
      "Carte RPG 2D · Modèles de personnages 3D · Jeu en réseau · Jeux de tir 2D · Jeux de rythme",
  },

  philosophy: {
    items: [
      {
        title: "Prêt pour App Store / Play Store / Steam",
        description:
          "Notre engagement envers le succès commercial des romans visuels est " +
          "un investissement stratégique dans la santé à long terme du medium.",
      },
      {
        title: "Léger, vraiment natif",
        description:
          "Suika3 offre un 60 fps fluide sur tous types d'appareils — " +
          "des Raspberry Pi en classe aux Chromebooks dans les abris de l'ONU. " +
          "En comblant l'écart matériel, nous faisons de votre ingéniosité le seul facteur limitant.",
      },
      {
        title: "Frais et économe en batterie",
        description:
          "Avec seulement 1% d'utilisation CPU sur Core Ultra 5, 8% sur Apple M5 " +
          "et 20% sur Apple A15 Bionic à 60 fps, les téléphones de vos joueurs restent froids " +
          "et leur batterie dure longtemps. Pas de throttling, pas de surchauffe — " +
          "des sessions fluides et ininterrompues, où qu'ils jouent.",
      },
    ],
  },

  lineage: {
    heading: "Histoire : Le Grand Voyage",
    subheading: "Suika3 représente l'aboutissement de plus de deux décennies d'innovation et de développement.",
    items: [
      {
        period: "2001–2004",
        title: "Suika Studio",
        description: "L'origine de notre base de code, avec nos premiers éditeurs graphiques.",
        highlight: false,
      },
      {
        period: "2005–2015",
        title: "Unfruitful",
        description: "Une décennie de R&D axée sur l'établissement d'une couche de portabilité robuste pour le support multiplateforme.",
        highlight: false,
      },
      {
        period: "2016–2024",
        title: "Suika2",
        description:
          "La pierre angulaire de notre architecture actuelle, fruit d'une décennie de R&D. " +
          "Offre une expérience de roman visuel complète avec une large compatibilité multiplateforme.",
        highlight: false,
      },
      {
        period: "2025–",
        title: "Playfield Engine",
        description: "Un moteur 2D polyvalent dérivé de la couche de portabilité centrale de la série Suika.",
        highlight: false,
      },
      {
        period: "2026–",
        title: "Suika3",
        description:
          "En synthétisant ces héritages et en introduisant NovelML et Ray, Suika3 offre " +
          "la stabilité solide comme le roc de ses prédécesseurs alliée à la flexibilité de pointe de la technologie moderne.",
        highlight: true,
      },
    ],
  },

  footer: {
    tagline: "Moteur de roman visuel mobile avec NovelML et Ray.",
    resources: "Ressources",
    community: "Communauté",
    download: "Télécharger",
    documentation: "Documentation",
  },

  downloads: {
    backToHome: "Retour à l'accueil",
    pageTitle: "Télécharger Suika3",
    versionLabel: "Version actuelle :",
    licenseNote: "Licence ZLib · Gratuit et open source",
    ltsNote: "Suika3 26.07 LTS bénéficie d'une garantie de support d'au moins 10 ans.",
    binaryTitle: "Téléchargements binaires",
    allReleasesPrefix: "Toutes les versions sont disponibles sur",
    allReleasesLink: "GitHub Releases",
    allReleasesSuffix: ".",
    packagesTitle: "Gestionnaires de paquets",
    sourceTitle: "Compiler depuis le code source",
    cmakeNote: "Nécessite CMake 3.21+ et un compilateur C (GCC, Clang ou MSVC).",
    buildDocsPrefix: "Pour les instructions spécifiques à chaque plateforme, consultez les",
    buildDocsLink: "Instructions de compilation",
    buildDocsSuffix: "dans la documentation.",
    platformTitle: "iOS, Android et Consoles",
    platformText1:
      "Le téléchargement {FullZIP} inclut des kits de développement pour iOS et Android. " +
      "Les projets de jeu exemple inclus sont prêts à être exécutés — " +
      "ouvrez-les dans {Xcode} (iOS) ou {AndroidStudio} (Android) et appuyez sur Exécuter. " +
      "Aucune configuration supplémentaire nécessaire.",
    platformText2Prefix: "Pour HarmonyOS NEXT, le plugin Unity (PS5, Switch, Xbox) et les cibles Xbox GDK, consultez les",
    platformText2Link: "Instructions de compilation",
    platformText2Suffix: "dans la documentation.",
    binaryItems: [
      {
        os: "Toutes les plateformes",
        description: "Archive ZIP complète avec tous les binaires et le jeu exemple avec intégration VS Code",
        label: "Télécharger le ZIP complet",
      },
      {
        os: "Windows (EXE seulement)",
        description: "Windows 7 SP1 et ultérieur (64 bits), sans jeu exemple",
        label: "Télécharger .exe",
      },
      {
        os: "macOS (DMG seulement)",
        description: "macOS 10.11 El Capitan et ultérieur. Sans jeu exemple.",
        label: "Télécharger .dmg",
      },
      {
        os: "Linux x86_64 (Flatpak seulement)",
        description: "Ubuntu, Debian, Fedora et plus. Sans jeu exemple.",
        label: "Télécharger Flatpak",
      },
    ],
    packageManagers: [
      { label: "Linux — Flatpak" },
      { label: "macOS — Homebrew" },
      { label: "FreeBSD — Ports" },
    ],
  },
};
