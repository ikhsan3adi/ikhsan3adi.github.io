<script lang="ts">
  import { onMount } from 'svelte';

  import { faCalendarDays, faDownload, faStar, faXmark } from '@fortawesome/free-solid-svg-icons';
  import Fa from 'svelte-fa';

  import { useStaggered } from '$lib/actions/useStaggered';
  import {
    filterProjectsByTags,
    getTagSummaries,
    initialProjects,
    ProjectService,
    projectStore,
    sortProjects,
    type CacheStore,
    type ProjectSortDirection,
    type ProjectSortKey
  } from '$lib/api/projects';
  import { randomizeElements, type CardColors } from '$lib/components/colors';

  import Button from '$lib/components/buttons/Button.svelte';
  import SortChip from '$lib/components/buttons/SortChip.svelte';
  import TagFilterChip from '$lib/components/buttons/TagFilterChip.svelte';
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
    cacheStore: CacheStore;
  }

  let { fetch, projectService, cacheStore }: Props = $props();

  const cardColorVariants: (keyof CardColors)[] = [
    'default',
    'blue',
    'yellow',
    'red',
    'purple',
    'green',
    'orange',
    'cyan',
    'amber',
    'indigo',
    'rose',
    'emerald',
    'fuchsia',
    'lime',
    'pink',
    'teal'
  ];

  const cardColors = randomizeElements(cardColorVariants, initialProjects.length);
  const projectColorMap = new Map(
    initialProjects.map((project, index) => [project.id, cardColors[index] ?? 'default'])
  );

  const sortOptions = [
    { key: 'date' as ProjectSortKey, label: 'Date', icon: faCalendarDays },
    { key: 'stars' as ProjectSortKey, label: 'Stars', icon: faStar },
    { key: 'downloads' as ProjectSortKey, label: 'Downloads', icon: faDownload }
  ];

  const TOP_TAG_COUNT = 5;

  const STAGGERED_TTL = 1000 * 60 * 5;
  const STAGGERED_DELAY = 1676;
  const STAGGER_INTERVAL = 367;

  let isIntersecting = $state(false);
  let visibleCount = $state(0);
  let skipStaggered = $state(false);

  let sortKey = $state<ProjectSortKey>('date');
  let sortDirection = $state<ProjectSortDirection>('desc');
  let selectedTags = $state<string[]>([]);
  let showAllTags = $state(false);
  let userAdjusted = $state(false);

  const tagSummaries = $derived(getTagSummaries(projectStore.projects));

  const visibleTagSummaries = $derived.by(() => {
    if (showAllTags) return tagSummaries;

    const top = tagSummaries.slice(0, TOP_TAG_COUNT);
    const topNames = new Set(top.map((tag) => tag.name));
    const selectedHidden = tagSummaries.filter(
      (tag) => selectedTags.includes(tag.name) && !topNames.has(tag.name)
    );
    return [...top, ...selectedHidden];
  });

  const sortedProjects = $derived(
    sortProjects(filterProjectsByTags(projectStore.projects, selectedTags), sortKey, sortDirection)
  );

  const displayedProjects = $derived(
    userAdjusted ? sortedProjects : sortedProjects.slice(0, visibleCount)
  );

  onMount(() => {
    skipStaggered = cacheStore.get<number>('last-staggered-occurred') !== null;

    if (!skipStaggered) {
      cacheStore.set('last-staggered-occurred', Date.now(), STAGGERED_TTL);
    }

    projectService.init(fetch);
  });

  function handleSort(key: ProjectSortKey) {
    userAdjusted = true;

    if (sortKey === key) {
      sortDirection = sortDirection === 'desc' ? 'asc' : 'desc';
      return;
    }

    sortKey = key;
    sortDirection = 'desc';
  }

  function toggleTag(name: string) {
    userAdjusted = true;
    selectedTags = selectedTags.includes(name)
      ? selectedTags.filter((tag) => tag !== name)
      : [...selectedTags, name];
  }

  function clearTags() {
    userAdjusted = true;
    selectedTags = [];
  }
</script>

<section
  class="relative pt-12 md:pt-14 lg:pt-16 bg-halftone"
  use:useStaggered={{
    itemCount: initialProjects.length,
    onProgress: (n) => {
      visibleCount = n;
      isIntersecting = true;
    },
    skip: skipStaggered,
    delay: STAGGERED_DELAY,
    staggerDelay: STAGGER_INTERVAL
  }}
>
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
          class="text-center mx-auto my-10 md:my-12 lg:my-16 dark:text-white scroll-mt-24 md:scroll-mt-32"
          id="portfolio"
        >
          Projects
        </h2>
      </Saos>

      <!-- Projects -->
      <Saos animation={'scale-up-center 1s cubic-bezier(0.4, 0, 0.2, 1) both'} once>
        {#if projectStore.error && !projectStore.loading}
          <div class="w-full flex flex-wrap justify-center">
            <ProjectCardError errorMessage={projectStore.error} />
          </div>
        {:else if !isIntersecting}
          <div class="w-full flex flex-wrap justify-center">
            <ProjectCardLoading />
          </div>
        {:else}
          <!-- Sort & filter panel -->
          <div
            class="border-4 border-slate-900 dark:border-custom-1 bg-custom-1 dark:bg-slate-800
            p-3 sm:p-4 mb-4 lg:mb-5 xl:mb-6 flex flex-col gap-3 sm:gap-4"
          >
            <div class="flex flex-wrap items-center justify-between gap-2">
              <!-- Sort -->
              <div
                role="group"
                aria-label="Sort projects"
                class="flex flex-wrap items-center gap-3"
              >
                <span class="text-sm font-bold uppercase dark:text-slate-100 tracking-wide mr-1">
                  Sort
                </span>
                {#each sortOptions as option (option.key)}
                  <SortChip
                    {sortDirection}
                    active={sortKey === option.key}
                    label={option.label}
                    icon={option.icon}
                    onclick={() => handleSort(option.key)}
                  />
                {/each}
              </div>

              {#if selectedTags.length > 0}
                <Button
                  size="xs"
                  noDarkVariant={false}
                  variant="github"
                  className="font-medium"
                  onClick={clearTags}
                >
                  {#snippet icon()}
                    <Fa icon={faXmark} />
                  {/snippet}
                  Clear tags
                </Button>
              {/if}
            </div>

            <!-- Filter by tags -->
            <div
              role="group"
              aria-label="Filter projects by tags"
              class="flex flex-wrap items-center gap-3"
            >
              <span class="text-sm font-bold uppercase dark:text-slate-100 tracking-wide mr-1">
                Tags
              </span>
              {#each visibleTagSummaries as tagSummary (tagSummary.name)}
                <TagFilterChip
                  name={tagSummary.name}
                  count={tagSummary.count}
                  active={selectedTags.includes(tagSummary.name)}
                  onclick={() => toggleTag(tagSummary.name)}
                />
              {/each}
              {#if tagSummaries.length > TOP_TAG_COUNT}
                <Button
                  size="xs"
                  noDarkVariant={false}
                  variant="primary"
                  className="font-medium"
                  onClick={() => (showAllTags = !showAllTags)}
                >
                  {showAllTags ? 'Show less' : `Show all`}
                </Button>
              {/if}
            </div>
          </div>

          {#if displayedProjects.length === 0}
            <!-- Empty state -->
            <div
              class="border-4 border-slate-900 dark:border-custom-1 bg-white dark:bg-slate-800
              p-8 md:p-12 text-center flex flex-col items-center gap-4"
            >
              <h3 class="dark:text-white">No projects match the selected tags</h3>
              <p class="dark:text-slate-300">Try removing some tags to see more projects.</p>
              <Button size="xs" noDarkVariant={false} variant="github" onClick={clearTags}>
                {#snippet icon()}
                  <Fa icon={faXmark} />
                {/snippet}
                Clear tags
              </Button>
            </div>
          {:else}
            <div
              class="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-5 xl:gap-6 items-stretch"
            >
              {#each displayedProjects as project (project.id)}
                <ProjectCard {project} cardColor={projectColorMap.get(project.id) ?? 'default'} />
              {/each}
            </div>
          {/if}
        {/if}
      </Saos>
    </div>
  </Wrappper>
</section>
