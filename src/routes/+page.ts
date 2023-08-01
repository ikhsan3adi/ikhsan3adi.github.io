import type { PageLoad } from './$types';
import { ProjectService } from '$lib/api/projects';

export const load = (async ({ fetch }) => {
	const projectService: ProjectService = new ProjectService();

	return { fetch: fetch, projectService: projectService };
}) satisfies PageLoad;
