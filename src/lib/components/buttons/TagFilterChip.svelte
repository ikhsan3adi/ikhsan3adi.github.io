<script lang="ts">
  import { faCheck } from '@fortawesome/free-solid-svg-icons';
  import Fa from 'svelte-fa';

  interface Props {
    name: string;
    count: number;
    active: boolean;
    onclick: () => void;
  }

  let { name, count, active, onclick }: Props = $props();
</script>

<button
  type="button"
  {onclick}
  aria-pressed={active}
  title="Filter by #{name}"
  class="bg-slate-900 dark:bg-slate-100 duration-200 inline-block"
>
  <span
    class="flex items-center gap-1.5 border-2 border-slate-900 dark:bg-slate-700
    px-2 sm:px-3 py-1 text-sm font-medium duration-200
    {active
      ? 'bg-amber-300 dark:border-amber-300 dark:text-amber-300 translate-x-0 translate-y-0'
      : 'bg-slate-200 dark:border-slate-100 dark:text-slate-100 -translate-x-1 -translate-y-1 hover:-translate-x-1.5 hover:-translate-y-1.5'}"
  >
    {#if active}
      <Fa icon={faCheck} class="text-xs" />
    {/if}
    #{name}
    <span class="opacity-60">{count}</span>
  </span>
</button>
