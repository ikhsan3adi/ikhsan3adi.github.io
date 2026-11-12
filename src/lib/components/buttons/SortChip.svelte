<script lang="ts">
  import { faArrowDown, faArrowUp, type IconDefinition } from '@fortawesome/free-solid-svg-icons';
  import Fa from 'svelte-fa';

  interface Props {
    label: string;
    sortDirection: 'desc' | 'asc';
    active: boolean;
    icon: IconDefinition;
    onclick: () => void;
  }

  let { label, sortDirection, active, icon, onclick }: Props = $props();
</script>

<button
  type="button"
  {onclick}
  aria-pressed={active}
  title={active
    ? `Toggle ${sortDirection === 'desc' ? 'descending' : 'ascending'}`
    : `Sort by ${label}`}
  class="bg-slate-900 dark:bg-slate-100 duration-200"
>
  <span
    class="flex items-center gap-1.5 border-2 border-slate-900 dark:bg-slate-700
    px-2 sm:px-3 py-1 text-sm font-medium duration-200
    {active
      ? 'bg-amber-300 dark:border-amber-300 dark:text-amber-300 translate-x-0 translate-y-0'
      : 'bg-slate-200 dark:border-slate-100 dark:text-slate-100 -translate-x-1 -translate-y-1 hover:-translate-x-1.5 hover:-translate-y-1.5'}"
  >
    <Fa {icon} />
    <span class="hidden sm:inline">
      {label}
    </span>
    {#if active}
      <Fa icon={sortDirection === 'desc' ? faArrowDown : faArrowUp} class="text-xs" />
    {/if}
  </span>
</button>
