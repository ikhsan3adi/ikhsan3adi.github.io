<script lang="ts">
  import { socials } from '$lib/api/socials';
  import { navLinks } from '$lib/components/navigation';

  import EmblemSquare from '$lib/components/graphics/EmblemSquare.svelte';
  import Wrappper from '$lib/components/widgets/Wrappper.svelte';

  export let noNavLinks = false;

  const newSocials = socials;
  newSocials.splice(4, Number.MAX_VALUE);

  const footerSocials = newSocials;
</script>

<footer>
  <div class="w-full bg-slate-800 h-max border-t-4 border-slate-800 dark:border-white">
    <Wrappper>
      <div class="w-full py-4">
        <div
          class="py-6 flex {noNavLinks
            ? 'justify-center'
            : 'justify-between'} gap-4 md:gap-12 lg:gap-36 xl:gap-52 items-center text-white"
        >
          <!-- Emblem -->
          <div class="flex">
            <div class="h-24 w-24 sm:w-28 sm:h-28 md:w-36 md:h-36 my-auto">
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
        <div class="flex justify-center gap-4 my-10 opacity-90 h-10">
          {#each footerSocials as social}
            <a href={social.link} target="_blank" class="group">
              <div class="w-10 h-10 flex overflow-hidden">
                <div
                  class="w-10 h-10 text-transparent stroke-slate-400 group-hover:stroke-slate-100 group-active:stroke-primary"
                >
                  <svelte:component this={social.icon} />
                </div>
              </div>
            </a>
          {/each}
        </div>

        <!-- Copyright & Credit -->
        <p class="text-slate-200 text-center text-sm">
          &copy; {new Date().getFullYear()}, made with ❤️ by
          <a
            href={noNavLinks ? '/' : '#social'}
            target="_blank"
            class="text-primary hover:underline active:text-custom-3">Ikhsan Satriadi</a
          >, using
          <a
            href="https://svelte.dev"
            target="_blank"
            class="text-orange-500 hover:underline active:text-white"
          >
            SvelteKit
          </a>
          and
          <a
            href="https://tailwindcss.com"
            target="_blank"
            class="text-cyan-500 hover:underline active:text-white"
          >
            Tailwind CSS
          </a>
        </p>
      </div>
    </Wrappper>
  </div>
</footer>
