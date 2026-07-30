<script lang="ts">
  import { tagColors, type TagColorKey } from './colors';

  export let tag: TagColorKey;

  const color = tagColors[tag.key];
  const gradient = color.gradient;
  const gradientFrom = gradient?.split(' to-')[0]?.replace('from-', '') ?? '';
  const gradientTo = gradient?.split(' to-')[1] ?? '';

  const isGradient = gradientFrom && gradientTo;

  const style = `--gradient-from: var(--color-${gradientFrom}); --gradient-to: var(--color-${gradientTo});`;
</script>

{#if isGradient}
  <div class="duration-0 gradient-tag px-2 sm:px-4 py-1 border-2 border-slate-900" {style}>
    <p class="max-sm:text-sm font-medium gradient-text duration-0">
      #{tag.name}
    </p>
  </div>
{:else}
  <div class="{color.bg} duration-0">
    <p
      class="{color.border} max-sm:text-sm px-2 sm:px-4 py-1 h-max border-2 border-slate-900 duration-0"
    >
      <span class="{color.text} duration-0">#{tag.name}</span>
    </p>
  </div>
{/if}

<style>
  .gradient-tag {
    background: linear-gradient(90deg, var(--gradient-from), var(--gradient-to));
  }

  :global(.dark) .gradient-tag {
    background: var(--color-slate-800);
    border-image: linear-gradient(90deg, var(--gradient-from), var(--gradient-to)) 1;
  }

  :global(.dark) .gradient-text {
    background: linear-gradient(90deg, var(--gradient-from), var(--gradient-to));
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
</style>
