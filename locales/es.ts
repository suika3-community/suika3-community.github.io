import type { Messages } from "./types";

export const es: Messages = {
  nav: {
    downloads: "Descargas",
    docs: "Documentación",
    features: "Funciones",
    platforms: "Plataformas",
    philosophy: "Filosofía",
    lineage: "Historia",
    language: "Idioma",
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
    tagline: "Motor Suika3",
    title1: "Nueva Generación:",
    title2: "Motor de Juego 2D y Novela Visual",
    subtitle:
      "Dimos vida a Suika3 con un profundo amor por los dispositivos móviles — " +
      "las plataformas que los grandes motores 3D dejaron atrás. " +
      "Es un potente motor de juego listo para producción, " +
      "diseñado para novelas visuales y todo tipo de juegos 2D, " +
      "que funciona perfectamente en cualquier plataforma que elijas.",
    downloadBtn: "Descargar",
    docsBtn: "Leer la Documentación",
    codeLabel: "Ejemplo",
  },

  stats: {
    items: [
      { value: "60",  unit: "FPS",        label: "en Raspberry Pi" },
      { value: "4.5", unit: "×",          label: "más rápido que el intérprete (JIT)" },
      { value: "25+", unit: "años",       label: "de herencia en I+D" },
      { value: "10",  unit: "años LTS",   label: "garantía mínima de soporte" },
      { value: "1%",  unit: "CPU",        label: "en Core Ultra 5 a 60 fps" },
      { value: "2",   unit: "MB",         label: "tamaño del binario" },
      { value: "20+", unit: "plataformas", label: "escritorio, móvil, web y consola" },
    ],
  },

  features: {
    heading: "Lo que obtienes",
    subheading:
      "Velocidad de comercialización, portabilidad y extensibilidad. Un diseño que lo tiene todo.",
    items: [
      {
        title: "Móvil primero",
        description:
          "Con su núcleo escrito en C, Suika3 es ligero y funciona bien incluso en dispositivos de gama baja. " +
          "Su diseño prioriza las plataformas móviles sin comprometer las funcionalidades.",
      },
      {
        title: "NovelML",
        description:
          "Optimiza tu flujo de trabajo con NovelML, un DSL específico para novelas visuales.",
      },
      {
        title: "Ray Scripting",
        description:
          "Extiende solo lo que necesitas. Ejecuta un lenguaje personalizado similar a JS al vuelo. " +
          "Compílalo en un binario nativo para la compilación de producción.",
      },
      {
        title: "Portable",
        description:
          "Publica en cualquier lugar: Windows, macOS, Linux, Steam Deck, iOS, Android, " +
          "WebAssembly, Xbox, PS5, Switch y más.",
      },
      {
        title: "DSL de GUI y Animación",
        description: "Diseña tu UI/UX fácilmente con nuestros DSLs dedicados.",
      },
    ],
  },

  platforms: {
    heading: "Publica en Todas Partes",
    subheading:
      "Un solo código base. Cada plataforma. De Steam a la App Store — sin dolores de cabeza de porteo, " +
      "gracias a nuestra infraestructura de scripting JIT/AOT personalizada.",
    groupLabels: ["Escritorio", "Móvil", "Web", "Consola", "Tiendas", "Exóticas"],
  },

  vnFeatures: {
    heading: "Todo lo que un Juego 2D Móvil y una Novela Visual Necesitan",
    subheading:
      "Soporte completo para el flujo de trabajo de novelas visuales desde el primer momento — sin plugins, sin configuración.",
    vnSectionTitle: "Funciones de Novela Visual",
    engineSectionTitle: "Destacados del Motor",
    vnItems: [
      "Visualización de Mensajes",
      "Selección de Opciones",
      "Transiciones de Fondo y Personajes",
      "Reproducción de BGM / SE / Voz",
      "Reproducción de Video",
      "Animación de Imágenes Rasterizadas en Capas",
      "Guardar / Cargar",
      "Modo Saltar y Modo Automático",
      "Saltar Mensajes Vistos",
      "Historial de Mensajes y Repetición de Voz",
      "Galería CG",
      "Localización",
      "Visualización de Parámetros de Simulación",
      "DSL de Construcción GUI / UX",
      "Sincronización Labial",
      "Animación de Parpadeo",
    ],
    engineItems: [
      { label: "JIT VM",           desc: "2.5–4.5× más rápido que el intérprete en escritorio" },
      { label: "Compilador AOT",   desc: "Binario nativo para certificación de App Store y consola" },
      { label: "GC Generacional",  desc: "Sincronizado por frames, colección joven menor a 0.1ms" },
      { label: "Capa HAL",         desc: "DirectX 9/11/12 · Metal · OpenGL · OpenGL ES · WebGL" },
      { label: "Backends de Audio", desc: "DirectSound · Audio Unit · ALSA · OpenSL ES · OSS" },
      { label: "Licencia ZLib",    desc: "Uso comercial, juegos de código cerrado — todo permitido" },
    ],
    comingNextTitle: "Próximamente",
    comingNextText:
      "Mapa RPG 2D · Modelos de personajes 3D · Juego en red · Juegos de disparos 2D · Juegos de ritmo",
  },

  philosophy: {
    items: [
      {
        title: "Listo para App Store / Play Store / Steam",
        description:
          "Nuestro compromiso con el éxito comercial de las novelas visuales es " +
          "una inversión estratégica en la salud a largo plazo del medio.",
      },
      {
        title: "Ligero, Verdaderamente Nativo",
        description:
          "Suika3 ofrece un fluido 60 fps en todo tipo de dispositivos — desde " +
          "Raspberry Pis en aulas hasta Chromebooks en refugios de la ONU. " +
          "Al cerrar la brecha de hardware, aseguramos que tu ingenio sea lo único que importe.",
      },
      {
        title: "Fresco y Eficiente en Batería",
        description:
          "Con solo 1% de uso de CPU en Core Ultra 5, 8% en Apple M5, y 20% en " +
          "Apple A15 Bionic durante 60 fps, los teléfonos de tus jugadores se mantienen frescos " +
          "y con batería duradera. Sin throttling, sin sobrecalentamiento — solo sesiones fluidas e ininterrumpidas.",
      },
    ],
  },

  lineage: {
    heading: "Historia: El Gran Viaje",
    subheading:
      "Suika3 representa la culminación de más de dos décadas de innovación y desarrollo incesantes.",
    items: [
      {
        period: "2001–2004",
        title: "Suika Studio",
        description: "El origen de nuestro código, con nuestros primeros editores basados en GUI.",
        highlight: false,
      },
      {
        period: "2005–2015",
        title: "Unfruitful",
        description:
          "Una década de I+D enfocada en establecer una capa de portabilidad robusta para soporte multiplataforma.",
        highlight: false,
      },
      {
        period: "2016–2024",
        title: "Suika2",
        description:
          "La piedra angular de nuestra arquitectura actual y el fruto de una década de I+D dedicada. " +
          "Ofrece una experiencia completa de novela visual con amplia compatibilidad de plataformas.",
        highlight: false,
      },
      {
        period: "2025–",
        title: "Playfield Engine",
        description:
          "Un versátil motor 2D derivado de la capa de portabilidad central de la serie Suika.",
        highlight: false,
      },
      {
        period: "2026–",
        title: "Suika3",
        description:
          "Al sintetizar estos legados e introducir NovelML y Ray, Suika3 ofrece la estabilidad " +
          "sólida como una roca de sus predecesores junto con la flexibilidad de vanguardia de la tecnología moderna.",
        highlight: true,
      },
    ],
  },

  footer: {
    tagline: "Motor de novela visual móvil con NovelML y Ray.",
    resources: "Recursos",
    community: "Comunidad",
    download: "Descargar",
    documentation: "Documentación",
  },

  downloads: {
    backToHome: "Volver al inicio",
    pageTitle: "Descargar Suika3",
    versionLabel: "Versión actual:",
    licenseNote: "Licencia ZLib · Gratuito y de código abierto",
    ltsNote:
      "Suika3 26.07 LTS está programado para el 1 de julio de 2026 con una garantía mínima de soporte de 10 años.",
    binaryTitle: "Descargas Binarias",
    allReleasesPrefix: "Todas las versiones están disponibles en",
    allReleasesLink: "GitHub Releases",
    allReleasesSuffix: ".",
    packagesTitle: "Gestores de Paquetes",
    sourceTitle: "Compilar desde el Código Fuente",
    cmakeNote: "Requiere CMake 3.21+ y un compilador C (GCC, Clang o MSVC).",
    buildDocsPrefix: "Para instrucciones específicas de cada plataforma, consulta",
    buildDocsLink: "las Instrucciones de Compilación",
    buildDocsSuffix: "en la documentación.",
    platformTitle: "iOS, Android y Consola",
    platformText1:
      "La descarga {FullZIP} de arriba incluye kits de desarrollo para iOS y Android. " +
      "Los proyectos de juego de muestra incluidos están listos para ejecutarse — " +
      "ábrelos en {Xcode} (iOS) o {AndroidStudio} (Android) y pulsa el botón Ejecutar. " +
      "No se necesita configuración adicional.",
    platformText2Prefix:
      "Para HarmonyOS NEXT, Plugin de Unity (PS5, Switch, Xbox) y objetivos Xbox GDK, consulta",
    platformText2Link: "las Instrucciones de Compilación",
    platformText2Suffix: "en la documentación.",
    binaryItems: [
      {
        os: "Todas las plataformas",
        description:
          "Archivo ZIP completo con todos los binarios y juego de muestra con integración VS Code",
        label: "Descargar ZIP Completo",
      },
      {
        os: "Windows (Solo EXE)",
        description: "Windows 7 SP1 y posteriores (64 bits), sin juego de muestra",
        label: "Descargar .exe",
      },
      {
        os: "macOS (Solo DMG)",
        description: "macOS 10.11 El Capitan y posteriores. Sin juego de muestra.",
        label: "Descargar .dmg",
      },
      {
        os: "Linux x86_64 (Solo Flatpak)",
        description: "Ubuntu, Debian, Fedora y más. Sin juego de muestra.",
        label: "Descargar Flatpak",
      },
    ],
    packageManagers: [
      { label: "Linux — Flatpak" },
      { label: "macOS — Homebrew" },
      { label: "FreeBSD — Ports" },
    ],
  },
};
