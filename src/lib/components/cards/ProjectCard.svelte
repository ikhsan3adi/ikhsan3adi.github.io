<script lang="ts">
  import { onMount } from 'svelte';
  import { scale } from 'svelte/transition';

  import { faImage, faRefresh } from '@fortawesome/free-solid-svg-icons';
  import Fa from 'svelte-fa';

  import type { Project } from '$lib/api/projects';
  import { createSlug } from '$lib/utils';

  import {
    cardButtonColors,
    generateTagColorKeys,
    type CardColors,
    type TagColorKey
  } from '$lib/components/colors';
  import TagChip from '$lib/components/TagChip.svelte';
  import ProjectStats from './ProjectStats.svelte';

  interface Props {
    project: Project;
    cardColor?: keyof CardColors;
  }

  let { project, cardColor = 'default' }: Props = $props();

  const tags: TagColorKey[] = $derived(generateTagColorKeys(project.tags));

  const mainLabelId = $derived(createSlug(`porto_${project.name}`));

  let imgState = $state<'loading' | 'loaded' | 'error'>('loading');
  let fallbackAspectRatio = $state(2);

  onMount(() => {
    try {
      const cached = localStorage.getItem(`card-img-ar:${project.id}`);
      if (cached) {
        fallbackAspectRatio = parseFloat(cached);
      }
    } catch {
      /* noop */
    }
  });

  function onImgLoad(e: Event) {
    const img = e.target as HTMLImageElement;
    const { naturalWidth, naturalHeight } = img;
    if (naturalHeight > 80 && naturalWidth > 0) {
      try {
        localStorage.setItem(`card-img-ar:${project.id}`, String(naturalWidth / naturalHeight));
      } catch {
        /* noop */
      }
    }
    imgState = 'loaded';
  }
</script>

<!-- Shadow card -->
<div in:scale class="w-full bg-slate-900 {cardButtonColors[cardColor].dark.bg} flex">
  <a
    href="/$projects$/{project.id}"
    class="w-full flex"
    aria-labelledby={mainLabelId}
    title={project.name}
  >
    <!-- Card -->
    <div
      class="relative group cursor-pointer flex flex-col
      {cardButtonColors[cardColor].light}
			{cardButtonColors[cardColor].dark.border}
      border-4 border-slate-900 dark:bg-slate-700
      h-full w-full
		  -translate-x-1.5 -translate-y-1.5 active:translate-x-0 active:translate-y-0 hover:-translate-x-2 hover:-translate-y-2"
    >
      <!-- Background image wrapper -->
      <div
        class="w-full shrink-0 bg-slate-300 dark:bg-slate-600 grid grid-cols-1 grid-rows-1 relative overflow-clip"
        style={fallbackAspectRatio > 0 && imgState !== 'loaded'
          ? `aspect-ratio:${fallbackAspectRatio}`
          : ''}
      >
        <!-- Background image -->
        {#if project.imageUrl}
          <img
            src={project.imageUrl}
            alt={project.name}
            class="col-start-1 row-start-1 w-full text-transparent object-cover object-center"
            class:hidden={imgState === 'error'}
            onload={onImgLoad}
            onerror={() => (imgState = 'error')}
          />
        {/if}

        {#if !project.imageUrl || imgState !== 'loaded'}
          <div
            class="col-start-1 row-start-1 place-self-center inline-flex flex-wrap justify-center gap-2 items-center w-max pointer-events-none"
            aria-hidden="true"
          >
            <div
              class="dark:text-white text-center text-4xl md:text-5xl lg:text-6xl font-extrabold text-text"
            >
              {#if !project.imageUrl || imgState === 'error'}
                <Fa icon={faImage} />
              {:else if imgState === 'loading'}
                <Fa icon={faRefresh} class="animate-spin" />
              {/if}
            </div>
            <div
              class="dark:text-white text-center font-cascadia-mono font-extrabold text-text text-2xl md:text-3xl lg:text-4xl"
            >
              {#if project.statusMessage}
                {project.statusMessage}
              {:else if !project.imageUrl || imgState === 'error'}
                Image not available
              {:else if imgState === 'loading'}
                Loading...
              {/if}
            </div>
          </div>
        {/if}

        <!-- Hover show view detail -->
        <div class="bg-slate-900/0 group-hover:bg-slate-900/70 absolute inset-0 flex duration-200">
          <span
            class="text-white m-auto opacity-0 group-hover:opacity-100 md:text-lg lg:text-xl font-medium"
          >
            View detail
          </span>
        </div>

        <!-- Stats -->
        <div class="max-md:hidden absolute bottom-0 left-0 max-sm:right-0">
          {#if !project.noGithub}
            <ProjectStats cardColor={cardButtonColors[cardColor]} {project} />
          {/if}
        </div>
      </div>

      <!-- Stats -->
      <div class="md:hidden w-full">
        {#if !project.noGithub}
          <ProjectStats cardColor={cardButtonColors[cardColor]} {project} />
        {/if}
      </div>

      <!-- Project description -->
      <div
        class="pt-2 pb-8 px-4 flex-1
        {cardButtonColors[cardColor].dark.border} border-t-4 border-slate-900"
      >
        <h3 id={mainLabelId} class="mb-2 dark:text-white">{project.name}</h3>
        <p class="dark:text-slate-300 line-clamp-6">{project.description}</p>
      </div>

      <!-- Project tags -->
      <div
        class="{cardButtonColors[cardColor].dark.border} 
					border-t-4 border-slate-900 w-full flex flex-wrap justify-start items-center gap-2 p-2"
      >
        {#each tags as tag}
          <TagChip {tag} />
        {/each}
      </div>
    </div>
  </a>
</div>
