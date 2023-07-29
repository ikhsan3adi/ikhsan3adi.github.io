import { derived, writable, type Writable } from 'svelte/store';
import type { Project } from './handler';

export const projectsStore = writable<Project[]>([]);

export const projects = derived<Writable<Project[]>, Project[]>(
	projectsStore,
	($projectsStore) => $projectsStore
);
