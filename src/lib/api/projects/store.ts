import { derived, writable, type Writable } from 'svelte/store';
import type { Project, ProjectDetail } from './handler';

export const projectsStore = writable<Project[]>([]);

export const projectDetailStore = writable<ProjectDetail>();

export const projects = derived<Writable<Project[]>, Project[]>(
	projectsStore,
	($projects) => $projects
);

export const projectDetail = derived<Writable<ProjectDetail>, ProjectDetail>(
	projectDetailStore,
	($projectDetail) => $projectDetail
);
