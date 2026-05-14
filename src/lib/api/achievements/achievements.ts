export interface Achievement {
  title: string;
  issuer: string;
  date: string;
  description: string;
  icon: string;
  link?: string;
}

export const achievements: Achievement[] = [
  {
    title: 'Semifinalist of Coding & Algorithms Tournament 2026',
    issuer: '@catournament',
    date: 'May 2026',
    description:
      'Advanced to the semifinal round in an individual programming competition, demonstrating problem-solving ability and strong data structure and algorithmic skills.',
    icon: 'simple-icons:cplusplus',
    link: 'https://contest.catournament.org/public'
  }
];
