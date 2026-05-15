const LBULLET = '✦';

const topMarqueeTexts = [
  'Welcome to my website!',
  'A Linux user',
  'Always facing the terminal',
  'Prefer open-source software',
  'New technologies excite me',
  'Develop Bugs',
  'Power user'
].map((e) => `${LBULLET} ${e}`);

const bottomMarqueeTexts = [
  'Projects',
  'Apps',
  'Websites',
  'Tools',
  'APIs',
  'Open-source contributions',
  'Not showing sus projects here'
].map((e) => `${LBULLET} ${e}`);

export { bottomMarqueeTexts, topMarqueeTexts };
