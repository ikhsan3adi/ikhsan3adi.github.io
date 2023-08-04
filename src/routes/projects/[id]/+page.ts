import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { type Project, ProjectService } from '$lib/api/projects';
import { initialProjects } from '$lib/api/projects';

export const load = (async ({ url, fetch }) => {
	const projectService: ProjectService = new ProjectService();

	const id = url.pathname.split('/').slice(-1)[0];
	const project: Project | undefined = initialProjects.find(
		(project) => project.id.toString() === id
	);

	if (project === undefined) throw error(404, 'Project not found');

	return { project: project, projectService: projectService, fetch: fetch };
}) satisfies PageLoad;
