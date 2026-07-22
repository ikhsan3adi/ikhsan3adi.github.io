const githubApiLink = 'https://api.github.com/repos/ikhsan3adi';

/** @type {import('./types').Project[]} */
export const initialProjects = [
  {
    id: 'ruwet-meter',
    name: 'RuwetMeter',
    url: `${githubApiLink}/RuwetMeter`,
    description:
      'AI Agent buat mantau keruwetan Indonesia. Scrape berita, analisis pakai LLM, dengan chatbot RAG interaktif.',
    readmeBaseUrl: 'https://github.com/ikhsan3adi/RuwetMeter/raw/master/',
    imageUrl: 'https://github.com/ikhsan3adi/RuwetMeter/raw/master/img/RuwetMeter.png',
    readmeUrl: 'https://raw.githubusercontent.com/ikhsan3adi/RuwetMeter/master/README.md',
    tags: ['ai-agent', 'chatbot', 'rag', 'svelte', 'hono', 'postgresql', 'pgvector', 'rss']
  },
  {
    id: 'ngasih-tau-ada-bis-di-sarijadi-atau-nggak',
    name: 'Ngasih Tau Ada Bis di Sarijadi Atau Nggak',
    url: `${githubApiLink}/ngasih-tau-ada-bis-di-sarijadi-atau-nggak`,
    description:
      'Small side project to monitor bus positions in Sarijadi area and notify when buses enter/exit geofence zones. Maps bus movements, sends Telegram notifications with live location updates.',
    readmeBaseUrl:
      'https://github.com/ikhsan3adi/ngasih-tau-ada-bis-di-sarijadi-atau-nggak/raw/master/',
    imageUrl:
      'https://repository-images.githubusercontent.com/1260532468/31892f37-4a2e-47ea-8c30-4ee5007f0dce',
    readmeUrl:
      'https://raw.githubusercontent.com/ikhsan3adi/ngasih-tau-ada-bis-di-sarijadi-atau-nggak/master/README.md',
    tags: ['typescript', 'bun', 'telegram', 'geofence', 'bus-tracking', 'react', 'vite']
  },
  {
    id: 'kegiatin',
    name: 'Kegiatin: Event Management App',
    url: `${githubApiLink}/kegiatin`,
    description:
      'Kegiatin is an Offline-First mobile app designed for managing the activities of the Persis Youth Organization in Bandung Regency. The app supports the creation of events (single or series events), RSVPs via unique QR codes, offline attendance tracking using a local database with automatic synchronization to the server when the device is online, as well as digital archiving of event materials and documentation.',
    readmeBaseUrl: 'https://github.com/ikhsan3adi/kegiatin/raw/master/',
    imageUrl:
      'https://opengraph.githubassets.com/5a06fc8ab7c7cf4667a8236ff16ac689f9e18d32e065f2c99adab225bd7b388e/ikhsan3adi/kegiatin',
    readmeUrl: 'https://raw.githubusercontent.com/ikhsan3adi/kegiatin/master/README.md',
    tags: ['flutter', 'nestjs', 'postgresql']
  },
  {
    id: 'polban-datacore',
    name: 'Polban DataCore',
    url: `https://api.github.com/repos/muhamadSyahid/polban-datacore`,
    description:
      'Polban DataCore is the main aggregator and backend of the Polban Dataverse ecosystem. It bridges raw data sources with data visualization. Its main responsibilities include extracting raw data such as students, lecturers, and academic data from DataHub, loading the data into an internal database for processing, transforming and aggregating the raw data into meaningful statistics and materialized views, and serving the processed data through a fast, cached REST API.',
    readmeBaseUrl: 'https://github.com/muhamadSyahid/polban-datacore/raw/main/',
    imageUrl:
      'https://opengraph.githubassets.com/0590d0149fd3bc46940190830ca2f13798a84a9bd124901af357843662aeef30/muhamadSyahid/polban-datacore',
    readmeUrl: 'https://raw.githubusercontent.com/muhamadSyahid/polban-datacore/main/README.md',
    tags: ['nestjs', 'drizzle', 'postgresql', 'redis']
  },
  {
    id: 'godot-outline-quest',
    name: 'Pattern Block Activity Game: Outline Quest',
    url: `${githubApiLink}/godot-outline-quest`,
    description:
      'Outline Quest is a Pattern Block Activity game developed using the Godot Engine and C#. Players arrange geometric blocks to complete the outlines of animals such as ants, butterflies, and spiders. The game implements concepts of 2D geometric transformations (translation, rotation) and drag-and-drop interactions.',
    readmeBaseUrl: 'https://github.com/ikhsan3adi/godot-outline-quest/raw/main/',
    imageUrl:
      'https://github.com/ikhsan3adi/godot-outline-quest/raw/main/.image/README/preview-menu.png',
    readmeUrl: 'https://raw.githubusercontent.com/ikhsan3adi/godot-outline-quest/main/README.md',
    tags: ['godot', 'csharp', 'dotnet']
  },
  {
    id: 'jump-and-survive',
    name: '2D Platformer Game: Jump & Survive',
    url: `${githubApiLink}/c5-jump-and-survive`,
    description:
      'Jump & Survive is a simple 2D platformer game created using the C programming language and the SDL3 library. In this game, players control the main character, who must jump and avoid obstacles to reach the final goal.',
    readmeBaseUrl: 'https://github.com/ikhsan3adi/c5-jump-and-survive/raw/main/',
    imageUrl:
      'https://github.com/ikhsan3adi/c5-jump-and-survive/raw/docs/docs/image/how-to-play/menu.png',
    readmeUrl: 'https://raw.githubusercontent.com/ikhsan3adi/c5-jump-and-survive/main/README.md',
    tags: ['c', 'sdl3', 'gnu-make']
  },
  {
    id: 'c-snake-game',
    name: 'Snake Game Using C',
    url: `${githubApiLink}/c-snake-game`,
    readmeBaseUrl: 'https://github.com/ikhsan3adi/c-snake-game/raw/master/',
    imageUrl: 'https://github.com/ikhsan3adi/c-snake-game/raw/master/images/preview.gif',
    readmeUrl: 'https://raw.githubusercontent.com/ikhsan3adi/c-snake-game/master/README.md',
    tags: ['c', 'curses', 'gnu-make']
  },
  {
    id: 'absensi-karyawan-gps-barcode',
    name: 'Absensi Karyawan GPS Barcode',
    url: `${githubApiLink}/absensi-karyawan-gps-barcode`,
    readmeBaseUrl: 'https://github.com/ikhsan3adi/absensi-karyawan-gps-barcode/raw/master/',
    imageUrl:
      'https://repository-images.githubusercontent.com/815384595/821ebf14-dec1-4dcf-a3bd-f40958891963',
    readmeUrl:
      'https://raw.githubusercontent.com/ikhsan3adi/absensi-karyawan-gps-barcode/master/README.md',
    tags: ['laravel', 'livewire', 'jetstream']
  },
  {
    id: 'markdown-translator',
    name: 'Markdown Translator Action',
    url: `${githubApiLink}/markdown-translator`,
    description:
      'GitHub Action to translate any Markdown/README files to any language. Supports multiple files and subdirectories with configurable target languages via Google Cloud Translate.',
    readmeBaseUrl: 'https://github.com/ikhsan3adi/markdown-translator/raw/master/',
    imageUrl:
      'https://opengraph.githubassets.com/e0ce213cd3b34531b66e865f3f136b3fc98e4e3020159c6f019381e767f050a6/ikhsan3adi/markdown-translator',
    readmeUrl: 'https://raw.githubusercontent.com/ikhsan3adi/markdown-translator/master/README.md',
    tags: ['typescript', 'github-actions', 'markdown', 'translation', 'localization']
  },
  {
    id: 'backtix',
    name: 'BackTix: Event & Ticketing App',
    url: `${githubApiLink}/backtix`,
    description:
      'Open source event and ticketing app with NestJS backend, SvelteKit admin panel, and Flutter mobile app. Features Midtrans payments, Google Sign-In, Prisma with PostgreSQL, and Open Street Map integration.',
    readmeBaseUrl: 'https://github.com/ikhsan3adi/backtix/raw/main/',
    imageUrl: 'https://github.com/ikhsan3adi/backtix/raw/main/assets/social_preview.png',
    readmeUrl: 'https://raw.githubusercontent.com/ikhsan3adi/backtix/main/README.md',
    tags: ['flutter', 'nestjs', 'svelte', 'prisma', 'postgresql', 'midtrans']
  },
  {
    id: 'quick-social',
    name: 'Quick Social App',
    url: `${githubApiLink}/quick_social`,
    description:
      'Flutter simple social media app UI prototype. Features feed page, story view, profile pages, comment bottom sheet, and notification page with responsive multiplatform design.',
    readmeBaseUrl: 'https://github.com/ikhsan3adi/quick_social/raw/main/',
    imageUrl:
      'https://github.com/ikhsan3adi/quick_social/raw/main/.screenshots/quick_social_banner.png',
    readmeUrl: 'https://raw.githubusercontent.com/ikhsan3adi/quick_social/main/README.md',
    tags: ['flutter', 'dart', 'android', 'ios', 'ui']
  },
  {
    id: 'sistem-perpustakaan-qr-code',
    name: 'BukuHub: Sistem Perpustakaan',
    url: `${githubApiLink}/sistem-perpustakaan-qr-code`,
    readmeBaseUrl: 'https://github.com/ikhsan3adi/sistem-perpustakaan-qr-code/raw/main/',
    imageUrl:
      'https://github.com/ikhsan3adi/sistem-perpustakaan-qr-code/raw/main/screenshots/home.png',
    readmeUrl:
      'https://raw.githubusercontent.com/ikhsan3adi/sistem-perpustakaan-qr-code/main/README.md',
    tags: ['codeigniter', 'mysql', 'bootstrap']
  },
  {
    id: 'flutter-auction-app',
    name: 'Flutter Auction App',
    url: `${githubApiLink}/flutter-auction-app`,
    readmeBaseUrl: 'https://github.com/ikhsan3adi/flutter-auction-app/raw/master/',
    imageUrl: 'https://github.com/ikhsan3adi/Flutter-Auction-App/raw/master/images/banner.png',
    readmeUrl: 'https://raw.githubusercontent.com/ikhsan3adi/flutter-auction-app/master/README.md',
    tags: ['flutter', 'codeigniter', 'mysql']
  },
  {
    id: 'absensi-sekolah-qr-code',
    name: 'Sistem Absensi QR Code',
    url: `${githubApiLink}/absensi-sekolah-qr-code`,
    readmeBaseUrl: 'https://github.com/ikhsan3adi/absensi-sekolah-qr-code/raw/master/',
    imageUrl:
      'https://github.com/ikhsan3adi/absensi-sekolah-qr-code/raw/master/screenshots/new-hero.png',
    readmeUrl:
      'https://raw.githubusercontent.com/ikhsan3adi/absensi-sekolah-qr-code/master/README.md',
    tags: ['codeigniter', 'mysql']
  }
];
