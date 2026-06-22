<script lang="ts">
  import 'highlight.js/styles/github-dark-dimmed.css';

  import { projectDetail } from '$lib/api/projects';
  import { onMount } from 'svelte';
  import type { PageData } from './$types';

  import ProjectDetail from '$lib/components/sections/project-detail/ProjectDetail.svelte';
  import ProjectDetailError from '$lib/components/sections/project-detail/ProjectDetailError.svelte';
  import ProjectDetailLoading from '$lib/components/sections/project-detail/ProjectDetailLoading.svelte';

  interface Props {
    data: PageData;
  }

  let { data }: Props = $props();

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
  {#if !$projectDetail}
    <ProjectDetailLoading />
  {:else if $projectDetail.name !== 'error' && $projectDetail.name !== 'limit'}
    <ProjectDetail project={$projectDetail} markdownPromise={data.markdownPromise} />
  {:else}
    <ProjectDetailError project={$projectDetail} />
  {/if}
</main>
