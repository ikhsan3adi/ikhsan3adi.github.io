<script lang="ts">
  import { faExternalLink } from '@fortawesome/free-solid-svg-icons';
  import Icon from '@iconify/svelte';
  import Saos from 'saos';
  import Fa from 'svelte-fa';

  import Button from '$lib/components/buttons/Button.svelte';
  import Wrappper from '$lib/components/widgets/Wrappper.svelte';

  import bg from '$lib/components/graphics/hero-bg.svg';

  import { achievements } from '$lib/api/achievements';
  import { cardColors, randomizeElements } from '$lib/components/colors';

  const randomizedColors = randomizeElements(cardColors, achievements.length);
  achievements.reverse();
</script>

<section
  class="w-full relative bg-purple-100 dark:bg-fuchsia-800 border-t-4 border-slate-900 dark:border-white"
>
  <div
    class="bg-repeat flex relative duration-500
    bg-[length:auto_30%] md:bg-[length:auto_50%] lg:bg-[length:auto_55%] xl:bg-[length:auto_60%]"
    style="background-image: url({bg});"
  >
    <Wrappper>
      <div class="w-full pb-16 z-10">
        <Saos animation={'scale-up-center 1s cubic-bezier(0.4, 0, 0.2, 1) both'} once>
          <h2
            class="text-center mx-auto my-10 md:my-12 lg:my-16 dark:text-white duration-500"
            id="achievements"
          >
            Achievements
          </h2>
        </Saos>

        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 xl:gap-6 items-stretch"
        >
          {#each achievements as achievement, i}
            <Saos
              animation={'scale-up-center 1s cubic-bezier(0.4, 0, 0.2, 1) both'}
              once
              css_observer="height: 100%"
              css_animation="height: 100%"
            >
              <div
                class="border-4 border-slate-900 dark:border-slate-700 p-4
              {randomizedColors[i]}
               h-full flex flex-col hover:shadow-lg transition-all duration-200"
              >
                <!-- Icon -->
                <div class="mb-4">
                  <div
                    class="w-12 h-12 bg-slate-200 border-2 border-slate-900 dark:border-slate-700 flex items-center justify-center"
                  >
                    <Icon icon={achievement.icon} class="w-8 h-8 text-black" />
                  </div>
                </div>

                <!-- Title: type icon to the left -->
                <h3 class="mb-2">
                  <span class="inline-block mr-1 translate-y-0.5">
                    {#if achievement.type === 'competition'}
                      <Icon icon="lucide:trophy" class="w-[1.1rem] h-[1.1rem] md:w-5 md:h-5" />
                    {:else if achievement.type === 'course'}
                      <Icon
                        icon="lucide:book-open-text"
                        class="w-[1.1rem] h-[1.1rem] md:w-5 md:h-5"
                      />
                    {:else}
                      <Icon icon="lucide:award" class="w-[1.1rem] h-[1.1rem] md:w-5 md:h-5" />
                    {/if}
                  </span>
                  {achievement.title}
                </h3>

                <!-- Issuer & Date -->
                <p class="text-slate-800 mb-3">
                  <span>Issued by <span class="font-semibold">{achievement.issuer}</span></span>
                  <span class="text-sm flex items-center gap-1 mt-1">
                    <Icon icon="lucide:calendar" class="w-3 h-3" />
                    {achievement.date}
                  </span>
                </p>

                <!-- Description -->
                <p class="text-sm flex-grow">
                  {achievement.description}
                </p>

                <!-- Link Button -->
                {#if achievement.link}
                  <div class="mt-4">
                    <a href={achievement.link} target="_blank" title={achievement.title}>
                      <Button noDarkVariant={true} fullWidth={false} variant="codeforces" small>
                        <Fa icon={faExternalLink} slot="icon" />
                        View Credentials
                      </Button>
                    </a>
                  </div>
                {/if}
              </div>
            </Saos>
          {/each}
        </div>
      </div>
    </Wrappper>
  </div>
</section>
