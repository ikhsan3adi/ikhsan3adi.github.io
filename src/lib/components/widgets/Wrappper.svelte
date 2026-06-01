<script lang="ts">
  interface Props {
    children?: import('svelte').Snippet;
  }

  let { children }: Props = $props();
</script>

<div class="container mx-auto px-10 sm:px-16 md:px-20 lg:px-24 xl:px-28 w-full flex">
  {@render children?.()}
</div>
