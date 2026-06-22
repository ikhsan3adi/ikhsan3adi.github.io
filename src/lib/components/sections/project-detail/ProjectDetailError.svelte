<script lang="ts">
  import type { ProjectDetail } from '$lib/api/projects';

  import Button from '$lib/components/buttons/Button.svelte';
  import Wrappper from '$lib/components/widgets/Wrappper.svelte';
  import {
    faArrowLeft,
    faCodeFork,
    faDownload,
    faStar,
    faWarning
  } from '@fortawesome/free-solid-svg-icons';
  import Fa from 'svelte-fa';

  interface Props {
    project: ProjectDetail;
  }

  let { project }: Props = $props();
</script>

<section class="mt-16">
  <Wrappper>
    <div class="mt-16 w-full mb-32">
      <h1 class="dark:text-white mb-6 md:mb-8 lg:mb-12 xl:mb-16">Error!</h1>
      <!-- Hero section -->
      <div
        class="w-full justify-between flex flex-col xl:flex-row-reverse gap-4 md:gap-8 xl:gap-12 mb-24 xl:mb-32"
      >
        <!-- Image -->
        <div
          class="w-full bg-red-600 dark:bg-red-400 aspect-2/1 flex p-2 border-4 border-slate-900 dark:border-slate-700"
        >
          <div class="m-auto inline-flex flex-wrap gap-2 justify-center items-center">
            <div
              class="text-center text-white dark:text-text font-cascadia-mono font-extrabold text-4xl md:text-5xl lg:text-6xl"
            >
              <Fa icon={faWarning} />
            </div>
            <div
              class="text-wrap font-cascadia-mono font-extrabold text-center text-white dark:text-text text-2xl md:text-3xl lg:text-4xl"
            >
              {project.description}
            </div>
          </div>
        </div>

        <!-- description -->
        <div class="w-full">
          <p class="dark:text-slate-300 text-center sm:text-left">{project.description}</p>

          <!-- Stars, forks, downloads -->
          <div class="pt-4 flex gap-4 w-full justify-center sm:justify-normal dark:text-white">
            <div class="flex gap-2 items-center">
              <Fa icon={faStar} />
              {project.starsCount ?? 'Unknown'}
              {(project.starsCount ?? 0) <= 1 ? 'Star' : 'Stars'}
            </div>
            <div class="flex gap-2 items-center">
              <Fa icon={faCodeFork} />
              {project.forksCount ?? 'Unknown'}
              {(project.forksCount ?? 0) <= 1 ? 'Fork' : 'Forks'}
            </div>
            <div class="flex gap-2 items-center">
              <Fa icon={faDownload} />
              {project.downloadsCount ?? 'Unknown'}
              {(project.downloadsCount ?? 0) <= 1 ? 'Download' : 'Downloads'}
            </div>
          </div>

          <!-- Tags -->
          <div
            class="flex flex-wrap w-full justify-center sm:justify-start items-center gap-2 py-4 overflow-hidden"
          >
            <p
              class="dark:bg-slate-800 border-slate-900 dark:text-slate-300 dark:border-slate-300 max-sm:text-sm px-2 sm:px-4 py-1 h-max border-2"
            >
              #error
            </p>
          </div>

          <!-- Buttons -->
          <div
            class="my-4 md:my-6 lg:my-8 flex w-full justify-center sm:justify-start gap-4 md:gap-6 lg:gap-8"
          >
            <Button href="/" noDarkVariant={false} variant="disabled">
              {#snippet icon()}
                <Fa icon={faArrowLeft} />
              {/snippet}Back
            </Button>
          </div>
        </div>
      </div>
    </div>
  </Wrappper>
</section>
