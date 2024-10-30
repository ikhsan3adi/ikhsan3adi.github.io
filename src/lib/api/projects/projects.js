const githubApiLink = 'https://api.github.com/repos/ikhsan3adi';

/** @type {import('./types').Project[]} */
const initialProjects = [
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
    id: 'flutter-auction-app',
    name: 'Online Auction App',
    url: `${githubApiLink}/flutter-auction-app`,
    description: '',
    baseUrl: 'https://github.com/ikhsan3adi/flutter-auction-app/raw/master/',
    imageUrl: 'https://github.com/ikhsan3adi/flutter-auction-app/raw/master/images/banner.png',
    readmeUrl: 'https://raw.githubusercontent.com/ikhsan3adi/flutter-auction-app/master/README.md',
    tags: ['flutter', 'codeigniter']
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
    id: 'sistem-perpustakaan-qr-code',
    name: 'Sistem Perpustakaan QR Code',
    url: `${githubApiLink}/sistem-perpustakaan-qr-code`,
    description: '',
    baseUrl: 'https://github.com/ikhsan3adi/sistem-perpustakaan-qr-code/raw/main/',
    imageUrl:
      'https://github.com/ikhsan3adi/sistem-perpustakaan-qr-code/raw/main/screenshots/home.png',
    readmeUrl:
      'https://raw.githubusercontent.com/ikhsan3adi/sistem-perpustakaan-qr-code/main/README.md',
    tags: ['codeigniter', 'mysql']
  },
  {
    id: 'flutter-celenganku-clone',
    name: 'Celenganku App Clone',
    url: `${githubApiLink}/flutter-celenganku-clone`,
    description: '',
    baseUrl: 'https://github.com/ikhsan3adi/flutter-celenganku-clone/raw/master/',
    imageUrl:
      'https://github.com/ikhsan3adi/flutter-celenganku-clone/raw/master/screenshots/screenshot-1.png',
    readmeUrl:
      'https://raw.githubusercontent.com/ikhsan3adi/flutter-celenganku-clone/master/README.md',
    tags: ['flutter']
  },
  {
    id: 'portfolio-website',
    name: 'Portfolio Website',
    url: `${githubApiLink}/ikhsan3adi.github.io`,
    description: '',
    baseUrl: 'https://github.com/ikhsan3adi/ikhsan3adi.github.io/raw/main/',
    imageUrl: 'https://github.com/ikhsan3adi/ikhsan3adi.github.io/raw/main/images/hero-dark.png',
    readmeUrl: 'https://raw.githubusercontent.com/ikhsan3adi/ikhsan3adi.github.io/main/README.md',
    tags: ['html', 'typescript']
  }
];

export { initialProjects };
