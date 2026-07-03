<script lang="ts">
  import { faWarning } from '@fortawesome/free-solid-svg-icons';
  import Fa from 'svelte-fa';
  import { scale } from 'svelte/transition';

  interface Props {
    errorMessage: string;
  }

  let { errorMessage }: Props = $props();
</script>

<div in:scale class="w-full bg-slate-900 dark:bg-red-400">
  <div
    class="border-4 border-slate-900 dark:border-red-400 bg-red-100 dark:bg-slate-700 aspect-3/4 sm:aspect-4/3 lg:aspect-6/4 xl:aspect-8/3 -translate-x-1.5 -translate-y-1.5 active:translate-x-0 active:translate-y-0 hover:-translate-x-2 hover:-translate-y-2 duration-200 relative group cursor-not-allowed"
  >
    <div
      class="h-3/5 md:max-lg:h-3/5 border-b-4 bg-red-600 dark:bg-red-400 border-slate-900 dark:border-red-400 flex"
    >
      <div
        class="mx-auto inline-flex flex-wrap m-auto justify-center gap-2 items-center w-max animate-pulse"
      >
        <div
          class="dark:text-white text-right text-4xl md:text-5xl lg:text-6xl font-extrabold text-text"
        >
          <Fa icon={faWarning} />
        </div>
        <div
          class="dark:text-white text-center font-cascadia-mono font-extrabold text-text text-2xl md:text-3xl lg:text-4xl"
        >
          Error!
        </div>
      </div>
    </div>

    <div class="py-2 px-4">
      <h3 class="mb-2 dark:text-white text-center">Failed to fetch data</h3>
      <p class="dark:text-slate-300 text-center">{errorMessage}</p>
    </div>
  </div>
</div>
