interface PhotoCard {
  title: string;
  description: string;
  bgClass: string;
  transformClass: string;
  cardSizeClass: string;
  imgClass: string;
  baseZ: number;
  imgSrc?: string;
  halftone?: boolean;
}

// TODO: Replace the placeholder images with real photos and update the descriptions accordingly
export const photoCards: PhotoCard[] = [
  {
    imgSrc: '019f7690-818a-71ea-bc4b-172aeca1d8de.png',
    title: 'Random Photo',
    description: 'A random photo that I took when I was in [REDACTED]',
    bgClass: 'bg-emerald-200 dark:bg-emerald-400',
    transformClass: 'rotate-2 -bottom-16 sm:-bottom-12 -right-4 sm:right-4',
    cardSizeClass: 'w-80',
    imgClass: 'aspect-4/3',
    halftone: false
  },
  {
    imgSrc: 'https://avatars.githubusercontent.com/u/93766033?v=4',
    title: 'My Current Github Avatar😂',
    description: 'Look, I can take pictures from other sites. This is magic, right?',
    bgClass: 'bg-fuchsia-200 dark:bg-fuchsia-400',
    transformClass: '-rotate-4 -bottom-2 sm:bottom-2 lg:-bottom-12 -left-4 sm:-left-3',
    cardSizeClass: 'w-72',
    imgClass: 'aspect-square',
    halftone: false
  },
  {
    imgSrc: undefined,
    title: 'Me at coding',
    description: 'Opening my laptop to vibe code bugs',
    bgClass: 'bg-fuchsia-200 dark:bg-fuchsia-400',
    transformClass: 'rotate-1 -top-2 sm:top-2 lg:-top-12 -right-8 sm:-right-4',
    cardSizeClass: 'w-96',
    imgClass: 'aspect-video',
    halftone: false
  },
  {
    imgSrc: '019f7690-b69d-7599-b8cd-0a2279ee7d60.png',
    title: 'Me',
    description: 'This is me. The photo was taken at my bedroom',
    bgClass: 'bg-indigo-200 dark:bg-indigo-400',
    transformClass: 'rotate-[-1.5deg] -top-2 sm:top-0 lg:-top-3 -left-8 sm:left-0',
    cardSizeClass: 'w-72',
    imgClass: 'aspect-3/4',
    halftone: false
  }
].map((card, index) => ({ ...card, baseZ: index + 1 }));

export const aboutTexts = [
  `Informatics Engineering student focused on back-end development, full-stack systems, and practical software architecture, with a daily workflow built around a customized Linux setup.`,
  `Built projects across web, mobile, and application systems including event management platforms, ticketing apps, attendance systems, data aggregation services to AI-driven chatbots and real-time tracking tools.`,
  `Active in the open-source community as a maintainer and contributor, with hands-on experience in pull requests, code reviews, documentation, and release coordination.`,
  `Comfortable working with REST APIs, databases, deployment workflows, data structures, algorithmic thinking, and software design patterns.`,
  `Outside project work, competitive programming remains a regular outlet for sharpening problem-solving under time constraints.`
];
