<script lang="ts">
  interface Props {
    children?: import('svelte').Snippet;
  }

  let { children }: Props = $props();
</script>

<div class="mx-auto w-full max-w-screen-2xl px-10 sm:px-16 md:px-20 lg:px-24 xl:px-28 flex">
  {@render children?.()}
</div>
