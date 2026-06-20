<script lang="ts">
  import { onMount } from 'svelte';

  import { navLinks } from '$lib/components/navigation';
  import { hamburgerMenuExpanded } from '$lib/config';

  import Hamburger from '$lib/components/buttons/Hamburger.svelte';
  import ThemeButton from '$lib/components/widgets/ThemeButton.svelte';
  import Wrappper from '$lib/components/widgets/Wrappper.svelte';
  import SimpleLogoText from '$lib/components/graphics/SimpleLogoText.svelte';

  interface Props {
    showNavLinks?: boolean;
  }

  let { showNavLinks = true }: Props = $props();

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
    } else if (showNavLinks ? scrollY < 400 : scrollY < 333) {
      isBgTransparent = true;
      backgroundClasses = 'bg-primary/20 border-slate-900/0';
    } else if (showNavLinks ? scrollY < 600 : scrollY < 367) {
      isBgTransparent = true;
      backgroundClasses = 'bg-primary/50 border-slate-900/0';
    } else if (showNavLinks ? scrollY < 800 : scrollY < 400) {
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
    <div class="my-auto h-14 md:h-16 flex justify-between w-full">
      <!-- Logo -->
      <SimpleLogoText {isBgTransparent} />

      <!-- Nav links -->
      {#if showNavLinks}
        <div
          class="hidden w-full pr-12 xl:pr-16 pl-16 xl:pl-24 lg:flex justify-evenly flex-wrap items-center text-text
					{isBgTransparent ? 'dark:text-white' : 'dark:text-text'}"
        >
          {#each navLinks as link}
            <a class="hover:underline active:text-indigo-500" href="#{link.link}">{link.text}</a>
          {/each}
        </div>
      {/if}

      <!-- Hamburger menu -->
      <Hamburger {isBgTransparent} {showNavLinks} />

      <!-- Dark mode toggle -->
      <div class="hidden lg:block my-auto">
        <ThemeButton {isBgTransparent} />
      </div>
    </div>
  </Wrappper>
</section>
