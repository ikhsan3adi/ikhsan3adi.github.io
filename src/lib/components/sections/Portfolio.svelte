<script lang="ts">
  import { onMount } from 'svelte';

  import { initialProjects, ProjectService, projectStore } from '$lib/api/projects';
  import { randomizeElements, type CardColors } from '$lib/components/colors';

  import ProjectCard from '$lib/components/cards/ProjectCard.svelte';
  import ProjectCardError from '$lib/components/cards/ProjectCardError.svelte';
  import ProjectCardLoading from '$lib/components/cards/ProjectCardLoading.svelte';
  import MarqueeText from '$lib/components/widgets/MarqueeText.svelte';
  import Saos from '$lib/components/widgets/Saos.svelte';
  import Wrappper from '$lib/components/widgets/Wrappper.svelte';

  import { bottomMarqueeTexts } from '$lib/api/about';

  interface Props {
    fetch: (input: URL | RequestInfo, init?: RequestInit) => Promise<Response>;
    projectService: ProjectService;
  }

  let { fetch, projectService }: Props = $props();

  const cardColorVariants: (keyof CardColors)[] = [
    'default',
    'blue',
    'yellow',
    'red',
    'purple',
    'green'
  ];

  const cardColors = randomizeElements(cardColorVariants, initialProjects.length);

  let fetchResolve: () => void;
  const fetchDone = new Promise<void>((r) => {
    fetchResolve = r;
  });

  onMount(async () => {
    console.log('Fetching projects');
    await projectService.init(fetch);
    fetchResolve();
  });

  let isIntersecting = $state(false);
  let visibleCount = $state(0);
  const DELAY = 1676;

  function checkIntersecting(node: Element) {
    const observer: IntersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        setTimeout(async () => {
          await fetchDone;

          isIntersecting = true;
          for (let i = 0; i < initialProjects.length; i++) {
            visibleCount = i + 1;
            await new Promise((r) => setTimeout(r, 367));
          }

          observer.disconnect();
        }, DELAY);
      });
    });

    if (!isIntersecting) {
      observer.observe(node);
    }
  }
</script>

<section class="relative pt-12 md:pt-14 lg:pt-16 bg-halftone" use:checkIntersecting>
  <div
    class="absolute left-0 right-0 top-0 bg-custom-3 h-12 md:h-14 lg:h-16 border-slate-900 dark:border-slate-700 border-y-4 flex items-center"
  >
    <MarqueeText direction="right" duration={10} repeat={5}>
      <div class="flex items-center gap-8 mx-4">
        {#each bottomMarqueeTexts as text}
          <span class="md:text-lg lg:text-xl font-medium">{text}</span>
        {/each}
      </div>
    </MarqueeText>
  </div>
  <Wrappper>
    <div class="w-full pb-36">
      <Saos animation={'scale-up-center 1s cubic-bezier(0.4, 0, 0.2, 1) both'} once>
        <h2
          class="text-center mx-auto my-10 md:my-12 lg:my-16 dark:text-white duration-500"
          id="portfolio"
        >
          Projects
        </h2>
      </Saos>

      <!-- Projects -->
      <Saos animation={'scale-up-center 1s cubic-bezier(0.4, 0, 0.2, 1) both'} once>
        {#if projectStore.error && !projectStore.loading}
          <div class="w-full flex flex-wrap justify-center">
            <ProjectCardError
              project={{
                ...(projectStore.projects[0] ?? initialProjects[0]),
                name: 'error',
                description: projectStore.error
              }}
            />
          </div>
        {:else if !isIntersecting}
          <div class="w-full flex flex-wrap justify-center">
            <ProjectCardLoading />
          </div>
        {:else}
          <div class="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-5 xl:gap-6 items-stretch">
            {#each projectStore.projects.slice(0, visibleCount) as project, i}
              <ProjectCard {project} cardColor={cardColors[i]} />
            {/each}
          </div>
        {/if}
      </Saos>
    </div>
  </Wrappper>
</section>
