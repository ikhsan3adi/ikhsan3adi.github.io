<script lang="ts">
  import Saos from '$lib/components/widgets/Saos.svelte';

  interface Props {
    imageSrc?: string | undefined;
    title: string;
    description: string;
    bgClass?: string;
    transformClass?: string;
    cardSizeClass?: string;
    imgClass?: string;
    imgOverlayFxClass?: string;
    animDelayMs?: number;
    zIndex?: number;
    halftone?: boolean;
    onmouseenter?: () => void;
  }

  let {
    imageSrc = undefined,
    title,
    description,
    bgClass = 'bg-slate-100 dark:bg-slate-800',
    transformClass = '',
    cardSizeClass = 'w-96',
    imgClass = 'aspect-square',
    imgOverlayFxClass = '',
    animDelayMs = 800,
    zIndex = 1,
    halftone = false,
    onmouseenter
  }: Props = $props();

  const labelId = $derived(`photo-card-${title.toLowerCase().replace(/\s+/g, '-')}`);

  function randomRotate(node: HTMLDivElement) {
    // Keep randomized angles close to the original/standard design values:
    // Yellow (standard 30deg), CMY base (standard 35deg), K (standard 30deg)
    // We add a subtle random offset of +/- 6 degrees for organic halftone separation.
    const offsetLimit = 6;
    const randY = 30 + (Math.floor(Math.random() * (offsetLimit * 2 + 1)) - offsetLimit);
    const randCMY = 35 + (Math.floor(Math.random() * (offsetLimit * 2 + 1)) - offsetLimit);
    const randK = 30 + (Math.floor(Math.random() * (offsetLimit * 2 + 1)) - offsetLimit);

    node.style.setProperty('--halftone-rotation-y', `${randY}deg`);
    node.style.setProperty('--halftone-rotation-cmy', `${randCMY}deg`);
    node.style.setProperty('--halftone-rotation-k', `${randK}deg`);
  }
</script>

<div
  role="group"
  aria-labelledby={labelId}
  style="z-index: {zIndex};"
  class="absolute transition-all duration-200 cursor-crosshair
    {cardSizeClass} {transformClass}"
  {onmouseenter}
>
  <Saos animation={'scale-up-center 1s cubic-bezier(0.4, 0, 0.2, 1) both'} once>
    <figure
      class="transition-all duration-200
        shadow-lg hover:shadow-2xl
        border-4 border-slate-900 dark:border-slate-700 {bgClass}
        active:scale-105 sm:active:scale-110 md:active:scale-125"
      {title}
    >
      {#if imageSrc}
        <div class="w-full {imgClass} overflow-hidden relative transform-gpu">
          <div class="absolute inset-0 z-10 isolate {imgOverlayFxClass} pointer-events-none"></div>
          <div
            class="img-film w-full h-full"
            class:img-film-halftone={halftone}
            style="animation-delay: {animDelayMs}ms; --final-sepia: {halftone ? 0.367 : 0};"
            use:randomRotate
          >
            {#if halftone}
              <div class="w-full h-full halftone" style="animation-delay: {animDelayMs}ms;">
                <img src={imageSrc} alt={title} class="w-full h-full object-cover halftone-media" />
                <div class="halftone-ink"></div>
              </div>
              <div class="w-full h-full halftone-k-layer">
                <img src={imageSrc} alt={title} class="w-full h-full object-cover halftone-media" />
              </div>
            {:else}
              <img src={imageSrc} alt={title} class="w-full h-full object-cover" />
            {/if}
          </div>
        </div>
      {:else}
        <div class="w-full {imgClass}" aria-details={imageSrc}></div>
      {/if}
      <figcaption id={labelId} class="p-3 w-full border-t-4 border-slate-900 dark:border-slate-700">
        <h3 class="text-base md:text-lg font-bold mb-1">{title}</h3>
        <p class="text-xs">{description}</p>
      </figcaption>
    </figure>
  </Saos>
</div>

<style>
  .halftone,
  .halftone-k-layer {
    --halftone-dot-size: calc(var(--halftone-size) * var(--halftone-bleed));
    --halftone-color-dot-size: var(--halftone-dot-size);
    position: relative;
    filter: brightness(calc(0.5 + var(--halftone-bleed) * 0.3 - var(--halftone-separate-k) * 0.02))
      blur(calc(var(--halftone-size) * 0.1)) contrast(1000) blur(0.6px);
    overflow: hidden;
    transition: transform 800ms;
  }

  .halftone > .halftone-media {
    filter: invert(1) brightness(0.75) invert(1) saturate(2);
  }

  .halftone-k-layer > .halftone-media {
    filter: grayscale(1) brightness(2);
  }

  .halftone-k-layer {
    position: absolute;
    inset: 0;
    mix-blend-mode: multiply;
  }

  .halftone-ink {
    mix-blend-mode: screen;
  }

  .halftone-ink::before {
    transform: rotate(var(--halftone-rotation-y, 30deg));
    background-image:
      radial-gradient(var(--halftone-color-dot-size) at 25% 25%, #ff0, #ff6, #fff),
      radial-gradient(var(--halftone-color-dot-size) at 75% 75%, #ff0, #ff6, #fff);
  }

  .halftone-ink::after {
    transform: rotate(calc(-21deg + var(--halftone-rotation-cmy, 35deg)))
      translateX(calc(var(--halftone-size) * 0.58));
    background-image:
      radial-gradient(var(--halftone-color-dot-size) at 75% 25%, #f0f, #f6f, #fff),
      radial-gradient(var(--halftone-color-dot-size) at 25% 75%, #f0f, #f6f, #fff),
      radial-gradient(var(--halftone-color-dot-size) at 75% 75%, #0ff, #6ff, #fff),
      radial-gradient(var(--halftone-color-dot-size) at 25% 25%, #0ff, #6ff, #fff);
    transition: transform 1000ms;
  }

  .halftone-ink::before,
  .halftone-ink::after {
    content: '';
    position: absolute;
    inset: -30%;
    background-size: var(--halftone-size) var(--halftone-size);
    background-blend-mode: multiply;
    mix-blend-mode: multiply;
    pointer-events: none;
    transition: transform 1200ms;
  }

  .halftone-k-layer::after {
    content: '';
    position: absolute;
    inset: -45%;
    background-size: var(--halftone-size) var(--halftone-size);
    background-blend-mode: multiply;
    mix-blend-mode: screen;
    transform: rotate(var(--halftone-rotation-k, 30deg));
    background-image:
      radial-gradient(var(--halftone-color-dot-size) at 25% 25%, #000, #666, #ccc, #fff),
      radial-gradient(var(--halftone-color-dot-size) at 75% 75%, #000, #fff);
    transition: transform 700ms;
  }

  .img-film {
    --halftone-size: 5.67px;
    --halftone-bleed: 0.467;
    --halftone-separate-k: 2.67;
    --halftone-rotation-y: 30deg;
    --halftone-rotation-cmy: 35deg;
    --halftone-rotation-k: 30deg;

    filter: sepia(var(--final-sepia));

    /*animation: photo-film 6767ms cubic-bezier(1, 0, 0.5, 1) both;*/
    /*animation: halftone-print 3067ms cubic-bezier(1, 0, 0.5, 1) both;*/
  }

  .img-film-halftone > .halftone {
    animation: drops-reveal 1067ms cubic-bezier(1, 0, 0.5, 1) both;
  }

  @keyframes halftone-print {
    0% {
      filter: contrast(100) saturate(0%) sepia(var(--final-sepia));
    }
    20% {
      filter: contrast(50) saturate(20%) sepia(var(--final-sepia));
    }
    40% {
      filter: contrast(20) saturate(40%) sepia(var(--final-sepia));
    }
    60% {
      filter: contrast(10) saturate(60%) sepia(var(--final-sepia));
    }
    80% {
      filter: contrast(2) saturate(80%) sepia(var(--final-sepia));
    }
    100% {
      filter: contrast(1) saturate(100%) sepia(var(--final-sepia));
    }
  }

  @keyframes drops-reveal {
    0% {
      clip-path: path(
        'M 60 74.9 A 0.1 0.1 0 1 0 60 75.1 A 0.1 0.1 0 1 0 60 74.9 M 300 54.9 A 0.1 0.1 0 1 0 300 55.1 A 0.1 0.1 0 1 0 300 54.9 M 95 329.9 A 0.1 0.1 0 1 0 95 330.1 A 0.1 0.1 0 1 0 95 329.9 M 325 304.9 A 0.1 0.1 0 1 0 325 305.1 A 0.1 0.1 0 1 0 325 304.9 M 200 174.9 A 0.1 0.1 0 1 0 200 175.1 A 0.1 0.1 0 1 0 200 174.9 M 270 149.9 A 0.1 0.1 0 1 0 270 150.1 A 0.1 0.1 0 1 0 270 149.9 M 85 174.9 A 0.1 0.1 0 1 0 85 175.1 A 0.1 0.1 0 1 0 85 174.9 M 225 274.9 A 0.1 0.1 0 1 0 225 275.1 A 0.1 0.1 0 1 0 225 274.9 M 192 44.9 A 0.1 0.1 0 1 0 192 45.1 A 0.1 0.1 0 1 0 192 44.9'
      );
    }
    10% {
      clip-path: path(
        'M 60 74.9 A 0.1 0.1 0 1 0 60 75.1 A 0.1 0.1 0 1 0 60 74.9 M 300 54.9 A 0.1 0.1 0 1 0 300 55.1 A 0.1 0.1 0 1 0 300 54.9 M 95 329.9 A 0.1 0.1 0 1 0 95 330.1 A 0.1 0.1 0 1 0 95 329.9 M 325 165 A 140 140 0 1 0 325 445 A 140 140 0 1 0 325 165 M 200 174.9 A 0.1 0.1 0 1 0 200 175.1 A 0.1 0.1 0 1 0 200 174.9 M 270 149.9 A 0.1 0.1 0 1 0 270 150.1 A 0.1 0.1 0 1 0 270 149.9 M 85 174.9 A 0.1 0.1 0 1 0 85 175.1 A 0.1 0.1 0 1 0 85 174.9 M 225 274.9 A 0.1 0.1 0 1 0 225 275.1 A 0.1 0.1 0 1 0 225 274.9 M 192 44.9 A 0.1 0.1 0 1 0 192 45.1 A 0.1 0.1 0 1 0 192 44.9'
      );
    }
    20% {
      clip-path: path(
        'M 60 74.9 A 0.1 0.1 0 1 0 60 75.1 A 0.1 0.1 0 1 0 60 74.9 M 300 54.9 A 0.1 0.1 0 1 0 300 55.1 A 0.1 0.1 0 1 0 300 54.9 M 95 210 A 120 120 0 1 0 95 450 A 120 120 0 1 0 95 210 M 325 165 A 140 140 0 1 0 325 445 A 140 140 0 1 0 325 165 M 200 174.9 A 0.1 0.1 0 1 0 200 175.1 A 0.1 0.1 0 1 0 200 174.9 M 270 149.9 A 0.1 0.1 0 1 0 270 150.1 A 0.1 0.1 0 1 0 270 149.9 M 85 174.9 A 0.1 0.1 0 1 0 85 175.1 A 0.1 0.1 0 1 0 85 174.9 M 225 274.9 A 0.1 0.1 0 1 0 225 275.1 A 0.1 0.1 0 1 0 225 274.9 M 192 44.9 A 0.1 0.1 0 1 0 192 45.1 A 0.1 0.1 0 1 0 192 44.9'
      );
    }
    32% {
      clip-path: path(
        'M 60 74.9 A 0.1 0.1 0 1 0 60 75.1 A 0.1 0.1 0 1 0 60 74.9 M 300 54.9 A 0.1 0.1 0 1 0 300 55.1 A 0.1 0.1 0 1 0 300 54.9 M 95 210 A 120 120 0 1 0 95 450 A 120 120 0 1 0 95 210 M 325 165 A 140 140 0 1 0 325 445 A 140 140 0 1 0 325 165 M 200 174.9 A 0.1 0.1 0 1 0 200 175.1 A 0.1 0.1 0 1 0 200 174.9 M 270 20 A 130 130 0 1 0 270 280 A 130 130 0 1 0 270 20 M 85 174.9 A 0.1 0.1 0 1 0 85 175.1 A 0.1 0.1 0 1 0 85 174.9 M 225 274.9 A 0.1 0.1 0 1 0 225 275.1 A 0.1 0.1 0 1 0 225 274.9 M 192 44.9 A 0.1 0.1 0 1 0 192 45.1 A 0.1 0.1 0 1 0 192 44.9'
      );
    }
    42% {
      clip-path: path(
        'M 60 -45 A 120 120 0 1 0 60 195 A 120 120 0 1 0 60 -45 M 300 54.9 A 0.1 0.1 0 1 0 300 55.1 A 0.1 0.1 0 1 0 300 54.9 M 95 210 A 120 120 0 1 0 95 450 A 120 120 0 1 0 95 210 M 325 165 A 140 140 0 1 0 325 445 A 140 140 0 1 0 325 165 M 200 174.9 A 0.1 0.1 0 1 0 200 175.1 A 0.1 0.1 0 1 0 200 174.9 M 270 20 A 130 130 0 1 0 270 280 A 130 130 0 1 0 270 20 M 85 174.9 A 0.1 0.1 0 1 0 85 175.1 A 0.1 0.1 0 1 0 85 174.9 M 225 274.9 A 0.1 0.1 0 1 0 225 275.1 A 0.1 0.1 0 1 0 225 274.9 M 192 44.9 A 0.1 0.1 0 1 0 192 45.1 A 0.1 0.1 0 1 0 192 44.9'
      );
    }
    54% {
      clip-path: path(
        'M 60 -45 A 120 120 0 1 0 60 195 A 120 120 0 1 0 60 -45 M 300 54.9 A 0.1 0.1 0 1 0 300 55.1 A 0.1 0.1 0 1 0 300 54.9 M 95 210 A 120 120 0 1 0 95 450 A 120 120 0 1 0 95 210 M 325 165 A 140 140 0 1 0 325 445 A 140 140 0 1 0 325 165 M 200 174.9 A 0.1 0.1 0 1 0 200 175.1 A 0.1 0.1 0 1 0 200 174.9 M 270 20 A 130 130 0 1 0 270 280 A 130 130 0 1 0 270 20 M 85 174.9 A 0.1 0.1 0 1 0 85 175.1 A 0.1 0.1 0 1 0 85 174.9 M 225 140 A 135 135 0 1 0 225 410 A 135 135 0 1 0 225 140 M 192 44.9 A 0.1 0.1 0 1 0 192 45.1 A 0.1 0.1 0 1 0 192 44.9'
      );
    }
    65% {
      clip-path: path(
        'M 60 -45 A 120 120 0 1 0 60 195 A 120 120 0 1 0 60 -45 M 300 -75 A 130 130 0 1 0 300 185 A 130 130 0 1 0 300 -75 M 95 210 A 120 120 0 1 0 95 450 A 120 120 0 1 0 95 210 M 325 165 A 140 140 0 1 0 325 445 A 140 140 0 1 0 325 165 M 200 174.9 A 0.1 0.1 0 1 0 200 175.1 A 0.1 0.1 0 1 0 200 174.9 M 270 20 A 130 130 0 1 0 270 280 A 130 130 0 1 0 270 20 M 85 174.9 A 0.1 0.1 0 1 0 85 175.1 A 0.1 0.1 0 1 0 85 174.9 M 225 140 A 135 135 0 1 0 225 410 A 135 135 0 1 0 225 140 M 192 44.9 A 0.1 0.1 0 1 0 192 45.1 A 0.1 0.1 0 1 0 192 44.9'
      );
    }
    76% {
      clip-path: path(
        'M 60 -45 A 120 120 0 1 0 60 195 A 120 120 0 1 0 60 -45 M 300 -75 A 130 130 0 1 0 300 185 A 130 130 0 1 0 300 -75 M 95 210 A 120 120 0 1 0 95 450 A 120 120 0 1 0 95 210 M 325 165 A 140 140 0 1 0 325 445 A 140 140 0 1 0 325 165 M 200 174.9 A 0.1 0.1 0 1 0 200 175.1 A 0.1 0.1 0 1 0 200 174.9 M 270 20 A 130 130 0 1 0 270 280 A 130 130 0 1 0 270 20 M 85 50 A 125 125 0 1 0 85 300 A 125 125 0 1 0 85 50 M 225 140 A 135 135 0 1 0 225 410 A 135 135 0 1 0 225 140 M 192 44.9 A 0.1 0.1 0 1 0 192 45.1 A 0.1 0.1 0 1 0 192 44.9'
      );
    }
    88% {
      clip-path: path(
        'M 60 -45 A 120 120 0 1 0 60 195 A 120 120 0 1 0 60 -45 M 300 -75 A 130 130 0 1 0 300 185 A 130 130 0 1 0 300 -75 M 95 210 A 120 120 0 1 0 95 450 A 120 120 0 1 0 95 210 M 325 165 A 140 140 0 1 0 325 445 A 140 140 0 1 0 325 165 M 200 65 A 110 110 0 1 0 200 285 A 110 110 0 1 0 200 65 M 270 20 A 130 130 0 1 0 270 280 A 130 130 0 1 0 270 20 M 85 50 A 125 125 0 1 0 85 300 A 125 125 0 1 0 85 50 M 225 140 A 135 135 0 1 0 225 410 A 135 135 0 1 0 225 140 M 192 44.9 A 0.1 0.1 0 1 0 192 45.1 A 0.1 0.1 0 1 0 192 44.9'
      );
    }
    100% {
      clip-path: path(
        'M 60 -45 A 120 120 0 1 0 60 195 A 120 120 0 1 0 60 -45 M 300 -75 A 130 130 0 1 0 300 185 A 130 130 0 1 0 300 -75 M 95 210 A 120 120 0 1 0 95 450 A 120 120 0 1 0 95 210 M 325 165 A 140 140 0 1 0 325 445 A 140 140 0 1 0 325 165 M 200 65 A 110 110 0 1 0 200 285 A 110 110 0 1 0 200 65 M 270 20 A 130 130 0 1 0 270 280 A 130 130 0 1 0 270 20 M 85 50 A 125 125 0 1 0 85 300 A 125 125 0 1 0 85 50 M 225 140 A 135 135 0 1 0 225 410 A 135 135 0 1 0 225 140 M 192 -115 A 160 160 0 1 0 192 205 A 160 160 0 1 0 192 -115'
      );
    }
  }

  @keyframes photo-film {
    from {
      filter: opacity(0.85) blur(4px) contrast(1.6) saturate(75%) invert(100%) sepia(33%);
    }
    35% {
      filter: opacity(0.9) blur(3px) contrast(1.5) saturate(90%) invert(100%) sepia(45%);
    }
    45% {
      filter: opacity(0.95) blur(2px) contrast(1.367) saturate(110%) invert(0%) sepia(50%);
    }
    77% {
      filter: opacity(0.99) blur(0) contrast(1.2) saturate(105%) invert(0)
        sepia(calc(var(--final-sepia) - 0.05));
    }
    to {
      filter: opacity(1) blur(0) contrast(1) saturate(100%) invert(0) sepia(var(--final-sepia));
    }
  }
</style>
