<script lang="ts">
  import { onMount } from 'svelte';

  import Fa from 'svelte-fa';
  import { faRefresh } from '@fortawesome/free-solid-svg-icons';

  import type { Project } from '$lib/api/projects';

  import Button from '$lib/components/buttons/Button.svelte';

  interface Props {
    project: Project | null | undefined;
  }

  let { project }: Props = $props();

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
</script>

<section class="bg-halftone bg-halftone-45">
  <div
    class="mx-auto w-full max-w-screen-2xl px-2 sm:px-8 md:px-12 lg:px-16 xl:px-20 flex flex-col"
  >
    <div
      class="my-20 p-2 pt-6 pb-8 sm:p-8 w-full bg-white dark:bg-slate-800 border-4 border-slate-900 dark:border-white overflow-clip"
    >
      <h1 class="dark:text-white mb-6 md:mb-8 lg:mb-12 xl:mb-16 animate-bounce">Loading...</h1>
      <div
        class="w-full flex flex-col xl:flex-row-reverse xl:justify-between gap-4 md:gap-8 mb-24 xl:mb-32"
      >
        <div
          class="w-full xl:w-1/2 h-fit shrink-0 bg-primary animate-pulse border-4 border-slate-900 dark:border-slate-700 grid grid-cols-1 grid-rows-1 relative overflow-clip"
          style={fallbackAspectRatio > 0 ? `aspect-ratio:${fallbackAspectRatio}` : ''}
        >
          <div
            class="col-start-1 row-start-1 place-self-center flex flex-col items-center gap-4 m-auto w-max py-8 animate-bounce"
          >
            <span class="animate-spin text-white dark:text-text text-4xl md:text-5xl lg:text-6xl">
              <Fa icon={faRefresh} />
            </span>
            <span
              class="font-cascadia-mono text-wrap font-extrabold text-white dark:text-text text-3xl md:text-4xl lg:text-5xl"
            >
              Loading...
            </span>
          </div>
        </div>
        <div class="w-full xl:w-1/2">
          <p class="dark:text-slate-300">Fetching data...</p>
          <div class="my-4 md:my-6 lg:my-8 flex gap-4 md:gap-6 lg:gap-8">
            <Button noDarkVariant={false} variant="disabled">
              {#snippet icon()}
                <Fa icon={faRefresh} class="animate-spin" />
              {/snippet} Loading
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
