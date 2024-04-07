import type { TagColors, CardColorKey } from './types';

export const tagColors: TagColors = {
  default: { bg: 'bg-slate-400', border: 'dark:border-slate-400', text: 'dark:text-slate-400' },
  flutter: { bg: 'bg-sky-400', border: 'dark:border-sky-400', text: 'dark:text-sky-400' },
  dart: { bg: 'bg-teal-500', border: 'dark:border-teal-500', text: 'dark:text-teal-500' },
  html: { bg: 'bg-rose-400', border: 'dark:border-rose-400', text: 'dark:text-rose-400' },
  php: { bg: 'bg-indigo-300', border: 'dark:border-indigo-300', text: 'dark:text-indigo-300' },
  codeigniter: { bg: 'bg-red-400', border: 'dark:border-red-400', text: 'dark:text-red-400' },
  javascript: {
    bg: 'bg-yellow-400',
    border: 'dark:border-yellow-400',
    text: 'dark:text-yellow-400'
  },
  typescript: { bg: 'bg-blue-400', border: 'dark:border-blue-400', text: 'dark:text-blue-400' },
  svelte: { bg: 'bg-orange-400', border: 'dark:border-orange-400', text: 'dark:text-orange-400' }
};

export const randomizeElements = (array: CardColorKey[], count: number) => {
  if (count > array.length) {
    throw new Error('Array size cannot be smaller than expected random numbers count.');
  }
  const result: CardColorKey[] = [];
  const guardian = new Set();

  while (result.length < count) {
    const index = Math.floor(count * Math.random());
    if (guardian.has(index)) {
      continue;
    }
    const element = array[index];
    guardian.add(index);
    result.push(element);
  }
  return result;
};
