import {
  ProjectService,
  GitHubRepository,
  CachedRepository,
  LocalStorageCache
} from '$lib/api/projects';
import type { PageLoad } from './$types';

export const load = (async ({ fetch }) => {
  const cache = new LocalStorageCache(import.meta.env.DEV ? 'project:dev:' : 'project:', '1');

  const repo = new CachedRepository(new GitHubRepository(), cache);

  const projectService = new ProjectService(repo);

  return { fetch, projectService };
}) satisfies PageLoad;
