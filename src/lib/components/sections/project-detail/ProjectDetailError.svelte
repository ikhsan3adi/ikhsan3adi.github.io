<script lang="ts">
  import { onMount } from 'svelte';

  import {
    faArrowLeft,
    faBug,
    faCodeFork,
    faCodePullRequest,
    faDownload,
    faStar,
    faWarning
  } from '@fortawesome/free-solid-svg-icons';
  import Fa from 'svelte-fa';

  import type { Project } from '$lib/api/projects';

  import Button from '$lib/components/buttons/Button.svelte';
  import { tagColors } from '$lib/components/colors';

  interface Props {
    project: Project | null;
    errorMessage?: string;
  }

  let { project, errorMessage = 'Could not load project data' }: Props = $props();

  let fallbackAspectRatio = $state(2);

  onMount(() => {
    try {
      const id = project?.id;
      if (id) {
        const cached = localStorage.getItem(`card-img-ar:${project.id}`);
        if (cached) {
          fallbackAspectRatio = parseFloat(cached);
        }
      }
    } catch {
      /* noop */
    }
  });

  let errorProject = $derived<Project>(
    project ?? {
      id: 'error',
      name: 'Error',
      url: '',
      description: errorMessage,
      readmeBaseUrl: '',
      imageUrl: '',
      tags: []
    }
  );
</script>

<section class="bg-halftone bg-halftone-45">
  <div
    class="mx-auto w-full max-w-screen-2xl px-2 sm:px-8 md:px-12 lg:px-16 xl:px-20 flex flex-col"
  >
    <div
      class="my-20 p-2 pt-6 pb-8 sm:p-8 w-full bg-white dark:bg-slate-800 border-4 border-slate-900 dark:border-white overflow-clip"
    >
      <h1 class="dark:text-white mb-6 md:mb-8 lg:mb-12 xl:mb-16">Error!</h1>
      <!-- Hero section -->
      <div
        class="w-full flex flex-col xl:flex-row-reverse xl:justify-between gap-4 md:gap-8 mb-24 xl:mb-32"
      >
        <!-- Image -->
        <div
          class="w-full xl:w-1/2 h-fit shrink-0 bg-red-600 dark:bg-red-400 border-4 border-slate-900 dark:border-slate-700 grid grid-cols-1 grid-rows-1 relative overflow-clip"
          style={fallbackAspectRatio > 0 ? `aspect-ratio:${fallbackAspectRatio}` : ''}
        >
          <div
            class="col-start-1 row-start-1 place-self-center flex flex-col items-center gap-4 m-auto w-max py-8 animate-pulse"
          >
            <div
              class="text-center text-white dark:text-text font-extrabold text-4xl md:text-5xl lg:text-6xl"
            >
              <Fa icon={faWarning} />
            </div>
            <div
              class="text-wrap font-cascadia-mono font-extrabold text-center text-white dark:text-text text-3xl md:text-4xl lg:text-5xl"
            >
              Failed to load
            </div>
          </div>
        </div>

        <!-- description -->
        <div class="w-full xl:w-1/2">
          <p class="dark:text-slate-300 text-center sm:text-left">{errorMessage}</p>

          <!-- Stars, forks, downloads -->
          <div
            class="pt-4 flex flex-wrap gap-x-4 gap-y-1 w-full justify-center sm:justify-normal dark:text-white"
          >
            <div class="flex gap-2 items-center">
              <Fa icon={faStar} />
              {errorProject.starsCount ?? 'Unknown'}
              {(errorProject.starsCount ?? 0) <= 1 ? 'Star' : 'Stars'}
            </div>
            <div class="flex gap-2 items-center">
              <Fa icon={faCodeFork} />
              {errorProject.forksCount ?? 'Unknown'}
              {(errorProject.forksCount ?? 0) <= 1 ? 'Fork' : 'Forks'}
            </div>
            <div class="flex gap-2 items-center">
              <Fa icon={faDownload} />
              {errorProject.downloadsCount ?? 'Unknown'}
              {(errorProject.downloadsCount ?? 0) <= 1 ? 'Download' : 'Downloads'}
            </div>
            <div class="flex gap-2 items-center">
              <Fa icon={faBug} />
              {errorProject.issuesCount ?? 0}
              {(errorProject.issuesCount ?? 0) <= 1 ? 'Issue' : 'Issues'}
            </div>
            <div class="flex gap-2 items-center">
              <Fa icon={faCodePullRequest} />
              {errorProject.pullRequestsCount ?? 0}
              {(errorProject.pullRequestsCount ?? 0) <= 1 ? 'PR' : 'PRs'}
            </div>
          </div>

          <!-- Tags -->
          <div
            class="flex flex-wrap w-full justify-center sm:justify-start items-center gap-2 py-4 overflow-hidden"
          >
            <p
              class="{tagColors.nestjs.bg} {tagColors.nestjs.border} {tagColors.nestjs.text}
								dark:bg-slate-800 max-sm:text-sm px-2 sm:px-4 py-1 h-max border-2 border-slate-900"
            >
              #error
            </p>
          </div>

          <!-- Buttons -->
          <div
            class="my-4 md:my-6 lg:my-8 flex w-full justify-center sm:justify-start gap-4 md:gap-6 lg:gap-8"
          >
            <Button href="/" noDarkVariant={false} variant="secondary">
              {#snippet icon()}
                <Fa icon={faArrowLeft} />
              {/snippet}
              Back
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
