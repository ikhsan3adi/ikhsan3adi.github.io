import {
  ProjectService,
  GitHubRepository,
  CachedRepository,
  LocalStorageCache
} from '$lib/api/projects';
import type { PageLoad } from './$types';

export const load = (async ({ fetch }) => {
  const cacheStore = new LocalStorageCache(import.meta.env.DEV ? 'project:dev:' : 'project:', '1');

  const repo = new CachedRepository(new GitHubRepository(), cacheStore);

  const projectService = new ProjectService(repo);

  return { fetch, projectService, cacheStore };
}) satisfies PageLoad;
