<script lang="ts">
  import { EMBLEM_NAME, hamburgerMenuExpanded } from '$lib/config';
  import { onMount } from 'svelte';

  import Hamburger from '$lib/components/sections/project-detail/Hamburger.svelte';
  import ThemeButton from '$lib/components/widgets/ThemeButton.svelte';
  import Wrappper from '$lib/components/widgets/Wrappper.svelte';

  let navbar = $state<HTMLElement | undefined>();

  let scrollY = $state(0);
  let prevScrollpos = 0;
  let prevScrollpos2 = 0;

  let isBgTransparent = $state(true);
  let backgroundClasses = $state('bg-primary/0 border-slate-900/0');

  onMount(() => {
    changeColors();
    autoHideMenu();
    window.onscroll = async () => {
      autoHideMenu();
      autoHideNavbar();
      changeColors();
    };
  });

  function autoHideNavbar() {
    let currentScrollPos = scrollY;
    if (!navbar) return;

    if (prevScrollpos > currentScrollPos) {
      navbar.style.top = '0';
    } else {
      navbar.style.top = '-68px';
    }
    prevScrollpos = currentScrollPos;
  }

  function changeColors() {
    if (scrollY < 300) {
      isBgTransparent = true;
      backgroundClasses = 'bg-primary/0 border-slate-900/0';
    } else if (scrollY < 333) {
      isBgTransparent = true;
      backgroundClasses = 'bg-primary/20 border-slate-900/0';
    } else if (scrollY < 367) {
      isBgTransparent = true;
      backgroundClasses = 'bg-primary/50 border-slate-900/0';
    } else if (scrollY < 400) {
      isBgTransparent = true;
      backgroundClasses = 'bg-primary/60 border-slate-900/0';
    } else {
      isBgTransparent = false;
      backgroundClasses = 'bg-primary/100 border-slate-900/100';
    }
  }

  function autoHideMenu() {
    let currentScrollPos = scrollY;
    if (currentScrollPos > prevScrollpos2 + 250 || currentScrollPos < prevScrollpos2 - 250) {
      hamburgerMenuExpanded.set(false);
      prevScrollpos2 = currentScrollPos;
    }
  }
</script>

<svelte:window bind:scrollY />

<section
  bind:this={navbar}
  class="fixed top-0 left-0 right-0 border-b-4 z-40 duration-300 {backgroundClasses}"
>
  <Wrappper>
    <div class="my-auto h-16 flex justify-between w-full">
      <!-- Logo -->
      <div class="my-auto">
        <div class="mt-2 dark:mt-0 relative">
          <a href="/">
            <div
              class="text-primary {isBgTransparent
                ? 'dark:text-white'
                : 'dark:text-text'} font-mechsuit text-sm md:text-lg z-0 transition-colors duration-500"
            >
              {EMBLEM_NAME}
            </div>

            <div
              class="font-mechsuit dark:hidden text-sm md:text-lg absolute -top-1 right-1 transition-colors duration-500"
            >
              {EMBLEM_NAME}
            </div>
          </a>
        </div>
      </div>

      <!-- Hamburger menu -->
      <Hamburger {isBgTransparent} />

      <!-- Dark mode toggle -->
      <div class="hidden lg:block my-auto">
        <ThemeButton {isBgTransparent} />
      </div>
    </div>
  </Wrappper>
</section>
