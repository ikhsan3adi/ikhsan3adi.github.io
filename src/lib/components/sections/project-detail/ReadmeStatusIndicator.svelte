<script lang="ts">
  import {
    faBookDead,
    faExclamationTriangle,
    faFileDownload,
    faGear,
    faTools
  } from '@fortawesome/free-solid-svg-icons';
  import Fa from 'svelte-fa';

  interface Props {
    status: 'fetching' | 'loading' | 'rendering' | 'noreadme' | 'error';
    message?: string;
  }

  let { status, message }: Props = $props();
</script>

<div class="w-full p-4" aria-hidden="true">
  <div class="gap-2 justify-center items-center flex flex-col m-auto max-w-lg">
    {#if status === 'fetching'}
      <div
        class="text-center text-4xl md:text-5xl lg:text-6xl font-extrabold text-blue-600 dark:text-blue-400
        flex flex-col justify-center gap-4 animate-pulse"
      >
        <Fa icon={faFileDownload} class="animate-bounce" />
        <span class="text-xl md:text-2xl lg:text-3xl font-cascadia-mono">Fetching...</span>
      </div>
    {:else if status === 'loading'}
      <div
        class="text-center text-4xl md:text-5xl lg:text-6xl font-extrabold text-fuchsia-600 dark:text-fuchsia-400
      flex flex-col justify-center gap-4 animate-pulse"
      >
        <Fa icon={faTools} class="animate-bounce" />
        <span class="text-xl md:text-2xl lg:text-3xl font-cascadia-mono">Loading...</span>
      </div>
    {:else if status === 'rendering'}
      <div
        class="text-center text-4xl md:text-5xl lg:text-6xl font-extrabold text-emerald-600 dark:text-emerald-400
      flex flex-col justify-center gap-4 animate-pulse"
      >
        <Fa icon={faGear} class="animate-spin" />
        <span class="text-xl md:text-2xl lg:text-3xl font-cascadia-mono">Rendering...</span>
      </div>
    {:else if status === 'noreadme'}
      <div
        class="text-center text-4xl md:text-5xl lg:text-6xl font-extrabold text-text dark:text-white
      flex flex-col justify-center gap-4"
      >
        <Fa icon={faBookDead} />
        <span class="text-xl md:text-2xl lg:text-3xl font-cascadia-mono">No README</span>
      </div>
    {:else if status === 'error'}
      <div
        class="text-center text-4xl md:text-5xl lg:text-6xl font-extrabold text-red-600 dark:text-red-400
      flex flex-col justify-center gap-4 animate-pulse"
      >
        <Fa icon={faExclamationTriangle} />
        <span class="text-xl md:text-2xl lg:text-3xl font-cascadia-mono">Error</span>
      </div>
    {/if}

    {#if status === 'error'}
      <div class="text-sm md:text-base text-center font-extrabold text-red-400 dark:text-red-400">
        {message}
      </div>
    {:else}
      <div
        class="text-sm md:text-base text-center font-extrabold text-slate-600 dark:text-slate-300"
      >
        {message}
      </div>
    {/if}
  </div>
</div>
