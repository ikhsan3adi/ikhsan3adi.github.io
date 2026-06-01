import { ProjectService, initialProjects, type Project } from '$lib/api/projects';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async ({ url, fetch }) => {
  const projectService: ProjectService = new ProjectService();

  const id = url.pathname.split('/').slice(-1)[0];
  const project: Project | undefined = initialProjects.find((project) => project.id === id);

  if (project === undefined) throw error(404, 'Project not found');

  const markdownPromise = project.readmeUrl
    ? projectService.getProjectReadme({ project: project, fetch: fetch })
    : Promise.resolve('<h2>No README file</h2>');

  return { project: project, projectService: projectService, fetch: fetch, markdownPromise };
}) satisfies PageLoad;
