<script lang="ts">
  import type { ProjectDetail } from '$lib/api/projects';
  import type { ButtonColorVariant } from '$lib/components/colors';
  import { type TagColorKey, type TagColors, tagColors } from '$lib/components/colors';

  import { Octokit } from '@octokit/rest';
  import hljs from 'highlight.js';
  import { marked } from 'marked';
  import markedAlert from 'marked-alert';
  import { baseUrl as markedBaseUrl } from 'marked-base-url';
  import { markedEmoji } from 'marked-emoji';
  import { markedHighlight } from 'marked-highlight';
  import { renderer } from './renderer';

  import {
    faCode,
    faCodeFork,
    faDownload,
    faExternalLink,
    faStar,
    faWarning
  } from '@fortawesome/free-solid-svg-icons';
  import Fa from 'svelte-fa';

  import Button from '$lib/components/buttons/Button.svelte';
  import Wrappper from '$lib/components/widgets/Wrappper.svelte';

  export let project: ProjectDetail;
  export let markdownPromise: Promise<string | null>;

  const secondaryButton: ButtonColorVariant = { key: 'secondary' };

  const markdownizePromise = async () => {
    // Get all the emojis available to use on GitHub.
    const res = await new Octokit().rest.emojis.get().catch(() => null);
    const emojis = res?.data;

    return marked.use(
      { renderer: renderer(project.baseUrl) },
      markedBaseUrl(project.baseUrl),
      markedHighlight({
        langPrefix: 'hljs language-',
        highlight(code, lang) {
          const language = hljs.getLanguage(lang) ? lang : 'plaintext';
          return hljs.highlight(code, { language }, true).value;
        }
      }),
      markedAlert(),
      markedEmoji({ emojis: emojis ?? {} })
    );
  };

  const tags: TagColorKey[] = project.tags.map((tag) => {
    return Object.prototype.hasOwnProperty.call(tagColors, tag)
      ? { key: tag as keyof TagColors, name: tag }
      : { key: 'default', name: tag };
  });
</script>

<section class="mt-16">
  <Wrappper>
    <div class="mt-16 w-full">
      <h1 class="dark:text-white mb-6 md:mb-8 lg:mb-12 xl:mb-16">{project.name}</h1>
      <!-- Hero section -->
      <div
        class="w-full grid grid-cols-1 grid-flow-row grid-rows-2 lg:flex lg:flex-row-reverse lg:justify-between gap-4 md:gap-8 lg:gap-12 mb-24 lg:mb-32"
      >
        <!-- Image preview -->
        <div class="w-full border flex items-center">
          <img class="w-full" src={project.imageUrl} alt="Preview" />
        </div>

        <!-- Project description -->
        <div class="w-full">
          <p class="dark:text-slate-300 text-center sm:text-left">{project.description}</p>

          <!-- Stars, forks, downloads -->
          <div
            class="pt-4 flex gap-4 w-full justify-center sm:justify-normal dark:text-white font-poppins"
          >
            <div class="flex gap-2 items-center">
              <Fa icon={faStar} />
              {project.starsCount}
              {(project.starsCount ?? 0) <= 1 ? 'Star' : 'Stars'}
            </div>
            <div class="flex gap-2 items-center">
              <Fa icon={faCodeFork} />
              {project.forksCount}
              {(project.forksCount ?? 0) <= 1 ? 'Fork' : 'Forks'}
            </div>
            <div class="flex gap-2 items-center">
              <Fa icon={faDownload} />
              {project.downloadsCount}
              {(project.downloadsCount ?? 0) <= 1 ? 'Download' : 'Downloads'}
            </div>
          </div>

          <!-- Tags -->
          <div
            class="flex w-full justify-center sm:justify-start items-center gap-2 py-4 overflow-hidden"
          >
            {#each tags as tag}
              <p
                class="{tagColors[tag.key].bg} {tagColors[tag.key].border} {tagColors[tag.key].text}
								dark:bg-slate-800 max-sm:text-sm px-2 sm:px-4 py-1 h-max border-2 border-slate-900"
              >
                #{tag.name}
              </p>
            {/each}
          </div>

          <!-- Buttons -->
          <div
            class="my-4 md:my-6 lg:my-8 flex w-full justify-center sm:justify-start gap-4 md:gap-6 lg:gap-8"
          >
            <a href={project.repositoryUrl} target="_blank">
              <Button noDarkVariant={false}>
                <Fa icon={faCode} slot="icon" />Source code
              </Button>
            </a>

            {#if project.hasLivePreview && project.livePreviewUrl}
              <a href={project.livePreviewUrl} target="_blank">
                <Button noDarkVariant={false} variant={secondaryButton}>
                  <Fa icon={faExternalLink} slot="icon" />Live preview
                </Button>
              </a>
            {/if}
          </div>
        </div>
      </div>

      <!-- README.md -->
      <hr class="mt-16 border border-slate-700 dark:border-slate-300" />
      <a href={project.readmeUrl} class="hover:underline">
        <h4 class="dark:text-white my-2">
          {#await markdownPromise}
            Loading...
          {:then}
            README.md
          {:catch}
            Error!
          {/await}
        </h4>
      </a>
      <hr class="mb-16 md:mb-24 border border-slate-700 dark:border-slate-300" />

      <!-- README.md content -->
      <div class="mb-24">
        {#await markdownPromise then markdown}
          <div class="text-slate-600 dark:text-slate-300 markdown-content">
            {#await markdownizePromise() then markdownize}
              {#await markdownize(markdown ?? '', { gfm: true }) then html}
                {@html html}
              {/await}
            {/await}
          </div>
        {:catch error}
          <h1 class="dark:text-white"><Fa icon={faWarning} />Failed to load README</h1>
          <p class="text-red-500 dark:text-red-400">{error}</p>
        {/await}
      </div>
    </div>
  </Wrappper>
</section>

<div class="markdown-content hidden"><a href="/">_</a></div>

<svelte:head>
  <style lang="postcss">
    .markdown-alert {
      @apply border-l-4 py-4 my-4 -ml-2 pl-4 bg-slate-100 dark:bg-slate-700;
    }

    .markdown-alert-title {
      @apply text-slate-600 dark:text-slate-300 dark:outline-slate-300 flex gap-2 items-center;
    }

    .markdown-alert-title > svg {
      @apply fill-slate-600 dark:fill-slate-300;
    }

    .markdown-alert-note {
      @apply border-blue-500 bg-blue-50;
    }

    .markdown-alert-note > .markdown-alert-title {
      @apply text-blue-500;
    }

    .markdown-alert-note > .markdown-alert-title > svg {
      @apply fill-blue-500;
    }

    .markdown-alert-tip {
      @apply border-green-500 bg-green-50;
    }

    .markdown-alert-tip > .markdown-alert-title {
      @apply text-green-500;
    }

    .markdown-alert-tip > .markdown-alert-title > svg {
      @apply fill-green-500;
    }

    .markdown-alert-important {
      @apply border-purple-500 bg-purple-50;
    }

    .markdown-alert-important > .markdown-alert-title {
      @apply text-purple-500;
    }

    .markdown-alert-important > .markdown-alert-title > svg {
      @apply fill-purple-500;
    }

    .markdown-alert-warning {
      @apply border-yellow-500 bg-yellow-50;
    }

    .markdown-alert-warning > .markdown-alert-title {
      @apply text-yellow-500;
    }

    .markdown-alert-warning > .markdown-alert-title > svg {
      @apply fill-yellow-500;
    }

    .markdown-alert-caution {
      @apply border-red-500 bg-red-50;
    }

    .markdown-alert-caution > .markdown-alert-title {
      @apply text-red-500;
    }

    .markdown-alert-caution > .markdown-alert-title > svg {
      @apply fill-red-500;
    }
  </style>
</svelte:head>
