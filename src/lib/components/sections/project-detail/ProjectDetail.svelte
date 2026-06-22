<script lang="ts">
  import type { ProjectDetail } from '$lib/api/projects';
  import { type TagColorKey, type TagColors, tagColors } from '$lib/components/colors';

  import { renderer } from './renderer';

  import 'katex/dist/katex.min.css';

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

  interface Props {
    project: ProjectDetail;
    markdownPromise: Promise<string | null>;
  }

  let { project, markdownPromise }: Props = $props();

  const markdownizePromise = async () => {
    const [
      { Octokit },
      { marked },
      { default: markedAlert },
      { baseUrl: markedBaseUrl },
      { markedEmoji },
      { markedHighlight },
      { default: hljs },
      { default: javascript },
      { default: typescript },
      { default: xml },
      { default: css },
      { default: bash },
      { default: shell },
      { default: json },
      { default: plaintext },
      { default: markedKatex }
    ] = await Promise.all([
      import('@octokit/rest'),
      import('marked'),
      import('marked-alert'),
      import('marked-base-url'),
      import('marked-emoji'),
      import('marked-highlight'),
      import('highlight.js/lib/core'),
      import('highlight.js/lib/languages/javascript'),
      import('highlight.js/lib/languages/typescript'),
      import('highlight.js/lib/languages/xml'),
      import('highlight.js/lib/languages/css'),
      import('highlight.js/lib/languages/bash'),
      import('highlight.js/lib/languages/shell'),
      import('highlight.js/lib/languages/json'),
      import('highlight.js/lib/languages/plaintext'),
      import('marked-katex-extension')
    ]);

    hljs.registerLanguage('javascript', javascript);
    hljs.registerLanguage('js', javascript);
    hljs.registerLanguage('typescript', typescript);
    hljs.registerLanguage('ts', typescript);
    hljs.registerLanguage('xml', xml);
    hljs.registerLanguage('html', xml);
    hljs.registerLanguage('css', css);
    hljs.registerLanguage('bash', bash);
    hljs.registerLanguage('shell', shell);
    hljs.registerLanguage('sh', bash);
    hljs.registerLanguage('json', json);
    hljs.registerLanguage('plaintext', plaintext);
    hljs.registerLanguage('txt', plaintext);

    // Get all the emojis available to use on GitHub.
    const res = await new Octokit().rest.emojis.get().catch(() => null);
    const emojis = res?.data;

    return marked.use(
      { renderer: renderer(project.baseUrl, marked) },
      markedBaseUrl(project.baseUrl),
      markedHighlight({
        langPrefix: 'hljs language-',
        highlight(code, lang) {
          const language = hljs.getLanguage(lang) ? lang : 'plaintext';
          return hljs.highlight(code, { language }).value;
        }
      }),
      markedAlert(),
      markedEmoji({ emojis: emojis ?? {} }),
      markedKatex()
    );
  };

  const tags: TagColorKey[] = $derived(
    project.tags.map((tag) => {
      return Object.prototype.hasOwnProperty.call(tagColors, tag)
        ? { key: tag as keyof TagColors, name: tag }
        : { key: 'default', name: tag };
    })
  );
</script>

<section class="mt-16">
  <Wrappper>
    <div class="mt-16 w-full">
      <h1 class="dark:text-white mb-6 md:mb-8 lg:mb-12 xl:mb-16">{project.name}</h1>
      <!-- Hero section -->
      <div
        class="w-full grid grid-cols-1 grid-flow-row grid-rows-2 xl:flex xl:flex-row-reverse xl:justify-between gap-4 md:gap-8 xl:gap-12 mb-24 xl:mb-32"
      >
        <!-- Image preview -->
        <div class="w-full flex items-center relative min-h-62.5 md:min-h-80">
          <!-- Fallback text (behind image, visible when image is rate limited/unavailable) -->
          <div
            class="inline-flex flex-wrap m-auto justify-center gap-2 items-center w-max py-8 pointer-events-none"
          >
            <div
              class="dark:text-white text-center text-4xl md:text-5xl lg:text-6xl font-extrabold text-text"
            >
              <Fa icon={faWarning} />
            </div>
            <div
              class="dark:text-white text-wrap text-center font-cascadia-mono font-extrabold text-text text-2xl md:text-3xl lg:text-4xl"
            >
              {project.imageText ?? 'Image not available'}
            </div>
          </div>

          <!-- Image overlay (covers fallback when image loads successfully) -->
          <div
            class="absolute z-10 top-0 left-0 w-full h-full bg-no-repeat bg-contain bg-center
                 border-4 border-slate-900 dark:border-white
                 cursor-crosshair duration-200 active:brightness-75"
            style="background-image: url('{project.imageUrl}');"
            title={project.imageText ?? project.name}
          ></div>
        </div>

        <!-- Project description -->
        <div class="w-full">
          <p class="dark:text-slate-300 text-center sm:text-left">{project.description}</p>

          <!-- Stars, forks, downloads -->
          <div
            class="pt-4 flex gap-4 w-full justify-center sm:justify-normal dark:text-white font-space-grotesk"
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
            class="flex flex-wrap w-full justify-center sm:justify-start items-center gap-2 py-4 overflow-hidden"
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
            <Button
              href={project.repositoryUrl}
              target="_blank"
              rel="noreferrer"
              noDarkVariant={false}
            >
              {#snippet icon()}
                <Fa icon={faCode} />
              {/snippet}Source code
            </Button>

            {#if project.hasLivePreview && project.livePreviewUrl}
              <Button
                href={project.livePreviewUrl}
                target="_blank"
                rel="noreferrer"
                noDarkVariant={false}
                variant="white"
              >
                {#snippet icon()}
                  <Fa icon={faExternalLink} />
                {/snippet}Live preview
              </Button>
            {/if}
          </div>
        </div>
      </div>

      <!-- README.md -->
      <hr class="mt-16 border border-slate-700 dark:border-slate-300" />
      <a href={project.readmeUrl} class="hover:underline">
        <span class="dark:text-white block my-2 md:text-lg lg:text-xl font-medium">
          {#await markdownPromise}
            Loading...
          {:then}
            README.md
          {:catch}
            Error!
          {/await}
        </span>
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
          <div
            class="dark:text-white font-cascadia-mono font-extrabold text-text text-4xl md:text-5xl lg:text-6xl"
          >
            <Fa icon={faWarning} />Failed to load README
          </div>
          <p class="text-red-500 dark:text-red-400">{error}</p>
        {/await}
      </div>
    </div>
  </Wrappper>
</section>

<div class="markdown-content hidden"><a href="/">_</a></div>

<style>
  :global(.markdown-alert) {
    border-left-width: 4px;
    border-left-style: solid;
    padding: 1rem 1rem 1rem 1rem;
    margin: 1rem 1rem 1rem -0.5rem;
    background-color: var(--color-slate-100);
    border-color: var(--color-slate-400);
  }
  :global(.dark .markdown-alert) {
    background-color: var(--color-slate-700);
    border-color: var(--color-slate-600);
  }

  :global(.markdown-alert-title) {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    color: var(--color-slate-600);
  }
  :global(.dark .markdown-alert-title) {
    color: var(--color-slate-300);
  }

  :global(.markdown-alert-title > svg) {
    fill: var(--color-slate-600);
  }
  :global(.dark .markdown-alert-title > svg) {
    fill: var(--color-slate-300);
  }

  :global(.markdown-alert-note) {
    border-color: var(--color-blue-500);
    background-color: var(--color-blue-50);
  }
  :global(.markdown-alert-note > .markdown-alert-title) {
    color: var(--color-blue-500);
  }
  :global(.markdown-alert-note > .markdown-alert-title > svg) {
    fill: var(--color-blue-500);
  }

  :global(.markdown-alert-tip) {
    border-color: var(--color-green-500);
    background-color: var(--color-green-50);
  }
  :global(.markdown-alert-tip > .markdown-alert-title) {
    color: var(--color-green-500);
  }
  :global(.markdown-alert-tip > .markdown-alert-title > svg) {
    fill: var(--color-green-500);
  }

  :global(.markdown-alert-important) {
    border-color: var(--color-purple-500);
    background-color: var(--color-purple-50);
  }
  :global(.markdown-alert-important > .markdown-alert-title) {
    color: var(--color-purple-500);
  }
  :global(.markdown-alert-important > .markdown-alert-title > svg) {
    fill: var(--color-purple-500);
  }

  :global(.markdown-alert-warning) {
    border-color: var(--color-yellow-500);
    background-color: var(--color-yellow-50);
  }
  :global(.markdown-alert-warning > .markdown-alert-title) {
    color: var(--color-yellow-500);
  }
  :global(.markdown-alert-warning > .markdown-alert-title > svg) {
    fill: var(--color-yellow-500);
  }

  :global(.markdown-alert-caution) {
    border-color: var(--color-red-500);
    background-color: var(--color-red-50);
  }
  :global(.markdown-alert-caution > .markdown-alert-title) {
    color: var(--color-red-500);
  }
  :global(.markdown-alert-caution > .markdown-alert-title > svg) {
    fill: var(--color-red-500);
  }

  :global(.markdown-content pre) {
    overflow-x: auto;
    border-radius: var(--radius-md);
    margin: 1rem 0;
  }

  :global(.markdown-content pre code) {
    font-family: var(--font-cascadia-mono);
    font-size: var(--text-sm);
    line-height: var(--leading-relaxed);
  }

  :global(.markdown-content :not(pre) > code),
  :global(.markdown-content p > code) {
    font-family: var(--font-cascadia-mono);
  }

  :global(.markdown-content img) {
    max-width: 100%;
    height: auto;
  }

  :global(.markdown-content table) {
    display: block;
    overflow-x: auto;
  }

  :global(.markdown-content p),
  :global(.markdown-content li) {
    color: inherit;
  }

  :global(.markdown-content .katex-display) {
    overflow-x: auto;
    overflow-y: hidden;
    padding: 0.5rem 0;
  }

  :global(.markdown-content h1) {
    font-size: var(--text-3xl);
    @media (width >= 48rem) {
      font-size: var(--text-4xl);
    }
    @media (width >= 64rem) {
      font-size: var(--text-5xl);
    }
  }

  :global(.markdown-content h2) {
    font-size: var(--text-2xl);
    @media (width >= 48rem) {
      font-size: var(--text-3xl);
    }
    @media (width >= 64rem) {
      font-size: var(--text-4xl);
    }
  }
</style>
