<script lang="ts">
  import { navLinks } from '$lib/components/navigation';
  import { hamburgerMenuExpanded } from '$lib/config';

  import { scrollState } from '$lib/scroll.svelte';

  import Hamburger from '$lib/components/buttons/Hamburger.svelte';
  import ThemeButton from '$lib/components/widgets/ThemeButton.svelte';
  import Wrappper from '$lib/components/widgets/Wrappper.svelte';
  import SimpleLogoText from '$lib/components/graphics/SimpleLogoText.svelte';

  interface Props {
    showNavLinks?: boolean;
  }

  let { showNavLinks = true }: Props = $props();

  let navbar = $state<HTMLElement | undefined>();

  let prevScrollpos = Infinity;
  let prevScrollpos2 = 0;

  let isBgFullyTransparent = $state(true);
  let isBgTransparent = $state(true);
  let backgroundClasses = $state('bg-primary/0 border-slate-900/0');

  $effect(() => {
    autoHideMenu();
    autoHideNavbar();
    changeColors();
  });

  function autoHideNavbar() {
    let currentScrollPos = scrollState.y;
    if (!navbar) return;

    if (prevScrollpos > currentScrollPos) {
      navbar.style.top = '0';
    } else {
      navbar.style.top = '-68px';
    }
    prevScrollpos = currentScrollPos;
  }

  function changeColors() {
    if (scrollState.y < 300) {
      isBgFullyTransparent = true;
      isBgTransparent = true;
      backgroundClasses = 'bg-primary/0 border-slate-900/0 dark:border-slate-700/0';
    } else if (showNavLinks ? scrollState.y < 400 : scrollState.y < 333) {
      isBgFullyTransparent = false;
      isBgTransparent = true;
      backgroundClasses = 'bg-primary/20 border-slate-900/0 dark:border-slate-700/0';
    } else if (showNavLinks ? scrollState.y < 600 : scrollState.y < 367) {
      isBgFullyTransparent = false;
      isBgTransparent = true;
      backgroundClasses = 'bg-primary/50 border-slate-900/0 dark:border-slate-700/0';
    } else if (showNavLinks ? scrollState.y < 800 : scrollState.y < 400) {
      isBgFullyTransparent = false;
      isBgTransparent = true;
      backgroundClasses = 'bg-primary/60 border-slate-900/0 dark:border-slate-700/0';
    } else {
      isBgFullyTransparent = false;
      isBgTransparent = false;
      backgroundClasses = 'bg-primary/100 border-slate-900/100 dark:border-slate-700/100';
    }
  }

  function autoHideMenu() {
    let currentScrollPos = scrollState.y;
    if (currentScrollPos > prevScrollpos2 + 250 || currentScrollPos < prevScrollpos2 - 250) {
      hamburgerMenuExpanded.set(false);
      prevScrollpos2 = currentScrollPos;
    }
  }
</script>

<header
  bind:this={navbar}
  class="fixed top-0 left-0 right-0 border-b-4 z-40 duration-300 {backgroundClasses}"
>
  <Wrappper>
    <div class="my-auto h-14 md:h-16 flex justify-between w-full">
      <!-- Logo -->
      <div
        class="my-auto duration-500
        {isBgFullyTransparent ? 'bg-white/70 dark:bg-slate-800/70' : ''}"
      >
        <SimpleLogoText {isBgTransparent} />
      </div>

      <!-- Nav links -->
      {#if showNavLinks}
        <div
          class="hidden w-full pr-12 xl:pr-16 pl-16 xl:pl-24 lg:flex justify-evenly flex-wrap items-center text-text transition-colors duration-800 ease-in-out
					{isBgTransparent ? 'dark:text-white' : 'dark:text-text'}"
        >
          {#each navLinks as link}
            <a
              class="hover:underline active:text-indigo-500 dark:active:text-custom-3 active:text-shadow-sm duration-500
                {isBgFullyTransparent ? 'bg-white/70 dark:bg-slate-800/70' : ''}"
              href="#{link.link}"
            >
              {link.text}
            </a>
          {/each}
        </div>
      {/if}

      <!-- Hamburger menu -->
      <Hamburger
        {isBgTransparent}
        {showNavLinks}
        className="duration-500 {isBgFullyTransparent ? 'bg-white/70 dark:bg-slate-800/70' : ''}"
      />

      <!-- Dark mode toggle -->
      <div
        class="hidden lg:block my-auto duration-500
          {isBgFullyTransparent ? 'bg-white/70 dark:bg-slate-800/70' : ''}"
      >
        <ThemeButton {isBgTransparent} />
      </div>
    </div>
  </Wrappper>
</header>
