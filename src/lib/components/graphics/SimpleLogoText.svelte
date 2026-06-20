<script lang="ts">
  import { EMBLEM_NAME } from '$lib/config';

  interface Props {
    isBgTransparent: boolean;
  }

  let { isBgTransparent }: Props = $props();
</script>

<div class="my-auto">
  <div class="mt-0.5 relative">
    <a href="/">
      <div
        class="{isBgTransparent
          ? 'text-primary'
          : 'text-text'} font-mechsuit text-sm md:text-lg z-0 transition-colors duration-500"
      >
        {EMBLEM_NAME}
      </div>

      <div
        class="{isBgTransparent
          ? 'text-text dark:text-white'
          : 'text-violet-100'} font-mechsuit text-sm md:text-lg absolute -top-1 right-1 transition-colors duration-500 pointer-events-none select-none"
      >
        {EMBLEM_NAME}
      </div>
    </a>
  </div>
</div>
