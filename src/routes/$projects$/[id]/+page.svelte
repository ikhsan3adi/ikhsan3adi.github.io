<script lang="ts">
  import { onMount } from 'svelte';
  import type { PageData } from './$types';
  import { page } from '$app/state';

  import 'highlight.js/styles/github-dark-dimmed.css';

  import { projectDetail } from '$lib/api/projects';

  import ProjectDetail from '$lib/components/sections/project-detail/ProjectDetail.svelte';
  import ProjectDetailError from '$lib/components/sections/project-detail/ProjectDetailError.svelte';
  import ProjectDetailLoading from '$lib/components/sections/project-detail/ProjectDetailLoading.svelte';

  interface Props {
    data: PageData;
  }

  let { data }: Props = $props();

  let currentPath = $derived(page.url.pathname);

  onMount(() => {
    data.projectService.fetchProjectDetail({ project: data.project, fetch: data.fetch });
  });
</script>

<svelte:head>
  <title>{data.project.name}</title>

  <meta name="description" content={data.project.description || ''} />
  <meta property="og:description" content={data.project.description || ''} />
  <meta name="twitter:description" content={data.project.description || ''} />
</svelte:head>

<main>
  {#if currentPath === '/$projects$/loading'}
    <ProjectDetailLoading />
  {:else if currentPath === '/$projects$/error'}
    <ProjectDetailError project={$projectDetail} />
  {:else if !$projectDetail}
    <ProjectDetailLoading />
  {:else if $projectDetail.name !== 'error' && $projectDetail.name !== 'limit'}
    <ProjectDetail project={$projectDetail} markdownPromise={data.markdownPromise} />
  {:else}
    <ProjectDetailError project={$projectDetail} />
  {/if}
</main>
