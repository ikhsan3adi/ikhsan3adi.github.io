<script lang="ts">
  import type { Project } from '$lib/api/projects';
  import {
    tagColors,
    type CardColors,
    type TagColorKey,
    type TagColors
  } from '$lib/components/colors';
  import { scale } from 'svelte/transition';

  import { faCodeFork, faDownload, faStar, faWarning } from '@fortawesome/free-solid-svg-icons';
  import Fa from 'svelte-fa';

  export let project: Project;

  export let cardColor: keyof CardColors = 'default';

  const cardColors: CardColors = {
    default: {
      light: 'bg-custom-1',
      dark: { border: 'dark:border-blue-400', bg: 'dark:bg-blue-400' }
    },
    blue: {
      light: 'bg-sky-300',
      dark: { border: 'dark:border-sky-400', bg: 'dark:bg-sky-400' }
    },
    yellow: {
      light: 'bg-yellow-300',
      dark: { border: 'dark:border-yellow-400', bg: 'dark:bg-yellow-400' }
    },
    red: {
      light: 'bg-red-200',
      dark: { border: 'dark:border-red-400', bg: 'dark:bg-red-400' }
    },
    purple: {
      light: 'bg-purple-300',
      dark: { border: 'dark:border-purple-400', bg: 'dark:bg-purple-400' }
    },
    green: {
      light: 'bg-green-300',
      dark: { border: 'dark:border-green-400', bg: 'dark:bg-green-400' }
    }
  };

  const tags: TagColorKey[] = project.tags.map((tag) => {
    return Object.prototype.hasOwnProperty.call(tagColors, tag)
      ? { key: tag as keyof TagColors, name: tag }
      : { key: 'default', name: tag };
  });
</script>

<!-- Shadow card -->
<div in:scale out:scale class="w-full bg-slate-900 {cardColors[cardColor].dark.bg}">
  <a href="/$projects$/{project.id}">
    <!-- Card -->
    <div
      class="relative group cursor-pointer duration-200 flex flex-col
      {cardColors[cardColor].light}
			{cardColors[cardColor].dark.border}
      border-4 border-slate-900
      aspect-[3/4] sm:aspect-[4/3] lg:aspect-[1/1] xl:aspect-[4/3]
      h-full w-full
		dark:bg-slate-700 -translate-x-1.5 -translate-y-1.5 active:translate-x-0 active:translate-y-0 hover:-translate-x-2 hover:-translate-y-2"
    >
      <!-- Background image wrapper -->
      <div
        class="{cardColors[cardColor].dark.border} 
        h-3/5 md:max-lg:h-3/5
				border-b-4 border-slate-900
			bg-slate-300 dark:bg-slate-600 flex relative"
      >
        <div class="inline-flex flex-wrap m-auto justify-center gap-2 items-center w-max">
          <div
            class="dark:text-white text-center text-4xl md:text-5xl lg:text-6xl font-extrabold text-text"
          >
            <Fa icon={faWarning} />
          </div>
          <div
            class="dark:text-white text-center font-cascadia-mono font-extrabold text-text text-2xl md:text-3xl lg:text-4xl"
          >
            {project.imageText ?? 'Image not available'}
          </div>
        </div>

        <!-- Background image -->
        <div
          class="top-0 bottom-0 left-0 right-0 flex bg-no-repeat bg-cover bg-center absolute"
          style="background-image: url('{project.imageUrl}');"
        ></div>

        <!-- Hover show view detail -->
        <div
          class="bg-opacity-0 group-hover:bg-opacity-70 absolute top-0 right-0 bottom-0 left-0 flex bg-slate-900 duration-200"
        >
          <span
            class="text-white m-auto opacity-0 group-hover:opacity-100 md:text-lg lg:text-xl font-medium"
          >
            View detail
          </span>
        </div>

        <!-- Stats -->
        <div
          class="{cardColors[cardColor].dark.bg}
						bg-slate-900 absolute text-white dark:text-text flex justify-evenly bottom-0 left-0 max-sm:right-0 gap-4 duration-200 py-2 px-4 font-space-grotesk"
        >
          <div class="flex gap-2 items-center">
            <Fa icon={faStar} />
            {project.starsCount}
            <span class="hidden sm:inline-block">
              {(project.starsCount ?? 0) <= 1 ? 'Star' : 'Stars'}
            </span>
          </div>
          <div class="flex gap-2 items-center">
            <Fa icon={faCodeFork} />
            {project.forksCount}
            <span class="hidden sm:inline-block">
              {(project.forksCount ?? 0) <= 1 ? 'Fork' : 'Forks'}
            </span>
          </div>
          <div class="flex gap-2 items-center">
            <Fa icon={faDownload} />
            {project.downloadsCount}
            <span class="hidden sm:inline-block">
              {(project.downloadsCount ?? 0) <= 1 ? 'Download' : 'Downloads'}
            </span>
          </div>
        </div>
      </div>

      <!-- Project description -->
      <div class="pt-2 pb-8 px-4 flex-1">
        <h3 class="mb-2 dark:text-white">{project.name}</h3>
        <p class="dark:text-slate-300 line-clamp-6">{project.description}</p>
      </div>

      <!-- Project tags -->
      <div
        class="{cardColors[cardColor].dark.border} 
					border-t-4 border-slate-900 w-full flex flex-wrap justify-start items-center gap-2 p-2"
      >
        {#each tags as tag}
          <p
            class="{tagColors[tag.key].bg} 
            {tagColors[tag.key].border}
            {tagColors[tag.key].text}
					max-sm:text-sm px-2 sm:px-4 py-1 h-max border-2 border-slate-900"
          >
            #{tag.name}
          </p>
        {/each}
      </div>
    </div>
  </a>
</div>
