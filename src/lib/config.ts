import { writable, type Writable } from 'svelte/store';

export const hamburgerMenuExpanded: Writable<boolean> = writable(false);

export const darkEnabled: Writable<boolean> = writable(false);

export const enableMessageForm = false;

export const USERNAME = 'ikhsan3adi';
export const FULL_NAME = 'Ikhsan Satriadi';
export const FIRST_NAME = 'Ikhsan';
export const LAST_NAME = 'Satriadi';
export const EMBLEM_NAME = 'IKHSaN3ADI';

export const sourceLink = 'https://github.com/ikhsan3adi/ikhsan3adi.github.io';

export const metaDescription =
  "Just a simple space to get to know Ikhsan Satriadi. Explore the everyday problems I'm trying to solve and creations made to help people make things just a bit easier.";
