<script lang="ts">
  import Saos from 'saos';

  export let imageSrc: string | undefined = undefined;
  export let title: string;
  export let description: string;
  export let bgClass = 'bg-slate-100 dark:bg-slate-800';
  export let transformClass = '';
  export let cardSizeClass = 'w-96';
  export let imgClass = 'aspect-square';
  export let zIndex = 1;
</script>

<div
  role="region"
  style="z-index: {zIndex};"
  class="absolute transition-all duration-200 cursor-wait
    {cardSizeClass} {transformClass}"
  on:mouseenter
  on:mouseleave
>
  <Saos animation={'scale-up-center 1s cubic-bezier(0.4, 0, 0.2, 1) both'} once>
    <figure
      class="transition-all duration-200
        shadow-lg hover:shadow-2xl
        border-4 border-slate-900 dark:border-slate-700 {bgClass}"
      {title}
    >
      {#if imageSrc}
        <img src={imageSrc} alt={title} class="w-full object-cover {imgClass}" />
      {:else}
        <div class="w-full {imgClass}" aria-details={imageSrc}></div>
      {/if}
      <figcaption class="p-3 w-full border-t-4 border-slate-900 dark:border-slate-700">
        <h3 class="text-base md:text-lg font-bold mb-1">{title}</h3>
        <p class="text-xs">{description}</p>
      </figcaption>
    </figure>
  </Saos>
</div>
