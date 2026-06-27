import type { Messages } from "./types";

export const ru: Messages = {
  nav: {
    downloads: "Загрузки",
    docs: "Документация",
    features: "Возможности",
    platforms: "Платформы",
    philosophy: "Философия",
    lineage: "История",
    language: "Язык",
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
    tagline: "Движок Suika3",
    title1: "Следующее Поколение:",
    title2: "2D-движок для Игр и Визуальных Новелл",
    subtitle:
      "Suika3 создан с глубокой любовью к мобильным устройствам — " +
      "платформам, которые крупные 3D-движки оставили позади. " +
      "Это мощный, готовый к продакшену игровой движок для визуальных новелл " +
      "и всех видов 2D-игр, разработанный для безупречной работы на любой платформе.",
    downloadBtn: "Скачать",
    docsBtn: "Читать документацию",
    codeLabel: "Пример",
  },

  stats: {
    items: [
      { value: "60",  unit: "FPS",        label: "на Raspberry Pi" },
      { value: "4.5", unit: "×",          label: "быстрее интерпретатора (JIT)" },
      { value: "25+", unit: "лет",        label: "истории R&D" },
      { value: "10",  unit: "лет LTS",    label: "минимальная гарантия поддержки" },
      { value: "1%",  unit: "CPU",        label: "Core Ultra 5 при 60 fps" },
      { value: "2",   unit: "МБ",         label: "размер бинарного файла" },
      { value: "20+", unit: "платформ",   label: "ПК, мобильные, веб и консоли" },
    ],
  },

  features: {
    heading: "Что вы получаете",
    subheading: "Скорость выхода на рынок, переносимость и расширяемость. Дизайн, который учитывает всё.",
    items: [
      {
        title: "Мобильные прежде всего",
        description:
          "Ядро написано на C — Suika3 лёгкий и работает отлично даже на слабых устройствах. " +
          "Дизайн ставит мобильные платформы в приоритет, не жертвуя функциональностью.",
      },
      {
        title: "NovelML",
        description: "Оптимизируйте рабочий процесс с NovelML — предметно-ориентированным языком для визуальных новелл.",
      },
      {
        title: "Скриптинг Ray",
        description:
          "Расширяйте только то, что нужно. Выполняйте JS-подобный язык на лету. " +
          "Компилируйте его в нативный бинарный файл для продакшен-сборки.",
      },
      {
        title: "Переносимость",
        description:
          "Публикуйте буквально везде: Windows, macOS, Linux, Steam Deck, iOS, Android, " +
          "WebAssembly, Xbox, PS5, Switch и многое другое.",
      },
      {
        title: "DSL для GUI и анимации",
        description: "Легко проектируйте UI/UX с помощью наших специализированных DSL.",
      },
    ],
  },

  platforms: {
    heading: "Публикуйте везде",
    subheading:
      "Одна кодовая база. Каждая платформа. От Steam до App Store — " +
      "никаких проблем с портированием благодаря нашей инфраструктуре скриптинга JIT/AOT.",
    groupLabels: ["Компьютеры", "Мобильные", "Веб", "Консоли", "Магазины", "Экзотика"],
  },

  vnFeatures: {
    heading: "Всё необходимое для мобильных 2D-игр и визуальных новелл",
    subheading: "Полный набор инструментов для визуальных новелл из коробки — без плагинов и конфигурации.",
    vnSectionTitle: "Функции визуальных новелл",
    engineSectionTitle: "Ключевые возможности движка",
    vnItems: [
      "Отображение сообщений",
      "Выбор вариантов",
      "Переходы фонов и персонажей",
      "Воспроизведение BGM / SE / голоса",
      "Воспроизведение видео",
      "Анимация многослойных растровых изображений",
      "Сохранение / Загрузка",
      "Режим пропуска и автоматический режим",
      "Пропуск прочитанных сообщений",
      "История сообщений и повтор голоса",
      "Галерея CG",
      "Локализация",
      "Отображение параметров симуляции",
      "DSL для создания GUI / UX",
      "Синхронизация губ",
      "Анимация моргания",
    ],
    engineItems: [
      { label: "JIT VM",          desc: "В 2.5–4.5 раза быстрее интерпретатора на ПК" },
      { label: "AOT-компилятор",  desc: "Нативный бинарник для App Store и сертификации консолей" },
      { label: "Поколенный GC",   desc: "Синхронизирован с кадрами, сборка молодого поколения < 0.1 мс" },
      { label: "Слой HAL",        desc: "DirectX 9/11/12 · Metal · OpenGL · OpenGL ES · WebGL" },
      { label: "Аудио-бэкенды",   desc: "DirectSound · Audio Unit · ALSA · OpenSL ES · OSS" },
      { label: "Лицензия ZLib",   desc: "Коммерческое использование, закрытый код — всё разрешено" },
    ],
    comingNextTitle: "Скоро",
    comingNextText:
      "2D RPG карта · 3D-модели персонажей · Сетевая игра · 2D-шутеры · Музыкальные игры",
  },

  philosophy: {
    items: [
      {
        title: "Готов для App Store / Play Store / Steam",
        description:
          "Наша приверженность коммерческому успеху визуальных новелл — " +
          "это стратегическая инвестиция в долгосрочное здоровье жанра.",
      },
      {
        title: "Лёгкий, по-настоящему нативный",
        description:
          "Suika3 обеспечивает плавные 60 fps на устройствах любого класса — " +
          "от Raspberry Pi в классах до Chromebook в убежищах ООН. " +
          "Сглаживая разрыв в оборудовании, мы гарантируем, что ваш талант — единственное, что имеет значение.",
      },
      {
        title: "Холодный и экономичный",
        description:
          "Всего 1% CPU на Core Ultra 5, 8% на Apple M5 и 20% на Apple A15 Bionic при 60 fps — " +
          "телефоны игроков остаются холодными, а батарея служит дольше. " +
          "Никакого троттлинга, никакого перегрева — только плавные сессии где угодно.",
      },
    ],
  },

  lineage: {
    heading: "История: Великий путь",
    subheading: "Suika3 — это кульминация более двух десятилетий неустанных инноваций и разработки.",
    items: [
      {
        period: "2001–2004",
        title: "Suika Studio",
        description: "Истоки нашей кодовой базы с первыми редакторами на основе GUI.",
        highlight: false,
      },
      {
        period: "2005–2015",
        title: "Unfruitful",
        description: "Десятилетие R&D, посвящённое созданию надёжного слоя переносимости для кроссплатформенной поддержки.",
        highlight: false,
      },
      {
        period: "2016–2024",
        title: "Suika2",
        description:
          "Краеугольный камень нашей текущей архитектуры и плод десятилетия R&D. " +
          "Обеспечивает полноценный опыт визуальной новеллы с широкой совместимостью платформ.",
        highlight: false,
      },
      {
        period: "2025–",
        title: "Playfield Engine",
        description: "Универсальный 2D-движок, производный от ядра слоя переносимости серии Suika.",
        highlight: false,
      },
      {
        period: "2026–",
        title: "Suika3",
        description:
          "Синтезируя это наследие и вводя NovelML и Ray, Suika3 объединяет " +
          "монолитную стабильность предшественников с передовой гибкостью современных технологий.",
        highlight: true,
      },
    ],
  },

  footer: {
    tagline: "Мобильный движок для визуальных новелл с NovelML и Ray.",
    resources: "Ресурсы",
    community: "Сообщество",
    download: "Скачать",
    documentation: "Документация",
  },

  downloads: {
    backToHome: "Вернуться на главную",
    pageTitle: "Скачать Suika3",
    versionLabel: "Текущая версия:",
    licenseNote: "Лицензия ZLib · Бесплатно и с открытым кодом",
    ltsNote: "Suika3 26.07 LTS поставляется с гарантией поддержки сроком не менее 10 лет.",
    binaryTitle: "Бинарные загрузки",
    allReleasesPrefix: "Все релизы доступны на",
    allReleasesLink: "GitHub Releases",
    allReleasesSuffix: ".",
    packagesTitle: "Менеджеры пакетов",
    sourceTitle: "Сборка из исходного кода",
    cmakeNote: "Требуется CMake 3.21+ и C-компилятор (GCC, Clang или MSVC).",
    buildDocsPrefix: "Инструкции для конкретных платформ см. в",
    buildDocsLink: "руководстве по сборке",
    buildDocsSuffix: "в документации.",
    platformTitle: "iOS, Android и консоли",
    platformText1:
      "Загрузка {FullZIP} включает комплекты разработки для iOS и Android. " +
      "Прилагаемые примеры игровых проектов готовы к запуску — " +
      "откройте их в {Xcode} (iOS) или {AndroidStudio} (Android) и нажмите «Запустить». " +
      "Дополнительная настройка не требуется.",
    platformText2Prefix: "Для HarmonyOS NEXT, плагина Unity (PS5, Switch, Xbox) и целей Xbox GDK см.",
    platformText2Link: "руководство по сборке",
    platformText2Suffix: "в документации.",
    binaryItems: [
      {
        os: "Все платформы",
        description: "Полный ZIP-архив со всеми бинарными файлами и примером игры с интеграцией VS Code",
        label: "Скачать Full ZIP",
      },
      {
        os: "Windows (только EXE)",
        description: "Windows 7 SP1 и новее (64-бит), без примера игры",
        label: "Скачать .exe",
      },
      {
        os: "macOS (только DMG)",
        description: "macOS 10.11 El Capitan и новее. Без примера игры.",
        label: "Скачать .dmg",
      },
      {
        os: "Linux x86_64 (только Flatpak)",
        description: "Ubuntu, Debian, Fedora и другие. Без примера игры.",
        label: "Скачать Flatpak",
      },
    ],
    packageManagers: [
      { label: "Linux — Flatpak" },
      { label: "macOS — Homebrew" },
      { label: "FreeBSD — Ports" },
    ],
  },
};
