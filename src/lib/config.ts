import { writable, type Writable } from 'svelte/store';

const hamburgerMenuExpanded: Writable<boolean> = writable(false);

const darkEnabled: Writable<boolean> = writable(false);

const enableMessageForm = false;

export { darkEnabled, enableMessageForm, hamburgerMenuExpanded };

