<script lang="ts">
	import { projectDetail } from '$lib/api/projects';
	import ProjectDetail from '$lib/components/sections/projectDetail/ProjectDetail.svelte';
	import ProjectDetailError from '$lib/components/sections/projectDetail/ProjectDetailError.svelte';
	import ProjectDetailLoading from '$lib/components/sections/projectDetail/ProjectDetailLoading.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>{data.project.name}</title>
</svelte:head>

<main>
	{#if $projectDetail}
		{#if $projectDetail.name === 'error' || $projectDetail.name === 'limit'}
			<ProjectDetailError project={$projectDetail} />
		{:else}
			<ProjectDetail project={$projectDetail} markdown={data.md ?? '<h2>No readme file</h2>'} />
		{/if}
	{:else}
		<ProjectDetailLoading />
	{/if}
</main>
