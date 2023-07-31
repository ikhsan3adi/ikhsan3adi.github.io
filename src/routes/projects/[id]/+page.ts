import { fetchProjectDetail, type Project } from '$lib/api/projects';
import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import { projects } from '$lib/variables';

export const load = (async ({ url, fetch }) => {
	const id = url.pathname.split('/').slice(-1)[0];

	const proj: Project | undefined = projects.find((project) => project.id.toString() === id);

	if (proj === undefined) throw error(404, 'Project not found');

	await fetchProjectDetail({ project: proj, fetch });

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
