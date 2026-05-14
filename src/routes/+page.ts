import { ProjectService } from '$lib/api/projects';
import type { PageLoad } from './$types';

export const load = (async ({ fetch }) => {
  const projectService: ProjectService = new ProjectService();

  return { fetch, projectService };
}) satisfies PageLoad;
