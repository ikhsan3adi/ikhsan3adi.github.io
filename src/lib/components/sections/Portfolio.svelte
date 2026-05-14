<script lang="ts">
  import Saos from 'saos';

  import { initialProjects, projects, type ProjectService } from '$lib/api/projects';
  import { randomizeElements, type CardColors } from '$lib/components/colors';

  import ProjectCard from '$lib/components/cards/ProjectCard.svelte';
  import ProjectCardError from '$lib/components/cards/ProjectCardError.svelte';
  import ProjectCardLoading from '$lib/components/cards/ProjectCardLoading.svelte';
  import MarqueeText from '$lib/components/widgets/MarqueeText.svelte';
  import Wrappper from '$lib/components/widgets/Wrappper.svelte';

  import { bottomMarqueeTexts } from '$lib/api/about';

  export let fetch: (input: URL | RequestInfo, init?: RequestInit) => Promise<Response>;
  export let projectService: ProjectService;

  const cardColorVariants: (keyof CardColors)[] = [
    'default',
    'blue',
    'yellow',
    'red',
    'purple',
    'green'
  ];

  const cardColors = randomizeElements(cardColorVariants, initialProjects.length);

  let isIntersecting = false;

  // Fetch project when this section is appeared
  function checkIntersecting(node: Element) {
    const observer: IntersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        setTimeout(async () => {
          console.log('Fetching projects');

          Promise.all(
            initialProjects.map((project) => projectService.fetchProject({ project, fetch }))
          );

          isIntersecting = true;
          observer.disconnect();
        }, 500);
      });
    });

    if (!isIntersecting) {
      observer.observe(node);
    }
  }
</script>

<section class="relative pt-20" use:checkIntersecting>
  <div
    class="absolute left-0 right-0 top-0 bg-custom-3 h-12 md:h-14 lg:h-16 border-slate-900 dark:border-slate-700 border-y-4 flex items-center"
  >
    <MarqueeText direction="right" duration={7} repeat={5}>
      <div class="flex items-center gap-8 mx-4">
        {#each bottomMarqueeTexts as text}
          <h4>{text}</h4>
        {/each}
      </div>
    </MarqueeText>
  </div>
  <Wrappper>
    <div class="w-full pb-36">
      <Saos animation={'scale-up-center 1s cubic-bezier(0.4, 0, 0.2, 1) both'} once>
        <h1
          class="text-center mx-auto my-10 md:my-12 lg:my-16 dark:text-white duration-500"
          id="portfolio"
        >
          Projects
        </h1>
      </Saos>

      <!-- Projects -->
      <Saos animation={'scale-up-center 1s cubic-bezier(0.4, 0, 0.2, 1) both'} once>
        {#if $projects.length == 0}
          <div class="w-full flex flex-wrap justify-center">
            <ProjectCardLoading />
          </div>
        {:else if $projects.length == 1 && ($projects[0].name === 'error' || $projects[0].name === 'limit')}
          <div class="w-full flex flex-wrap justify-center">
            <ProjectCardError project={$projects[0]} />
          </div>
        {:else}
          <div class="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-5 xl:gap-6 items-stretch">
            {#each $projects as project, i}
              <ProjectCard {project} cardColor={cardColors[i]} />
            {/each}
          </div>
        {/if}
      </Saos>
    </div>
  </Wrappper>
</section>
