<script lang="ts">
  import Button from '$lib/components/buttons/Button.svelte';
  import { faRefresh } from '@fortawesome/free-solid-svg-icons';
  import Fa from 'svelte-fa';
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
        class="w-full justify-between flex flex-col xl:flex-row-reverse gap-4 md:gap-8 xl:gap-12 mb-24 xl:mb-32"
      >
        <div
          class="w-full bg-primary animate-pulse min-h-62.5 md:min-h-80 flex items-center border-4 border-slate-900 dark:border-slate-700"
        >
          <div             class="flex flex-col items-center gap-4 m-auto animate-bounce">
            <span class="animate-spin text-white dark:text-text text-4xl md:text-5xl lg:text-6xl"
              ><Fa icon={faRefresh} /></span
            >
            <span
              class="font-cascadia-mono text-wrap font-extrabold text-white dark:text-text text-3xl md:text-4xl lg:text-5xl"
              >Loading...</span
            >
          </div>
        </div>
        <div class="w-full">
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
