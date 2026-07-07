<script lang="ts">
  import { onMount } from 'svelte';
  import type { PageData } from './$types';
  import { page } from '$app/state';

  import 'highlight.js/styles/github-dark-dimmed.css';

  import { projectStore } from '$lib/api/projects';

  import ProjectDetail from '$lib/components/sections/project-detail/ProjectDetail.svelte';
  import ProjectDetailError from '$lib/components/sections/project-detail/ProjectDetailError.svelte';
  import ProjectDetailLoading from '$lib/components/sections/project-detail/ProjectDetailLoading.svelte';

  interface Props {
    data: PageData;
  }

  let { data }: Props = $props();

  let currentPath = $derived(page.url.pathname);

  onMount(() => {
    data.projectService.openDetail(data.project, data.fetch);
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
    <ProjectDetailLoading project={projectStore.projectDetail} />
  {:else if currentPath === '/$projects$/error'}
    <ProjectDetailError
      project={projectStore.projectDetail}
      errorMessage={projectStore.detailError ?? undefined}
    />
  {:else if projectStore.detailLoading}
    <ProjectDetailLoading project={projectStore.projectDetail} />
  {:else if projectStore.detailError}
    <ProjectDetailError
      project={projectStore.projectDetail}
      errorMessage={projectStore.detailError ?? undefined}
    />
  {:else if !projectStore.projectDetail}
    <ProjectDetailLoading project={projectStore.projectDetail} />
  {:else}
    <ProjectDetail
      project={projectStore.projectDetail}
      projectService={data.projectService}
      fetch={data.fetch}
    />
  {/if}
</main>
