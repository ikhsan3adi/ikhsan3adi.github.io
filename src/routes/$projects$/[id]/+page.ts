import {
  ProjectService,
  GitHubRepository,
  CachedRepository,
  LocalStorageCache,
  initialProjects,
  type Project
} from '$lib/api/projects';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async ({ url, fetch }) => {
  const cache = new LocalStorageCache(import.meta.env.DEV ? 'project:dev:' : 'project:', '1');

  const repo = new CachedRepository(new GitHubRepository(), cache);

  const projectService = new ProjectService(repo);

  const id = url.pathname.split('/').slice(-1)[0];
  const project: Project | undefined = initialProjects.find((project) => project.id === id);

  if (project === undefined) {
    if (
      import.meta.env.DEV &&
      (url.pathname === '/$projects$/error' || url.pathname === '/$projects$/loading')
    ) {
      return {
        project: initialProjects[0] as Project,
        projectService,
        fetch,
        markdownPromise: projectService.getReadme(initialProjects[0], fetch)
      };
    }

    throw error(404, 'Project not found');
  }

  const markdownPromise = project.readmeUrl
    ? projectService.getReadme(project, fetch)
    : Promise.resolve('<h2>No README file</h2>');

  return { project, projectService, fetch, markdownPromise };
}) satisfies PageLoad;
