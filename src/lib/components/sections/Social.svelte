<script lang="ts">
  import Icon from '@iconify/svelte';

  import Button from '$lib/components/buttons/Button.svelte';
  import Saos from '$lib/components/widgets/Saos.svelte';
  import Wrappper from '$lib/components/widgets/Wrappper.svelte';

  import { socials } from '$lib/api/socials';

  // import cobweb from '$lib/components/graphics/cobweb-05.svg';
</script>

<section
  class="w-full relative pb-16 border-t-4 border-b-4 border-slate-800 dark:border-white bg-secondary dark:bg-rose-800/30"
>
  <!-- Background cobweb -->
  <!-- <div class="absolute overflow-clip inset-0 flex justify-center items-center">
    <div
      class="absolute
        w-384 h-384 md:w-[108rem] md:h-[108rem] lg:w-[120rem] lg:h-[120rem] xl:w-[132rem] xl:h-[132rem]
          opacity-45 dark:opacity-20 transform-gpu spin-slow"
      style="background-image: url({cobweb}); background-repeat: no-repeat; background-position: center;"
      title="I'm not a Spider-Man fan btw lol"
      aria-hidden="true"
    ></div>
  </div> -->

  <Wrappper>
    <div class="w-full">
      <Saos animation={'scale-up-center 1s cubic-bezier(0.4, 0, 0.2, 1) both'} once>
        <h2
          class="text-center mx-auto my-10 md:my-12 lg:my-16 dark:text-white duration-500"
          id="social"
        >
          Connect with me
        </h2>
      </Saos>

      <!-- Social buttons -->
      <div class="flex flex-wrap justify-center gap-4 lg:gap-5 xl:gap-6">
        {#each socials as social}
          <Saos
            animation={'scale-up-center 1s cubic-bezier(0.4, 0, 0.2, 1) both'}
            once
            outerClass="w-full min-[20rem]:w-[47%] md:w-[48%] lg:w-[31.5%]"
          >
            <Button
              href={social.link}
              target="_blank"
              rel="noreferrer"
              aria-label={social.name}
              variant={social.colorVariant}
              noDarkVariant={false}
              centerText={false}
              className="w-full"
            >
              {#snippet icon()}
                <div class="w-6 h-6 sm:w-10 sm:h-10">
                  <Icon icon={social.icon} class="w-full h-full" />
                </div>
              {/snippet}
              <div class="flex justify-start items-center">
                {social.social}
              </div>
            </Button>
          </Saos>
        {/each}
      </div>
    </div>
  </Wrappper>
</section>

<style>
  /*.spin-slow {
    animation: spin-slow 670s linear infinite;
  }*/

  @keyframes spin-slow {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
