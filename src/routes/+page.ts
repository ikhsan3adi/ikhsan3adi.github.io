import { ProjectService, LocalStorageProjectService } from '$lib/api/projects';
import type { PageLoad } from './$types';

export const load = (async ({ fetch }) => {
  const projectService = import.meta.env.DEV
    ? new LocalStorageProjectService()
    : new ProjectService();

  return { fetch, projectService };
}) satisfies PageLoad;
