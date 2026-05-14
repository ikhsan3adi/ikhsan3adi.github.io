import { writable, type Writable } from 'svelte/store';

const hamburgerMenuExpanded: Writable<boolean> = writable(false);

const darkEnabled: Writable<boolean> = writable(false);

const enableMessageForm = false;

const USERNAME = 'ikhsan3adi';
const FULL_NAME = 'Ikhsan Satriadi';
const FIRST_NAME = 'Ikhsan';
const LAST_NAME = 'Satriadi';
const EMBLEM_NAME = 'IKHSaN3ADI';

export {
  darkEnabled,
  EMBLEM_NAME,
  enableMessageForm,
  FIRST_NAME,
  FULL_NAME,
  hamburgerMenuExpanded,
  LAST_NAME,
  USERNAME
};
