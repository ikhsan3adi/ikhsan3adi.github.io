import { writable, type Writable } from 'svelte/store';

const hamburgerMenuExpanded: Writable<boolean> = writable(false);

const darkEnabled: Writable<boolean> = writable(false);

const enableMessageForm = false;

const USERNAME = 'ikhsan3adi';
const FULL_NAME = 'Ikhsan Satriadi';
const FIRST_NAME = 'Ikhsan';
const LAST_NAME = 'Satriadi';
const EMBLEM_NAME = 'IKHSaN3ADI';

const sourceLink = 'https://github.com/ikhsan3adi/ikhsan3adi.github.io';

const metaDescription =
  "Just a simple space to get to know Ikhsan Satriadi. Explore the everyday problems I'm trying to solve and creations made to help people make things just a bit easier.";

export {
  darkEnabled,
  EMBLEM_NAME,
  enableMessageForm,
  FIRST_NAME,
  FULL_NAME,
  hamburgerMenuExpanded,
  LAST_NAME,
  metaDescription,
  sourceLink,
  USERNAME
};
