<script lang="ts">
  import { faFolderOpen, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
  import Fa from 'svelte-fa';
  import Typewriter from 'svelte-typewriter';

  // import bg from '$lib/components/graphics/hero-bg.svg';

  import Button from '$lib/components/buttons/Button.svelte';
  import Emblem from '$lib/components/graphics/Emblem.svelte';
  import Wrappper from '$lib/components/widgets/Wrappper.svelte';

  import { FIRST_NAME, LAST_NAME } from '$lib/config';
  import { randomArray } from '$lib/utils';
</script>

<section
  class="min-h-200 md:min-h-150 h-screen max-h-337.5 overflow-hidden flex relative duration-500 bg-white dark:bg-slate-800 bg-halftone bg-halftone-45"
>
  <!-- Background image scrolling -->
  <!-- <div
    class="absolute inset-0 overflow-hidden pointer-events-none -z-10 bg-repeat bg-position-[0_-100px] scroll-bg-animation will-change-transform"
    style="background-image: url({bg});"
  ></div> -->

  <div class="mt-14 md:mt-16 w-full flex">
    <Wrappper>
      <div
        class="w-full flex max-md:flex-col gap-4 justify-evenly md:justify-between md:my-auto items-center"
      >
        <div
          class="m-0 py-2 md:py-8 lg:py-9 max-md:text-center duration-500 flex flex-col max-md:items-center"
        >
          <!-- Hero text -->
          <p
            id="home"
            class="w-fit dark:text-white bg-white/70 dark:bg-slate-800/70 md:text-lg lg:text-xl font-medium cursor-not-allowed duration-500"
          >
            Hello, my name is
          </p>
          <h1 class="mb-2 w-fit dark:text-white duration-500 cursor-not-allowed">
            <span class="bg-white/70 dark:bg-slate-800/70 duration-500">
              {FIRST_NAME}
            </span>
            <span
              class="font-cascadia-mono text-accent dark:text-primary bg-white/70 dark:bg-slate-800/70 duration-500"
            >
              {LAST_NAME}
            </span>
          </h1>

          <!-- Typing effect -->
          <div
            class="mb-4 w-fit dark:text-white bg-white/70 dark:bg-slate-800/70 duration-500 italic md:text-lg lg:text-xl font-medium cursor-not-allowed"
          >
            <Typewriter mode={'loop'} interval={randomArray(35, 50, 20) as unknown as number}>
              A
              <span class="text-emerald-600 dark:text-primary">Student</span>
              <span class="text-fuchsia-800 dark:text-custom-3">Programmer</span>
              <span class="text-orange-600 dark:text-orange-400">Computer User</span>
            </Typewriter>
          </div>

          <!-- Call to action buttons -->
          <div class="flex flex-wrap gap-3 max-md:justify-center">
            <Button href="#portfolio" noDarkVariant={false}>
              {#snippet icon()}
                <Fa icon={faFolderOpen} />
              {/snippet}See projects
            </Button>
            <Button href="#contact" variant="secondary" noDarkVariant={false}>
              {#snippet icon()}
                <Fa icon={faPaperPlane} />
              {/snippet}Contact me
            </Button>
          </div>
        </div>

        <!-- Emblem logo -->
        <div
          class="max-md:mx-auto w-max md:my-auto relative active:animate-ping transform-gpu duration-0"
        >
          <div
            class="cursor-crosshair w-60 h-60 mx-auto md:w-68 md:h-68 lg:w-82 lg:h-82 dark:text-white duration-50 z-1"
          >
            <Emblem />
          </div>

          <div class="flex items-center justify-center absolute inset-0 -z-2">
            <div
              class="w-54 h-50 md:w-60 md:h-54 lg:w-68 lg:h-62 bg-white/70 dark:bg-slate-800/70 duration-500"
            ></div>
          </div>

          <!-- Back outline / shadow -->
          <div
            class="cursor-crosshair w-60 h-60 mx-auto md:w-68 md:h-68 lg:w-82 lg:h-82 text-custom-3
              dark:text-transparent stroke-4 stroke-slate-900 dark:stroke-custom-3 duration-500
              absolute top-3 -right-2 -z-1"
          >
            <Emblem />
          </div>
        </div>
      </div>
    </Wrappper>
  </div>
</section>

<style>
  .dark:root {
    --cursor-color: #fff;
  }

  /*.scroll-bg-animation {
    --bg-height: clamp(800px, 100vh, 1350px);
    width: calc(100% + (var(--bg-height) * 16 / 9));
    background-size: calc(var(--bg-height) * 16 / 9) var(--bg-height);
    animation: scroll-horizontal 67s linear infinite;
  }

  @media (min-width: 768px) {
    .scroll-bg-animation {
      --bg-height: clamp(600px, 100vh, 1350px);
    }
  }

  @keyframes scroll-horizontal {
    from {
      transform: translate3d(0, 0, 0);
    }
    to {
      transform: translate3d(calc(var(--bg-height) * -16 / 9), 0, 0);
    }
  }*/
</style>
