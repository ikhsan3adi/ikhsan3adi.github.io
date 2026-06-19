<script lang="ts">
  import { faFolderOpen, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
  import Fa from 'svelte-fa';
  import Typewriter from 'svelte-typewriter';

  import bg from '$lib/components/graphics/hero-bg.svg';

  import Button from '$lib/components/buttons/Button.svelte';
  import Emblem from '$lib/components/graphics/Emblem.svelte';
  import Wrappper from '$lib/components/widgets/Wrappper.svelte';

  import { FIRST_NAME, LAST_NAME } from '$lib/config';
</script>

<section
  class="min-h-[800px] md:min-h-[600px] h-[100vh] max-h-[1350px] overflow-hidden flex relative duration-500"
>
  <!-- Background image scrolling -->
  <div
    class="absolute inset-0 overflow-hidden pointer-events-none -z-10 bg-repeat bg-[0_-100px] scroll-bg-animation will-change-transform"
    style="background-image: url({bg});"
  ></div>

  <div class="md:mt-16 w-full flex">
    <Wrappper>
      <div class="w-full md:flex md:gap-4 md:justify-between my-auto">
        <div class="mb-52 mt-16 md:m-0 py-2 md:py-8 lg:py-9 sm:max-md:text-center duration-500">
          <!-- Hero text -->
          <p
            id="home"
            class="dark:text-white duration-500 md:text-lg lg:text-xl font-medium cursor-not-allowed"
          >
            Hello, my name is
          </p>
          <h1 class="mb-2 dark:text-white duration-500 cursor-not-allowed">
            {FIRST_NAME}
            <span class="font-cascadia-mono text-inherit text-primary">
              {LAST_NAME}
            </span>
          </h1>

          <!-- Typing effect -->
          <div
            class="mb-4 dark:text-white duration-500 italic md:text-lg lg:text-xl font-medium cursor-not-allowed"
          >
            <Typewriter mode={'loop'} interval={25}>
              A
              <span class="text-emerald-600 dark:text-primary">Student</span>
              <span class="text-green-600 dark:text-green-400">Programmer</span>
              <span class="text-orange-600 dark:text-orange-400">Computer User</span>
            </Typewriter>
          </div>

          <!-- Call to action buttons -->
          <div class="flex flex-wrap gap-3 sm:max-md:justify-center">
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
        <div class="max-md:mx-auto w-max md:my-auto relative active:animate-ping transform-gpu">
          <div
            class="cursor-crosshair w-52 h-52 mx-auto md:w-64 md:h-64 lg:w-72 lg:h-72 dark:text-white absolute -top-3 right-2 duration-[50ms]"
          >
            <Emblem />
          </div>

          <!-- Back outline / shadow -->
          <div
            class="cursor-crosshair w-52 h-52 mx-auto md:w-64 md:h-64 lg:w-72 lg:h-72 text-custom-3 dark:text-transparent stroke-[4] stroke-slate-900 dark:stroke-custom-3 duration-500"
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

  .scroll-bg-animation {
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
  }
</style>
