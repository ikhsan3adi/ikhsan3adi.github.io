interface Project {
	id: number;
	name: string;
	url: string;
	description?: string;
	imageUrl: string;
	imageText?: string;
	readmeUrl?: string;
	tags: string[];
	starsCount?: number;
	forksCount?: number;
	downloadsCount?: number;
}

interface ProjectDetail extends Project {
	repositoryUrl: string;
	hasLivePreview: boolean;
	livePreviewUrl?: string;
}

export type { Project, ProjectDetail };
