import { clamp } from '$lib/utils';
import type { TagColors } from './types';

export const tagColors: TagColors = {
  default: {
    bg: 'bg-slate-400 dark:bg-slate-800',
    border: 'dark:border-slate-400',
    text: 'dark:text-slate-400'
  },
  nestjs: {
    bg: 'bg-red-400 dark:bg-slate-800',
    border: 'dark:border-red-400',
    text: 'dark:text-red-400'
  },
  flutter: {
    bg: 'bg-sky-400 dark:bg-slate-800',
    border: 'dark:border-sky-400',
    text: 'dark:text-sky-400'
  },
  dart: {
    bg: 'bg-teal-500 dark:bg-slate-800',
    border: 'dark:border-teal-500',
    text: 'dark:text-teal-500'
  },
  html: {
    bg: 'bg-rose-400 dark:bg-slate-800',
    border: 'dark:border-rose-400',
    text: 'dark:text-rose-400'
  },
  php: {
    bg: 'bg-indigo-300 dark:bg-slate-800',
    border: 'dark:border-indigo-300',
    text: 'dark:text-indigo-300'
  },
  codeigniter: {
    bg: 'bg-red-400 dark:bg-slate-800',
    border: 'dark:border-red-400',
    text: 'dark:text-red-400'
  },
  laravel: {
    bg: 'bg-red-400 dark:bg-slate-800',
    border: 'dark:border-red-400',
    text: 'dark:text-red-400'
  },
  blade: {
    bg: 'bg-red-400 dark:bg-slate-800',
    border: 'dark:border-red-400',
    text: 'dark:text-red-400'
  },
  javascript: {
    bg: 'bg-yellow-400 dark:bg-slate-800',
    border: 'dark:border-yellow-400',
    text: 'dark:text-yellow-400'
  },
  typescript: {
    bg: 'bg-blue-400 dark:bg-slate-800',
    border: 'dark:border-blue-400',
    text: 'dark:text-blue-400'
  },
  svelte: {
    bg: 'bg-orange-400 dark:bg-slate-800',
    border: 'dark:border-orange-400',
    text: 'dark:text-orange-400'
  }
};

export const cardColors = [
  'bg-red-200 dark:bg-red-400',
  'bg-green-300 dark:bg-green-400',
  'bg-blue-300 dark:bg-blue-400',
  'bg-sky-300 dark:bg-sky-400',
  'bg-indigo-300 dark:bg-indigo-400',
  'bg-yellow-300 dark:bg-yellow-400',
  'bg-purple-300 dark:bg-purple-400',
  'bg-pink-300 dark:bg-pink-400',
  'bg-fuchsia-300 dark:bg-fuchsia-400',
  'bg-teal-300 dark:bg-teal-400',
  'bg-emerald-300 dark:bg-emerald-400',
  'bg-orange-300 dark:bg-orange-400',
  'bg-amber-200 dark:bg-amber-400',
  'bg-gray-300 dark:bg-gray-400',
  'bg-lime-300 dark:bg-lime-400',
  'bg-slate-300 dark:bg-slate-400'
];

export const randomizeElements = <T>(array: Array<T>, newLength: number) => {
  const newArray = [];

  for (let i = newLength - 1; i >= 0; i--) {
    const j = clamp(Math.floor(Math.random() * (i + 1)), 0, array.length - 1);
    const index = clamp(i, 0, array.length - 1);
    [array[index], array[j]] = [array[j], array[index]];
    newArray[i] = array[index];
  }

  return newArray;
};
