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

<section>
  <!-- Background image -->
  <div
    class="min-h-[800px] md:min-h-[600px] h-[100vh] max-h-[1350px] bg-cover bg-no-repeat bg-center flex relative duration-500"
    style="background-image: url({bg});"
  >
    <div class="md:mt-16 w-full flex">
      <Wrappper>
        <div class="w-full md:flex md:gap-4 md:justify-between my-auto">
          <div class="mb-52 mt-16 md:m-0 py-2 md:py-8 lg:py-9 sm:max-md:text-center duration-500">
            <!-- Hero text -->
            <h4 id="home" class="dark:text-white duration-500">Hello, my name is</h4>
            <h1 class="mb-2 dark:text-white duration-500">
              {FIRST_NAME}
              <span class="font-cascadia-mono text-inherit text-primary">{LAST_NAME}</span>
            </h1>

            <!-- Typing effect -->
            <h4 class="mb-4 dark:text-white duration-500">
              <Typewriter mode={'loop'} interval={25}>
                A
                <span class="text-emerald-600 dark:text-primary">Student</span>
                <span class="text-green-600 dark:text-green-400">Programmer</span>
                <span class="text-orange-600 dark:text-orange-400">Computer User</span>
              </Typewriter>
            </h4>

            <!-- Call to action buttons -->
            <div class="flex flex-wrap gap-3 sm:max-md:justify-center">
              <a href="#portfolio">
                <Button noDarkVariant={false}>
                  <Fa icon={faFolderOpen} slot="icon" />See projects
                </Button>
              </a>
              <a href="#contact">
                <Button variant="secondary" noDarkVariant={false}>
                  <Fa icon={faPaperPlane} slot="icon" />Contact me
                </Button>
              </a>
            </div>
          </div>

          <!-- Emblem logo -->
          <div class="max-md:mx-auto w-max md:my-auto relative">
            <div
              class="w-52 h-52 mx-auto md:w-64 md:h-64 lg:w-72 lg:h-72 dark:text-white absolute -top-3 right-2 duration-[50ms]"
            >
              <Emblem />
            </div>

            <!-- Back outline / shadow -->
            <div
              class="w-52 h-52 mx-auto md:w-64 md:h-64 lg:w-72 lg:h-72 text-secondary dark:text-transparent dark:stroke-[4] dark:stroke-custom-3 duration-500"
            >
              <Emblem />
            </div>
          </div>
        </div>
      </Wrappper>
    </div>
  </div>
</section>

<style>
  .dark:root {
    --cursor-color: #fff;
  }
</style>
