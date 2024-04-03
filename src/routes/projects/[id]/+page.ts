import { ProjectService, initialProjects, type Project } from '$lib/api/projects';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async ({ url, fetch }) => {
	const projectService: ProjectService = new ProjectService();

	const id = url.pathname.split('/').slice(-1)[0];
	const project: Project | undefined = initialProjects.find(
		(project) => project.id === id
	);

	if (project === undefined) throw error(404, 'Project not found');

	return { project: project, projectService: projectService, fetch: fetch };
}) satisfies PageLoad;
