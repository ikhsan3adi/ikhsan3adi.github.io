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
            class="w-full h-full"
            class:img-halftone={halftone}
            style="--final-sepia: {halftone ? 0.367 : 0};"
            use:randomRotate
          >
            {#if halftone}
              <div class="w-full h-full halftone" style="animation-delay: {animDelayMs + 1067}ms;">
                <img src={imageSrc} alt={title} class="w-full h-full object-cover halftone-media" />
                <div class="halftone-ink"></div>
              </div>
              <div class="w-full h-full halftone-k-layer" style="animation-delay: {animDelayMs}ms;">
                <img src={imageSrc} alt={title} class="w-full h-full object-cover halftone-media" />
              </div>
            {:else}
              <img src={imageSrc} alt={title} class="w-full h-full object-cover" />
            {/if}
          </div>
        </div>
      {:else}
        <div class="w-full {imgClass}" aria-hidden="true"></div>
      {/if}
      <figcaption id={labelId} class="p-3 w-full border-t-4 border-slate-900 dark:border-slate-700">
        <h3 class="text-base md:text-lg font-bold mb-1 select-none">{title}</h3>
        <p class="text-xs select-none">{description}</p>
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
    backface-visibility: hidden;
    will-change: clip-path;
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
    transform: translateZ(0);
    backface-visibility: hidden;
  }

  .halftone-k-layer::after {
    content: '';
    position: absolute;
    inset: -45%;
    background-size: var(--halftone-size) var(--halftone-size);
    background-blend-mode: multiply;
    mix-blend-mode: screen;
    transform: rotate(var(--halftone-rotation-k, 30deg)) translateZ(0);
    background-image:
      radial-gradient(var(--halftone-color-dot-size) at 25% 25%, #000, #666, #ccc, #fff),
      radial-gradient(var(--halftone-color-dot-size) at 75% 75%, #000, #fff);
    transition: transform 700ms;
    backface-visibility: hidden;
  }

  .img-halftone {
    --halftone-size: 5.67px;
    --halftone-bleed: 0.467;
    --halftone-separate-k: 2.67;
    --halftone-rotation-y: 30deg;
    --halftone-rotation-cmy: 35deg;
    --halftone-rotation-k: 30deg;

    filter: sepia(var(--final-sepia));
  }

  .img-halftone {
    contain: layout style;
    backface-visibility: hidden;
  }

  .img-halftone > .halftone,
  .img-halftone > .halftone-k-layer {
    animation: drops-reveal 1067ms cubic-bezier(1, 0, 0.5, 1) both;
    backface-visibility: hidden;
  }

  @keyframes drops-reveal {
    0% {
      clip-path: path(
        'M 60 74.9 A 0.1 0.1 0 1 0 60 75.1 A 0.1 0.1 0 1 0 60 74.9 M 300 54.9 A 0.1 0.1 0 1 0 300 55.1 A 0.1 0.1 0 1 0 300 54.9 M 95 329.9 A 0.1 0.1 0 1 0 95 330.1 A 0.1 0.1 0 1 0 95 329.9 M 325 304.9 A 0.1 0.1 0 1 0 325 305.1 A 0.1 0.1 0 1 0 325 304.9 M 200 174.9 A 0.1 0.1 0 1 0 200 175.1 A 0.1 0.1 0 1 0 200 174.9 M 270 149.9 A 0.1 0.1 0 1 0 270 150.1 A 0.1 0.1 0 1 0 270 149.9 M 85 174.9 A 0.1 0.1 0 1 0 85 175.1 A 0.1 0.1 0 1 0 85 174.9 M 225 274.9 A 0.1 0.1 0 1 0 225 275.1 A 0.1 0.1 0 1 0 225 274.9 M 192 44.9 A 0.1 0.1 0 1 0 192 45.1 A 0.1 0.1 0 1 0 192 44.9 M 35 269.9 A 0.1 0.1 0 1 0 35 270.1 A 0.1 0.1 0 1 0 35 269.9'
      );
    }
    10% {
      clip-path: path(
        'M 60 74.9 A 0.1 0.1 0 1 0 60 75.1 A 0.1 0.1 0 1 0 60 74.9 M 300 54.9 A 0.1 0.1 0 1 0 300 55.1 A 0.1 0.1 0 1 0 300 54.9 M 95 329.9 A 0.1 0.1 0 1 0 95 330.1 A 0.1 0.1 0 1 0 95 329.9 M 325 185 A 120 120 0 1 0 325 425 A 120 120 0 1 0 325 185 M 200 174.9 A 0.1 0.1 0 1 0 200 175.1 A 0.1 0.1 0 1 0 200 174.9 M 270 149.9 A 0.1 0.1 0 1 0 270 150.1 A 0.1 0.1 0 1 0 270 149.9 M 85 174.9 A 0.1 0.1 0 1 0 85 175.1 A 0.1 0.1 0 1 0 85 174.9 M 225 274.9 A 0.1 0.1 0 1 0 225 275.1 A 0.1 0.1 0 1 0 225 274.9 M 192 44.9 A 0.1 0.1 0 1 0 192 45.1 A 0.1 0.1 0 1 0 192 44.9 M 35 269.9 A 0.1 0.1 0 1 0 35 270.1 A 0.1 0.1 0 1 0 35 269.9'
      );
    }
    20% {
      clip-path: path(
        'M 60 74.9 A 0.1 0.1 0 1 0 60 75.1 A 0.1 0.1 0 1 0 60 74.9 M 300 54.9 A 0.1 0.1 0 1 0 300 55.1 A 0.1 0.1 0 1 0 300 54.9 M 95 220 A 110 110 0 1 0 95 440 A 110 110 0 1 0 95 220 M 325 185 A 120 120 0 1 0 325 425 A 120 120 0 1 0 325 185 M 200 174.9 A 0.1 0.1 0 1 0 200 175.1 A 0.1 0.1 0 1 0 200 174.9 M 270 149.9 A 0.1 0.1 0 1 0 270 150.1 A 0.1 0.1 0 1 0 270 149.9 M 85 174.9 A 0.1 0.1 0 1 0 85 175.1 A 0.1 0.1 0 1 0 85 174.9 M 225 274.9 A 0.1 0.1 0 1 0 225 275.1 A 0.1 0.1 0 1 0 225 274.9 M 192 44.9 A 0.1 0.1 0 1 0 192 45.1 A 0.1 0.1 0 1 0 192 44.9 M 35 269.9 A 0.1 0.1 0 1 0 35 270.1 A 0.1 0.1 0 1 0 35 269.9'
      );
    }
    32% {
      clip-path: path(
        'M 60 74.9 A 0.1 0.1 0 1 0 60 75.1 A 0.1 0.1 0 1 0 60 74.9 M 300 54.9 A 0.1 0.1 0 1 0 300 55.1 A 0.1 0.1 0 1 0 300 54.9 M 95 220 A 110 110 0 1 0 95 440 A 110 110 0 1 0 95 220 M 325 185 A 120 120 0 1 0 325 425 A 120 120 0 1 0 325 185 M 200 174.9 A 0.1 0.1 0 1 0 200 175.1 A 0.1 0.1 0 1 0 200 174.9 M 270 25 A 125 125 0 1 0 270 275 A 125 125 0 1 0 270 25 M 85 174.9 A 0.1 0.1 0 1 0 85 175.1 A 0.1 0.1 0 1 0 85 174.9 M 225 274.9 A 0.1 0.1 0 1 0 225 275.1 A 0.1 0.1 0 1 0 225 274.9 M 192 44.9 A 0.1 0.1 0 1 0 192 45.1 A 0.1 0.1 0 1 0 192 44.9 M 35 269.9 A 0.1 0.1 0 1 0 35 270.1 A 0.1 0.1 0 1 0 35 269.9'
      );
    }
    42% {
      clip-path: path(
        'M 60 -35 A 110 110 0 1 0 60 185 A 110 110 0 1 0 60 -35 M 300 54.9 A 0.1 0.1 0 1 0 300 55.1 A 0.1 0.1 0 1 0 300 54.9 M 95 220 A 110 110 0 1 0 95 440 A 110 110 0 1 0 95 220 M 325 185 A 120 120 0 1 0 325 425 A 120 120 0 1 0 325 185 M 200 174.9 A 0.1 0.1 0 1 0 200 175.1 A 0.1 0.1 0 1 0 200 174.9 M 270 25 A 125 125 0 1 0 270 275 A 125 125 0 1 0 270 25 M 85 174.9 A 0.1 0.1 0 1 0 85 175.1 A 0.1 0.1 0 1 0 85 174.9 M 225 274.9 A 0.1 0.1 0 1 0 225 275.1 A 0.1 0.1 0 1 0 225 274.9 M 192 44.9 A 0.1 0.1 0 1 0 192 45.1 A 0.1 0.1 0 1 0 192 44.9 M 35 269.9 A 0.1 0.1 0 1 0 35 270.1 A 0.1 0.1 0 1 0 35 269.9'
      );
    }
    50% {
      clip-path: path(
        'M 60 -35 A 110 110 0 1 0 60 185 A 110 110 0 1 0 60 -35 M 300 54.9 A 0.1 0.1 0 1 0 300 55.1 A 0.1 0.1 0 1 0 300 54.9 M 95 220 A 110 110 0 1 0 95 440 A 110 110 0 1 0 95 220 M 325 185 A 120 120 0 1 0 325 425 A 120 120 0 1 0 325 185 M 200 174.9 A 0.1 0.1 0 1 0 200 175.1 A 0.1 0.1 0 1 0 200 174.9 M 270 25 A 125 125 0 1 0 270 275 A 125 125 0 1 0 270 25 M 85 174.9 A 0.1 0.1 0 1 0 85 175.1 A 0.1 0.1 0 1 0 85 174.9 M 225 274.9 A 0.1 0.1 0 1 0 225 275.1 A 0.1 0.1 0 1 0 225 274.9 M 192 44.9 A 0.1 0.1 0 1 0 192 45.1 A 0.1 0.1 0 1 0 192 44.9 M 35 150 A 120 120 0 1 0 35 390 A 120 120 0 1 0 35 150'
      );
    }

    54% {
      clip-path: path(
        'M 60 -35 A 110 110 0 1 0 60 185 A 110 110 0 1 0 60 -35 M 300 54.9 A 0.1 0.1 0 1 0 300 55.1 A 0.1 0.1 0 1 0 300 54.9 M 95 220 A 110 110 0 1 0 95 440 A 110 110 0 1 0 95 220 M 325 185 A 120 120 0 1 0 325 425 A 120 120 0 1 0 325 185 M 200 174.9 A 0.1 0.1 0 1 0 200 175.1 A 0.1 0.1 0 1 0 200 174.9 M 270 25 A 125 125 0 1 0 270 275 A 125 125 0 1 0 270 25 M 85 174.9 A 0.1 0.1 0 1 0 85 175.1 A 0.1 0.1 0 1 0 85 174.9 M 225 150 A 125 125 0 1 0 225 400 A 125 125 0 1 0 225 150 M 192 44.9 A 0.1 0.1 0 1 0 192 45.1 A 0.1 0.1 0 1 0 192 44.9 M 35 150 A 120 120 0 1 0 35 390 A 120 120 0 1 0 35 150'
      );
    }
    65% {
      clip-path: path(
        'M 60 -35 A 110 110 0 1 0 60 185 A 110 110 0 1 0 60 -35 M 300 -65 A 120 120 0 1 0 300 175 A 120 120 0 1 0 300 -65 M 95 220 A 110 110 0 1 0 95 440 A 110 110 0 1 0 95 220 M 325 185 A 120 120 0 1 0 325 425 A 120 120 0 1 0 325 185 M 200 174.9 A 0.1 0.1 0 1 0 200 175.1 A 0.1 0.1 0 1 0 200 174.9 M 270 25 A 125 125 0 1 0 270 275 A 125 125 0 1 0 270 25 M 85 174.9 A 0.1 0.1 0 1 0 85 175.1 A 0.1 0.1 0 1 0 85 174.9 M 225 150 A 125 125 0 1 0 225 400 A 125 125 0 1 0 225 150 M 192 44.9 A 0.1 0.1 0 1 0 192 45.1 A 0.1 0.1 0 1 0 192 44.9 M 35 150 A 120 120 0 1 0 35 390 A 120 120 0 1 0 35 150'
      );
    }
    76% {
      clip-path: path(
        'M 60 -35 A 110 110 0 1 0 60 185 A 110 110 0 1 0 60 -35 M 300 -65 A 120 120 0 1 0 300 175 A 120 120 0 1 0 300 -65 M 95 220 A 110 110 0 1 0 95 440 A 110 110 0 1 0 95 220 M 325 185 A 120 120 0 1 0 325 425 A 120 120 0 1 0 325 185 M 200 174.9 A 0.1 0.1 0 1 0 200 175.1 A 0.1 0.1 0 1 0 200 174.9 M 270 25 A 125 125 0 1 0 270 275 A 125 125 0 1 0 270 25 M 85 65 A 110 110 0 1 0 85 285 A 110 110 0 1 0 85 65 M 225 150 A 125 125 0 1 0 225 400 A 125 125 0 1 0 225 150 M 192 44.9 A 0.1 0.1 0 1 0 192 45.1 A 0.1 0.1 0 1 0 192 44.9 M 35 150 A 120 120 0 1 0 35 390 A 120 120 0 1 0 35 150'
      );
    }
    88% {
      clip-path: path(
        'M 60 -35 A 110 110 0 1 0 60 185 A 110 110 0 1 0 60 -35 M 300 -65 A 120 120 0 1 0 300 175 A 120 120 0 1 0 300 -65 M 95 220 A 110 110 0 1 0 95 440 A 110 110 0 1 0 95 220 M 325 185 A 120 120 0 1 0 325 425 A 120 120 0 1 0 325 185 M 200 75 A 100 100 0 1 0 200 275 A 100 100 0 1 0 200 75 M 270 25 A 125 125 0 1 0 270 275 A 125 125 0 1 0 270 25 M 85 65 A 110 110 0 1 0 85 285 A 110 110 0 1 0 85 65 M 225 150 A 125 125 0 1 0 225 400 A 125 125 0 1 0 225 150 M 192 44.9 A 0.1 0.1 0 1 0 192 45.1 A 0.1 0.1 0 1 0 192 44.9 M 35 150 A 120 120 0 1 0 35 390 A 120 120 0 1 0 35 150'
      );
    }
    100% {
      clip-path: path(
        'M 60 -35 A 110 110 0 1 0 60 185 A 110 110 0 1 0 60 -35 M 300 -65 A 120 120 0 1 0 300 175 A 120 120 0 1 0 300 -65 M 95 220 A 110 110 0 1 0 95 440 A 110 110 0 1 0 95 220 M 325 185 A 120 120 0 1 0 325 425 A 120 120 0 1 0 325 185 M 200 75 A 100 100 0 1 0 200 275 A 100 100 0 1 0 200 75 M 270 25 A 125 125 0 1 0 270 275 A 125 125 0 1 0 270 25 M 85 65 A 110 110 0 1 0 85 285 A 110 110 0 1 0 85 65 M 225 150 A 125 125 0 1 0 225 400 A 125 125 0 1 0 225 150 M 192 -95 A 140 140 0 1 0 192 185 A 140 140 0 1 0 192 -95 M 35 150 A 120 120 0 1 0 35 390 A 120 120 0 1 0 35 150'
      );
    }
  }

  @keyframes halftone-print {
    from {
      clip-path: inset(0 0 100% 0);
    }
    to {
      clip-path: inset(0 0 0 0);
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
