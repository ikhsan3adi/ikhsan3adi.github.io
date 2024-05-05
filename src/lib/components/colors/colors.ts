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
