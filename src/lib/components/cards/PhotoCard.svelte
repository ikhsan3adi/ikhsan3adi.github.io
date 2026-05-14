<script lang="ts">
  export let imageSrc: string | undefined = undefined;
  export let title: string;
  export let description: string;
  export let bgClass = 'bg-slate-100 dark:bg-slate-800';
  export let transformClass = '';
  export let cardSizeClass = 'w-96';
  export let imgClass = 'aspect-square';
  export let zIndex = 1;
</script>

<figure
  class="absolute overflow-hidden border-4 transition-all duration-200 cursor-pointer shadow-lg hover:shadow-2xl
  border-slate-900 dark:border-slate-700
    {cardSizeClass}
    {transformClass}
    {bgClass}"
  style="z-index: {zIndex};"
  on:mouseenter
  on:mouseleave
>
  {#if imageSrc}
    <img src={imageSrc} alt={title} class="w-full object-cover {imgClass}" />
  {:else}
    <div class="w-full {imgClass}" aria-details={imageSrc}></div>
  {/if}
  <figcaption class="p-3 w-full border-t-4 border-slate-900 dark:border-slate-700">
    <h5 class="font-bold mb-1">{title}</h5>
    <p class="text-xs">{description}</p>
  </figcaption>
</figure>
