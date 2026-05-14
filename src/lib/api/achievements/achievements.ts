export interface Achievement {
  title: string;
  issuer: string;
  date: string;
  description: string;
  icon: string;
  type?: 'competition' | 'course' | 'other';
  link?: string;
}

export const achievements: Achievement[] = [
  {
    title: 'Belajar Fundamental Aplikasi Back-End',
    issuer: 'Dicoding Indonesia',
    date: 'Jun 2023',
    description:
      'Built a back-end application in the form of a RESTful API that implements Database, Authentication and Authorization, Message Broker, Storage, and Caching based on real-world case studies.',
    icon: 'simple-icons:javascript',
    type: 'course',
    link: 'https://www.dicoding.com/certificates/ERZRG20JQPYV'
  },
  {
    title: 'Memulai Dasar Pemrograman untuk Menjadi Pengembang Software',
    issuer: 'Dicoding Indonesia',
    date: 'Aug 2023',
    description:
      'Modify software applications using flowchart guides and programming with basic HTML, CSS, and JavaScript technologies accurately according to application specification and functional requirements.',
    icon: 'lucide:code-2',
    type: 'course',
    link: 'https://www.dicoding.com/certificates/EYX4JRQ2RZDL'
  },
  {
    title: 'Belajar Dasar Visualisasi Data',
    issuer: 'Dicoding Indonesia',
    date: 'Aug 2023',
    description:
      'Create an effective data visualization using Google Sheets following industry best practices, enhancing its value for a career as a Software Developer.',
    icon: 'simple-icons:googlesheets',
    type: 'course',
    link: 'https://www.dicoding.com/certificates/4EXGQD2DQZRL'
  },
  {
    title: 'Menjadi Back-End Developer Expert',
    issuer: 'Dicoding Indonesia',
    date: 'Nov 2023',
    description:
      'Building back-end applications in the form of testable, scalable, easy and fast to deploy RESTful APIs with good security according to industry standards.',
    icon: 'simple-icons:javascript',
    type: 'course',
    link: 'https://www.dicoding.com/certificates/L4PQ8V734ZO1'
  },
  {
    title: 'Belajar Membuat Aplikasi Flutter untuk Pemula',
    issuer: 'Dicoding Indonesia',
    date: 'Sep 2024',
    description:
      'Building mobile applications using Flutter, a cross-platform framework, to create beautiful and performant apps for both Android and iOS platforms.',
    icon: 'simple-icons:flutter',
    type: 'course',
    link: 'https://www.dicoding.com/certificates/N9ZOY3560PG5'
  },
  {
    title: 'Participant of Senior Competitive Programming Contest at COMPFEST 17',
    issuer: 'COMPFEST 17',
    date: 'Aug 2025',
    description:
      'Compete against top university students in Indonesia in a prestigious competitive programming contest, showcasing problem-solving skills and algorithmic thinking.',
    icon: 'simple-icons:cplusplus',
    type: 'competition',
    link: 'https://verify.compfest.id/verify/cf-2025-e084a946-1b2e-47a4-ab63-5258651a9774'
  },
  {
    title: 'Semifinalist of Coding & Algorithms Tournament 2026',
    issuer: 'CAT2026',
    date: 'May 2026 (Ongoing)',
    description:
      'Advanced to the semifinal round in an individual programming competition, demonstrating problem-solving ability and strong data structure and algorithmic skills.',
    icon: 'simple-icons:cplusplus',
    type: 'competition'
  }
];
