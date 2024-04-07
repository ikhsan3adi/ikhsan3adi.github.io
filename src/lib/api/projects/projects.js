const githubApiLink = 'https://api.github.com/repos/ikhsan3adi';

/** @type {import('./types').Project[]} */
const initialProjects = [
  {
    id: 'backtix',
    name: 'BackTix - Event & ticketing app',
    url: `${githubApiLink}/backtix`,
    description: '',
    imageUrl: 'https://github.com/ikhsan3adi/backtix/raw/main/assets/banner.png',
    readmeUrl: 'https://raw.githubusercontent.com/ikhsan3adi/backtix/master/README.md',
    tags: ['flutter', 'nestjs', 'svelte']
  },
  {
    id: 'flutter-auction-app',
    name: 'Online Auction App',
    url: `${githubApiLink}/flutter-auction-app`,
    description: '',
    imageUrl: 'https://github.com/ikhsan3adi/Flutter-Auction-App/raw/master/images/banner.png',
    readmeUrl: 'https://raw.githubusercontent.com/ikhsan3adi/flutter-auction-app/master/README.md',
    tags: ['flutter']
  },
  {
    id: 'sistem-perpustakaan-qr-code',
    name: 'Sistem Perpustakaan QR Code',
    url: `${githubApiLink}/sistem-perpustakaan-qr-code`,
    description: '',
    imageUrl:
      'https://github.com/ikhsan3adi/sistem-perpustakaan-qr-code/raw/main/screenshots/home.png',
    readmeUrl:
      'https://raw.githubusercontent.com/ikhsan3adi/sistem-perpustakaan-qr-code/main/README.md',
    tags: ['codeigniter', 'php']
  },
  {
    id: 'flutter-celenganku-clone',
    name: 'Celenganku App Clone',
    url: `${githubApiLink}/flutter-celenganku-clone`,
    description: '',
    imageUrl:
      'https://github.com/ikhsan3adi/flutter_celenganku_app_clone/raw/master/screenshots/screenshot-1.png',
    readmeUrl:
      'https://raw.githubusercontent.com/ikhsan3adi/flutter-celenganku-clone/master/README.md',
    tags: ['flutter']
  },
  {
    id: 'absensi-sekolah-qr-code',
    name: 'Sistem Absensi QR Code',
    url: `${githubApiLink}/absensi-sekolah-qr-code`,
    description: '',
    imageUrl:
      'https://github.com/ikhsan3adi/absensi-sekolah-qr-code/raw/master/screenshots/hero.png',
    readmeUrl:
      'https://raw.githubusercontent.com/ikhsan3adi/absensi-sekolah-qr-code/master/README.md',
    tags: ['codeigniter', 'php']
  },
  {
    id: 'portfolio-website',
    name: 'Portfolio website',
    url: `${githubApiLink}/ikhsan3adi.github.io`,
    description: '',
    imageUrl: 'https://github.com/ikhsan3adi/ikhsan3adi.github.io/raw/main/images/preview.png',
    readmeUrl: 'https://raw.githubusercontent.com/ikhsan3adi/ikhsan3adi.github.io/master/README.md',
    tags: ['html', 'typescript']
  }
];

export { initialProjects };
