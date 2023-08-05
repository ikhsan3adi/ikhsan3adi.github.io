<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	import { projectDetail } from '$lib/api/projects';

	import ProjectDetail from '$lib/components/sections/project-detail/ProjectDetail.svelte';
	import ProjectDetailError from '$lib/components/sections/project-detail/ProjectDetailError.svelte';
	import ProjectDetailLoading from '$lib/components/sections/project-detail/ProjectDetailLoading.svelte';

	export let data: PageData;

	let markdownPromise: Promise<string | null>;

	onMount(() => {
		data.projectService.fetchProjectDetail({ project: data.project, fetch: data.fetch });

		markdownPromise = data.project.readmeUrl
			? data.projectService.getProjectReadme({
					project: data.project,
					fetch: data.fetch
			  })
			: new Promise<string>((resolve) => resolve('<h2>No README file</h2>'));
	});
</script>

<svelte:head>
	<title>{data.project.name}</title>
</svelte:head>

<main>
	{#if !$projectDetail}
		<ProjectDetailLoading />
	{:else if $projectDetail.name !== 'error' && $projectDetail.name !== 'limit'}
		<ProjectDetail project={$projectDetail} {markdownPromise} />
	{:else}
		<ProjectDetailError project={$projectDetail} />
	{/if}
</main>
