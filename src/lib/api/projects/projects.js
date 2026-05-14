const githubApiLink = 'https://api.github.com/repos/ikhsan3adi';

/** @type {import('./types').Project[]} */
const initialProjects = [
  {
    id: 'kegiatin',
    name: 'Kegiatin: Event Management App',
    url: `${githubApiLink}/kegiatin`,
    description:
      'Kegiatin is an Offline-First mobile app designed for managing the activities of the Persis Youth Organization in Bandung Regency. The app supports the creation of events (single or series events), RSVPs via unique QR codes, offline attendance tracking using a local database with automatic synchronization to the server when the device is online, as well as digital archiving of event materials and documentation.',
    baseUrl: 'https://github.com/ikhsan3adi/kegiatin/raw/master/',
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
      'Polban DataCore adalah komponen agregator dan backend utama dari ekosistem Polban Dataverse.',
    baseUrl: 'https://github.com/muhamadSyahid/polban-datacore/raw/main/',
    imageUrl:
      'https://opengraph.githubassets.com/a31024273919970c63ff8fc7fd39ca4cf5a08f60e3be6b985705bd2694abaa36/ikhsan3adi/polban-datacore',
    readmeUrl: 'https://raw.githubusercontent.com/muhamadSyahid/polban-datacore/main/README.md',
    tags: ['nestjs', 'drizzle', 'postgresql', 'redis']
  },
  {
    id: 'godot-outline-quest',
    name: 'Pattern Block Activity Game: Outline Quest',
    url: `${githubApiLink}/godot-outline-quest`,
    description:
      'Outline Quest is a Pattern Block Activity game developed using the Godot Engine and C#. Players arrange geometric blocks to complete the outlines of animals such as ants, butterflies, and spiders. The game implements concepts of 2D geometric transformations (translation, rotation) and drag-and-drop interactions.',
    baseUrl: 'https://github.com/ikhsan3adi/godot-outline-quest/raw/main/',
    imageUrl:
      'https://github.com/ikhsan3adi/godot-outline-quest/raw/main/.image/README/preview-menu.png',
    readmeUrl: 'https://raw.githubusercontent.com/ikhsan3adi/godot-outline-quest/main/README.md',
    tags: ['godot', 'c#']
  },
  {
    id: 'jump-and-survive',
    name: '2D Platformer Game: Jump & Survive',
    url: `${githubApiLink}/c5-jump-and-survive`,
    description:
      'Jump & Survive is a simple 2D platformer game created using the C programming language and the SDL3 library. In this game, players control the main character, who must jump and avoid obstacles to reach the final goal.',
    baseUrl: 'https://github.com/ikhsan3adi/c5-jump-and-survive/raw/main/',
    imageUrl:
      'https://github.com/ikhsan3adi/c5-jump-and-survive/raw/docs/docs/image/how-to-play/menu.png',
    readmeUrl: 'https://raw.githubusercontent.com/ikhsan3adi/c5-jump-and-survive/main/README.md',
    tags: ['c', 'sdl3', 'gnu-make']
  },
  {
    id: 'c-snake-game',
    name: 'Snake Game Using C',
    url: `${githubApiLink}/c-snake-game`,
    baseUrl: 'https://github.com/ikhsan3adi/c-snake-game/raw/master/',
    imageUrl: 'https://github.com/ikhsan3adi/c-snake-game/raw/master/images/preview.gif',
    readmeUrl: 'https://raw.githubusercontent.com/ikhsan3adi/c-snake-game/master/README.md',
    tags: ['curses', 'gnu-make']
  },
  {
    id: 'absensi-karyawan-gps-barcode',
    name: 'Absensi Karyawan GPS Barcode',
    url: `${githubApiLink}/absensi-karyawan-gps-barcode`,
    baseUrl: 'https://github.com/ikhsan3adi/absensi-karyawan-gps-barcode/raw/master/',
    imageUrl:
      'https://repository-images.githubusercontent.com/815384595/821ebf14-dec1-4dcf-a3bd-f40958891963',
    readmeUrl:
      'https://raw.githubusercontent.com/ikhsan3adi/absensi-karyawan-gps-barcode/master/README.md',
    tags: ['laravel', 'livewire', 'jetstream']
  },
  {
    id: 'backtix',
    name: 'BackTix: Event & Ticketing App',
    url: `${githubApiLink}/backtix`,
    description:
      'Open source event and ticketing app with NestJS backend, SvelteKit admin panel, and Flutter mobile app. Features Midtrans payments, Google Sign-In, Prisma with PostgreSQL, and Open Street Map integration.',
    baseUrl: 'https://github.com/ikhsan3adi/backtix/raw/main/',
    imageUrl: 'https://github.com/ikhsan3adi/backtix/raw/main/assets/social_preview.png',
    readmeUrl: 'https://raw.githubusercontent.com/ikhsan3adi/backtix/main/README.md',
    tags: ['flutter', 'nestjs', 'svelte', 'prisma', 'postgresql', 'midtrans']
  },
  {
    id: 'absensi-sekolah-qr-code',
    name: 'Sistem Absensi QR Code',
    url: `${githubApiLink}/absensi-sekolah-qr-code`,
    baseUrl: 'https://github.com/ikhsan3adi/absensi-sekolah-qr-code/raw/master/',
    imageUrl:
      'https://github.com/ikhsan3adi/absensi-sekolah-qr-code/raw/master/screenshots/new-hero.png',
    readmeUrl:
      'https://raw.githubusercontent.com/ikhsan3adi/absensi-sekolah-qr-code/master/README.md',
    tags: ['codeigniter', 'mysql']
  }
];

export { initialProjects };
