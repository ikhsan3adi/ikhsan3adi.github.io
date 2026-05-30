<script lang="ts">
  import Icon from '@iconify/svelte';

  import bg from '$lib/components/graphics/wave-bg.svg';

  import EmblemSquare from '$lib/components/graphics/EmblemSquare.svelte';
  import Wrappper from '$lib/components/widgets/Wrappper.svelte';

  import { socials } from '$lib/api/socials';
  import { navLinks } from '$lib/components/navigation';
  import { FULL_NAME, sourceLink } from '$lib/config';

  export let noNavLinks = false;

  // Filter socials for footer: GitHub, LinkedIn, and Codeberg (exclude Facebook & casual ones)
  const footerSocials = socials.filter((s) =>
    ['Github', 'LinkedIn', 'Codeberg'].includes(s.social)
  );
</script>

<footer class="w-full bg-slate-800 h-max border-t-4 border-accent relative overflow-hidden">
  <!-- Background wave scrolling -->
  <div
    class="absolute inset-0 pointer-events-none scroll-bg-animation"
    style="background-image: url({bg});"
  ></div>
  <Wrappper>
    <div class="w-full py-4">
      <div
        class="py-6 flex {noNavLinks
          ? 'justify-center'
          : 'justify-between'} gap-4 md:gap-12 lg:gap-36 xl:gap-52 items-center text-white"
      >
        <!-- Emblem -->
        <div class="flex">
          <div
            class="h-24 w-24 sm:w-28 sm:h-28 md:w-36 md:h-36 my-auto cursor-crosshair active:animate-ping"
          >
            <EmblemSquare />
          </div>
        </div>

        <!-- Navlinks -->
        {#if !noNavLinks}
          <div
            class="w-full flex justify-center md:justify-around flex-wrap items-center text-white gap-x-8 gap-y-6"
          >
            {#each navLinks as link}
              <a class="hover:underline active:text-primary" href="#{link.link}">{link.text}</a>
            {/each}
          </div>
        {/if}
      </div>

      <hr class="my-4 border-slate-500" />

      <!-- Socials -->
      <div class="flex justify-center gap-6 my-10 opacity-90 h-10">
        {#each footerSocials as social}
          <a href={social.link} target="_blank" class="group" title={social.social}>
            <div
              class="w-8 h-8 text-slate-400 group-hover:text-slate-100 group-active:text-primary"
            >
              <Icon icon={social.icon} class="w-full h-full text-current" />
            </div>
          </a>
        {/each}
      </div>

      <!-- Copyright & Credit -->
      <p class="text-slate-200 text-center text-sm mb-3">
        &copy; {new Date().getFullYear()}, made with ❤️ by
        <a
          href={noNavLinks ? '/' : '#social'}
          class="text-primary font-semibold hover:underline active:text-custom-3"
          title="View my social profiles"
        >
          {FULL_NAME}
        </a>
      </p>
      <p class="text-slate-300 text-center text-xs mb-3">
        Built with
        <a
          href="https://svelte.dev"
          target="_blank"
          class="text-orange-500 font-semibold hover:underline active:text-white"
        >
          SvelteKit
        </a>
        &
        <a
          href="https://tailwindcss.com"
          target="_blank"
          class="text-cyan-500 font-semibold hover:underline active:text-white"
        >
          Tailwind CSS
        </a>
      </p>
      <p class="text-slate-400 text-center text-xs">
        <a
          href={sourceLink}
          target="_blank"
          class="text-slate-300 hover:text-slate-100 hover:underline active:text-primary"
        >
          View source on GitHub
        </a>
      </p>
    </div>
  </Wrappper>
</footer>

<style>
  .scroll-bg-animation {
    background-repeat: repeat-x;
    background-position: center center;
    background-size: auto 32rem;
    opacity: 0.1;
    animation: scroll-horizontal 120s linear infinite;
  }

  @keyframes scroll-horizontal {
    from {
      background-position-x: 0;
    }
    50% {
      background-position-x: 100%;
    }
    100% {
      background-position-x: 0;
    }
  }
</style>
