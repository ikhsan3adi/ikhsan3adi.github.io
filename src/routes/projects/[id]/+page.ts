import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { type Project, ProjectService } from '$lib/api/projects';
import { initialProjects } from '$lib/api/projects';

export const load = (async ({ url, fetch }) => {
	const projectDetail: ProjectService = new ProjectService();

	const id = url.pathname.split('/').slice(-1)[0];
	const proj: Project | undefined = initialProjects.find((project) => project.id.toString() === id);

	if (proj === undefined) throw error(404, 'Project not found');

	await projectDetail.fetchProjectDetail({ project: proj, fetch });

	const markdown = await getMarkdown();

	async function getMarkdown() {
		try {
			const response = await fetch(proj?.readmeUrl ?? '', {
				method: 'GET'
			});
			const text = await response.text();
			return text;
		} catch (error) {
			return null;
		}
	}

	return { project: proj, md: markdown };
}) satisfies PageLoad;
