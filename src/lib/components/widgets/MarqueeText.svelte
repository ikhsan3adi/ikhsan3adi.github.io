<script lang="ts">
  interface Props {
    duration?: number;
    repeat?: number;
    paused?: boolean;
    direction?: 'left' | 'right';
    children?: import('svelte').Snippet;
  }

  let { duration = 15, repeat = 2, paused = false, direction = 'left', children }: Props = $props();
</script>

<div class="overflow-hidden">
  <div class="marquee-content" class:paused={paused === true}>
    {#each Array(repeat) as _}
      <div
        id={_}
        class="{direction === 'left'
          ? 'marquee-direction-left'
          : 'marquee-direction-right'} content"
        style="animation-duration: {duration}s"
      >
        {@render children?.()}
      </div>
    {/each}
  </div>
</div>

<style>
  .marquee-content {
    width: 100000px;
  }

  .paused .content {
    animation-play-state: paused;
  }

  .marquee-direction-left {
    animation-name: animation-L;
    float: left;
  }

  .marquee-direction-right {
    animation-name: animation-R;
    float: left;
  }

  .content {
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  @keyframes animation-L {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }

  @keyframes animation-R {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
  }
</style>
