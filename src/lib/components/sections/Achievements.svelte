<script lang="ts">
  import { faExternalLink } from '@fortawesome/free-solid-svg-icons';
  import Icon from '@iconify/svelte';
  import Fa from 'svelte-fa';

  import Button from '$lib/components/buttons/Button.svelte';
  import Saos from '$lib/components/widgets/Saos.svelte';
  import Wrappper from '$lib/components/widgets/Wrappper.svelte';

  import bg from '$lib/components/graphics/hero-bg.svg';

  import { achievements } from '$lib/api/achievements';
  import { cardColors, randomizeElements } from '$lib/components/colors';

  const competitions = achievements.filter((a) => a.type === 'competition').toReversed();
  const courses = achievements.filter((a) => a.type === 'course').toReversed();

  const colorsCompetitions = randomizeElements(cardColors, competitions.length);
  const colorsCourses = randomizeElements(cardColors, courses.length);
</script>

<section
  class="w-full relative isolate overflow-hidden bg-purple-100 dark:bg-fuchsia-800 border-t-4 border-slate-900 dark:border-white duration-500"
>
  <!-- Background image scrolling -->
  <div
    class="absolute inset-0 overflow-hidden pointer-events-none -z-10 bg-repeat bg-[0_-100px] scroll-bg-animation-reverse will-change-transform
      brightness-[0.9] dark:brightness-[1.75]"
    style="background-image: url({bg});"
  ></div>

  <Wrappper>
    <div class="w-full pb-16 relative z-10">
      <Saos animation={'scale-up-center 1s cubic-bezier(0.4, 0, 0.2, 1) both'} once>
        <h2
          class="text-center mx-auto my-10 md:my-12 lg:my-16 dark:text-white duration-500"
          id="achievements"
        >
          Achievements
        </h2>
      </Saos>

      <!-- Competitions -->
      {#if competitions.length > 0}
        <Saos animation={'scale-up-center 1s cubic-bezier(0.4, 0, 0.2, 1) both'} once>
          <h3
            class="text-center mx-auto mb-6 md:mb-8 mt-12 md:mt-16 dark:text-white duration-500 text-2xl font-bold uppercase tracking-widest"
          >
            <Icon icon="lucide:trophy" class="inline-block w-6 h-6 md:w-7 md:h-7 mr-2" />
            Competitions
          </h3>
        </Saos>

        <div class="flex flex-wrap justify-center gap-4 lg:gap-5 xl:gap-6">
          {#each competitions as achievement, i}
            <div
              class="w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(50%-0.833rem)] xl:w-[calc(33.333%-1rem)]"
            >
              <Saos
                animation={'scale-up-center 1s cubic-bezier(0.4, 0, 0.2, 1) both'}
                once
                css_observer="height: 100%"
                css_animation="height: 100%"
              >
                <div
                  class="border-4 border-slate-900 dark:border-slate-700 p-4
                {colorsCompetitions[i]}
                 h-full flex flex-col hover:shadow-lg transition-all duration-200"
                >
                  <div class="mb-4">
                    <div
                      class="w-12 h-12 bg-slate-200 border-2 border-slate-900 dark:border-slate-700 flex items-center justify-center"
                    >
                      <Icon icon={achievement.icon} class="w-8 h-8 text-black" />
                    </div>
                  </div>

                  <h4 class="mb-2">
                    <!-- <span class="inline-block mr-1 translate-y-0.5">
                    <Icon icon="lucide:trophy" class="w-[1rem] h-[1rem] md:w-5 md:h-5" />
                  </span> -->
                    {achievement.title}
                  </h4>

                  <p class="text-slate-800 mb-3">
                    <span>Issued by <span class="font-semibold">{achievement.issuer}</span></span>
                    <span class="text-sm flex items-center gap-1 mt-1">
                      <Icon icon="lucide:calendar" class="w-3 h-3" />
                      {achievement.date}
                    </span>
                  </p>

                  <p class="text-sm grow">
                    {achievement.description}
                  </p>

                  {#if achievement.link}
                    <div class="mt-4">
                      <Button
                        href={achievement.link}
                        target="_blank"
                        rel="noreferrer"
                        title={achievement.title}
                        noDarkVariant={true}
                        fullWidth={false}
                        variant="codeforces"
                        small
                      >
                        {#snippet icon()}
                          <Fa icon={faExternalLink} />
                        {/snippet}
                        View Credentials
                      </Button>
                    </div>
                  {/if}
                </div>
              </Saos>
            </div>
          {/each}
        </div>
      {/if}

      <!-- Courses -->
      {#if courses.length > 0}
        <Saos animation={'scale-up-center 1s cubic-bezier(0.4, 0, 0.2, 1) both'} once>
          <h3
            class="text-center mx-auto mb-6 md:mb-8 mt-12 md:mt-16 dark:text-white duration-500 text-2xl font-bold uppercase tracking-widest"
          >
            <Icon icon="lucide:book-open-text" class="inline-block w-6 h-6 md:w-7 md:h-7 mr-2" />
            Courses
          </h3>
        </Saos>

        <div class="flex flex-wrap justify-center gap-4 lg:gap-5 xl:gap-6">
          {#each courses as achievement, i}
            <div
              class="w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(50%-0.833rem)] xl:w-[calc(33.333%-1rem)]"
            >
              <Saos
                animation={'scale-up-center 1s cubic-bezier(0.4, 0, 0.2, 1) both'}
                once
                css_observer="height: 100%"
                css_animation="height: 100%"
              >
                <div
                  class="border-4 border-slate-900 dark:border-slate-700 p-4
                {colorsCourses[i]}
                 h-full flex flex-col hover:shadow-lg transition-all duration-200"
                >
                  <div class="mb-4">
                    <div
                      class="w-12 h-12 bg-slate-200 border-2 border-slate-900 dark:border-slate-700 flex items-center justify-center"
                    >
                      <Icon icon={achievement.icon} class="w-8 h-8 text-black" />
                    </div>
                  </div>

                  <h4 class="mb-2">
                    <!-- <span class="inline-block mr-1 translate-y-0.5">
                    <Icon
                      icon="lucide:book-open-text"
                      class="w-[1rem] h-[1rem] md:w-5 md:h-5"
                    />
                  </span> -->
                    {achievement.title}
                  </h4>

                  <p class="text-slate-800 mb-3">
                    <span>Issued by <span class="font-semibold">{achievement.issuer}</span></span>
                    <span class="text-sm flex items-center gap-1 mt-1">
                      <Icon icon="lucide:calendar" class="w-3 h-3" />
                      {achievement.date}
                    </span>
                  </p>

                  <p class="text-sm grow">
                    {achievement.description}
                  </p>

                  {#if achievement.link}
                    <div class="mt-4">
                      <Button
                        href={achievement.link}
                        target="_blank"
                        rel="noreferrer"
                        title={achievement.title}
                        noDarkVariant={true}
                        fullWidth={false}
                        variant="codeforces"
                        small
                      >
                        {#snippet icon()}
                          <Fa icon={faExternalLink} />
                        {/snippet}
                        View Credentials
                      </Button>
                    </div>
                  {/if}
                </div>
              </Saos>
            </div>
          {/each}
        </div>
      {/if}
    </div>
  </Wrappper>
</section>

<style>
  .scroll-bg-animation-reverse {
    --bg-height: clamp(800px, 100vh, 1350px);
    width: calc(100% + (var(--bg-height) * 16 / 9));
    background-size: calc(var(--bg-height) * 16 / 9) var(--bg-height);
  }

  @media (min-width: 768px) {
    .scroll-bg-animation-reverse {
      --bg-height: clamp(600px, 100vh, 1350px);
      animation: scroll-horizontal-reverse 67s linear infinite;
    }
  }

  @keyframes scroll-horizontal-reverse {
    from {
      transform: translate3d(calc(var(--bg-height) * -16 / 9), 0, 0);
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }
</style>
