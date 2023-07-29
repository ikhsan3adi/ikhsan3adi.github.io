import { projectsStore } from './store';
import { browser } from '$app/environment';
import { error } from '@sveltejs/kit';

interface Project {
	name: string;
	url: string;
	description?: string;
	imageUrl: string;
	imageText?: string;
	tags: string[];
}

export type { Project };

export const fetchProject = async (project: Project) => {
	try {
		const response = await fetch(project.url, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		});

		const json = JSON.parse(await response.text());

		let newProject: Project;

		if (response.status === 200) {
			newProject = {
				name: project.name,
				url: project.url,
				description: json.description,
				imageUrl: project.imageUrl,
				tags: [...project.tags, json.language.toLowerCase()]
			};

			return projectsStore.update((projects) => {
				const updatedProjects = [...projects, newProject];

				if (browser) {
					try {
						localStorage.setItem('projects', JSON.stringify(updatedProjects));
					} finally {
						[];
					}
				}

				return updatedProjects;
			});
		} else {
			console.log(json);

			let fallbackData: Project[] = [];

			if (browser && localStorage.getItem('projects')) {
				fallbackData = (JSON.parse(localStorage.getItem('projects') ?? '[]') as Project[]).map(
					(project) => ({ ...project, imageText: 'Server error / API rate limit exceeded' })
				);
			} else if (response.status === 403) {
				fallbackData = [
					{
						name: 'limit',
						url: project.url,
						description: json.message,
						imageUrl: project.imageUrl,
						tags: []
					}
				];
			} else {
				throw response;
			}

			projectsStore.update(() => fallbackData);

			return error(response.status ?? 500, 'Failed to fetch datas');
		}
	} catch (err) {
		console.log(err);

		let fallbackData: Project[] = [];

		if (browser && localStorage.getItem('projects')) {
			fallbackData = (JSON.parse(localStorage.getItem('projects') ?? '[]') as Project[]).map(
				(project) => ({ ...project, imageText: 'No internet connection' })
			);
		} else {
			fallbackData = [
				{
					name: 'error',
					url: project.url,
					description: 'No internet connection',
					imageUrl: project.imageUrl,
					tags: []
				}
			];
		}

		projectsStore.update(() => fallbackData);

		return error(500, 'Failed to fetch datad');
	}
};
