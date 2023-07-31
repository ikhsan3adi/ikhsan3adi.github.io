import { projectsStore, projectDetailStore } from './store';
import { browser } from '$app/environment';
import { error } from '@sveltejs/kit';

interface Project {
	id: number;
	name: string;
	url: string;
	description?: string;
	imageUrl: string;
	imageText?: string;
	readmeUrl: string;
	tags: string[];
}

interface ProjectDetail {
	id: number;
	name: string;
	url: string;
	description?: string;
	imageUrl: string;
	imageText?: string;
	tags: string[];
	repositoryUrl: string;
	readmeUrl: string;
	hasLivePreview: boolean;
	livePreviewUrl?: string;
}

export type { Project, ProjectDetail };

export const fetchProject = async ({
	project,
	fetch
}: {
	project: Project;
	fetch: (input: URL | RequestInfo, init?: RequestInit | undefined) => Promise<Response>;
}) => {
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
				id: project.id,
				name: project.name,
				url: project.url,
				description: json.description,
				imageUrl: project.imageUrl,
				readmeUrl: project.readmeUrl,
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
						id: project.id,
						name: 'limit',
						url: project.url,
						description: json.message,
						imageUrl: project.imageUrl,
						readmeUrl: project.readmeUrl,
						tags: []
					}
				];
			} else {
				throw response;
			}

			projectsStore.update(() => fallbackData);

			return error(response.status ?? 500, 'Failed to fetch data');
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
					id: project.id,
					name: 'error',
					url: project.url,
					description: 'No internet connection',
					imageUrl: project.imageUrl,
					readmeUrl: project.readmeUrl,
					tags: []
				}
			];
		}

		projectsStore.update(() => fallbackData);

		return error(500, 'Failed to fetch data');
	}
};

export const fetchProjectDetail = async ({
	project,
	fetch
}: {
	project: Project;
	fetch: (input: URL | RequestInfo, init?: RequestInit | undefined) => Promise<Response>;
}) => {
	try {
		const response = await fetch(project.url, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		});

		const json = JSON.parse(await response.text());

		let newProject: ProjectDetail;

		if (response.status === 200) {
			newProject = {
				id: project.id,
				name: project.name,
				url: project.url,
				description: json.description,
				imageUrl: project.imageUrl,
				tags: [...project.tags, json.language.toLowerCase()],
				repositoryUrl: json['svn_url'],
				hasLivePreview: json.homepage ? true : false,
				livePreviewUrl: json.homepage,
				readmeUrl: project.readmeUrl
			};

			return projectDetailStore.update(() => newProject);
		} else {
			console.log(json);

			let fallbackData: ProjectDetail;

			if (browser && localStorage.getItem('projectDetail')) {
				fallbackData = {
					...(JSON.parse(localStorage.getItem('projectDetail') ?? '{}') as ProjectDetail),
					imageText: 'Server error / API rate limit exceeded'
				};
			} else if (response.status === 403) {
				fallbackData = {
					id: project.id,
					name: 'limit',
					url: project.url,
					description: json.message,
					imageUrl: project.imageUrl,
					tags: [],
					hasLivePreview: false,
					readmeUrl: project.readmeUrl,
					repositoryUrl: ''
				};
			} else {
				throw response;
			}

			projectDetailStore.update(() => fallbackData);

			return error(response.status ?? 500, 'Failed to fetch data');
		}
	} catch (err) {
		console.log(err);

		let fallbackData: ProjectDetail;

		if (browser && localStorage.getItem('projectDetail')) {
			fallbackData = {
				...(JSON.parse(localStorage.getItem('projectDetail') ?? '{}') as ProjectDetail),
				imageText: 'No internet connection'
			};
		} else {
			fallbackData = {
				id: project.id,
				name: 'error',
				url: project.url,
				description: 'No internet connection',
				imageUrl: project.imageUrl,
				tags: [],
				hasLivePreview: false,
				readmeUrl: project.readmeUrl,
				repositoryUrl: ''
			};
		}

		projectDetailStore.update(() => fallbackData);

		return error(500, 'Failed to fetch data');
	}
};
