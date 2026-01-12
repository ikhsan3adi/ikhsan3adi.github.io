const githubApiLink = 'https://api.github.com/repos/ikhsan3adi';

/** @type {import('./types').Project[]} */
const initialProjects = [
  {
    id: 'polban-datacore',
    name: 'Polban DataCore',
    url: `https://api.github.com/repos/muhamadSyahid/polban-datacore`,
    description:
      'Polban DataCore adalah komponen agregator dan backend utama dari ekosistem Polban Dataverse.',
    baseUrl: 'https://github.com/muhamadSyahid/polban-datacore/raw/main/',
    imageUrl: 'https://github.com/user-attachments/assets/76e036d9-edd0-4ef9-8a22-c3600f7c5024',
    readmeUrl: 'https://raw.githubusercontent.com/muhamadSyahid/polban-datacore/main/README.md',
    tags: ['nestjs', 'drizzle', 'postgresql']
  },
  {
    id: 'absensi-sekolah-qr-code',
    name: 'Sistem Absensi QR Code',
    url: `${githubApiLink}/absensi-sekolah-qr-code`,
    description: '',
    baseUrl: 'https://github.com/ikhsan3adi/absensi-sekolah-qr-code/raw/master/',
    imageUrl:
      'https://github.com/ikhsan3adi/absensi-sekolah-qr-code/raw/master/screenshots/hero.png',
    readmeUrl:
      'https://raw.githubusercontent.com/ikhsan3adi/absensi-sekolah-qr-code/master/README.md',
    tags: ['codeigniter', 'mysql']
  },
  {
    id: 'absensi-karyawan-gps-barcode',
    name: 'Absensi Karyawan GPS Barcode',
    url: `${githubApiLink}/absensi-karyawan-gps-barcode`,
    description: '',
    baseUrl: 'https://github.com/ikhsan3adi/absensi-karyawan-gps-barcode/raw/master/',
    imageUrl:
      'https://github.com/ikhsan3adi/absensi-karyawan-gps-barcode/raw/master/screenshots/hero.png',
    readmeUrl:
      'https://raw.githubusercontent.com/ikhsan3adi/absensi-karyawan-gps-barcode/master/README.md',
    tags: ['laravel', 'livewire', 'jetstream']
  },
  {
    id: 'backtix',
    name: 'BackTix - Event & Ticketing App',
    url: `${githubApiLink}/backtix`,
    description: '',
    baseUrl: 'https://github.com/ikhsan3adi/backtix/raw/main/',
    imageUrl: 'https://github.com/ikhsan3adi/backtix/raw/main/assets/social_preview.png',
    readmeUrl: 'https://raw.githubusercontent.com/ikhsan3adi/backtix/main/README.md',
    tags: ['flutter', 'nestjs', 'svelte']
  },
  {
    id: 'c-snake-game',
    name: 'Snake Game Using C',
    url: `${githubApiLink}/c-snake-game`,
    description: '',
    baseUrl: 'https://github.com/ikhsan3adi/c-snake-game/raw/master/',
    imageUrl: 'https://github.com/ikhsan3adi/c-snake-game/raw/master/images/preview.gif',
    readmeUrl: 'https://raw.githubusercontent.com/ikhsan3adi/c-snake-game/master/README.md',
    tags: []
  }
];

export { initialProjects };
