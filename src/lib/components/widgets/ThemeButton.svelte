<script lang="ts">
  import Moon from '$lib/components/graphics/Moon.svelte';
  import { darkEnabled } from '$lib/config';
  import { onMount } from 'svelte';

  interface Props {
    isBgTransparent?: boolean;
  }

  let { isBgTransparent = true }: Props = $props();

  // indicate if we're in dark mode or not
  let dark = $state(false);

  onMount(() => {
    darkEnabled.set(localStorage.theme == 'dark');

    darkEnabled.subscribe((value) => {
      if (dark != value) setMode(value);
    });
  });

  function toggle() {
    setMode(!dark);
  }

  function setMode(value: boolean) {
    dark = value;
    darkEnabled.set(value);

    // update page styling
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // store the theme as a local override
    localStorage.theme = dark ? 'dark' : 'light';
  }
</script>

<svelte:head>
  <script>
    if (localStorage.theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  </script>
</svelte:head>

<button
  id="themeModeBtn"
  aria-label="Toggle dark mode"
  title="Better with dark mode off :)"
  class="{isBgTransparent
    ? 'dark:border-white dark:focus:ring-white'
    : 'border-text focus:ring-text'} border-2 relative inline-flex shrink-0 h-6 w-11 items-center px-0.5 rounded-full cursor-pointer transition-colors ease-in-out duration-800 focus:ring-1"
  onclick={toggle}
>
  <span
    class="{dark
      ? 'translate-x-5'
      : 'translate-x-0'} translate-y-0 pointer-events-none relative inline-block h-4 w-4 rounded-full shadow transform ring-0 transition ease-in-out duration-500"
  >
    <span
      class="{dark ? 'opacity-100' : 'opacity-0'}
        ease-in-out duration-800 translate-y-0 absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"
      aria-hidden="true"
    >
      <!-- moon icon -->
      <div
        class="w-4 h-4 text-black translate-y-0 {isBgTransparent
          ? 'dark:text-white'
          : 'dark:text-text'} ease-in-out duration-800"
      >
        <Moon />
      </div>
    </span>
    <span
      class="{dark ? 'opacity-0' : 'opacity-100'}
        ease-in-out duration-800 translate-y-0 absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"
      aria-hidden="true"
    >
      <!-- sun icon -->
      <div
        class="h-4 w-4 rounded-full translate-y-0 {isBgTransparent
          ? 'dark:bg-white'
          : 'dark:bg-text'} bg-text"
      ></div>
    </span>
  </span>
</button>
