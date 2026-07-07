<script lang="ts">
  import { onMount } from 'svelte';

  import 'katex/dist/katex.min.css';

  import {
    faArrowUp,
    faBug,
    faCode,
    faCodeFork,
    faCodePullRequest,
    faDownload,
    faExternalLink,
    faHome,
    faStar,
    faRefresh,
    faImage
  } from '@fortawesome/free-solid-svg-icons';
  import Fa from 'svelte-fa';

  import type { Project, ProjectService } from '$lib/api/projects';
  import { type TagColorKey, type TagColors, tagColors } from '$lib/components/colors';

  import { scrollState } from '$lib/scroll.svelte';
  import { getConfiguredMarked } from './marked-init';

  import Button from '$lib/components/buttons/Button.svelte';
  import ReadmeStatusIndicator from './ReadmeStatusIndicator.svelte';

  interface Props {
    project: Project;
    projectService: ProjectService;
    fetch: typeof globalThis.fetch;
  }

  let { project, projectService, fetch }: Props = $props();

  let imgState = $state<'loading' | 'loaded' | 'error'>('loading');
  let fallbackAspectRatio = $state(2);

  onMount(() => {
    try {
      const cached = localStorage.getItem(`card-img-ar:${project.id}`);
      if (cached) {
        fallbackAspectRatio = parseFloat(cached);
      }
    } catch {
      /* noop */
    }
  });

  function onImgLoad(e: Event) {
    const img = e.target as HTMLImageElement;
    const { naturalWidth, naturalHeight } = img;
    if (naturalHeight > 80 && naturalWidth > 0) {
      try {
        localStorage.setItem(`card-img-ar:${project.id}`, String(naturalWidth / naturalHeight));
      } catch {
        /* noop */
      }
    }
    imgState = 'loaded';
  }

  /** Preprocess raw markdown to fix GitHub-vs-KaTeX escaping mismatches.
   *  GitHub READMEs use double backslash before LaTeX special characters
   *  (e.g. \\_ for underscore, \\$ for dollar), but KaTeX expects only
   *  a single backslash (\_, \$, etc.). */
  const preprocessMarkdown = (raw: string | null): string => {
    if (!raw) return '';
    return raw.replace(/\\\\([_$%&#{}~^])/g, '\\$1');
  };

  const markdownizePromise = () => getConfiguredMarked(project.readmeBaseUrl);

  let markdownString: string = $state('');

  let markdownStatus: 'loading' | 'loaded' | 'error' = $state('loading');

  let loading = $state(false);
  let rendering = $state(false);

  onMount(() => {
    (project.readmeUrl
      ? projectService.getReadme(project, fetch)
      : Promise.resolve('<h2>No README file</h2>')
    )
      .then((markdown) => {
        markdownStatus = 'loaded';
        markdownString = markdown ?? '_Blank README_';
      })
      .catch((err) => {
        markdownStatus = 'error';
        console.error(err);
        markdownString = err.toString();
      });

    /* eslint-disable @typescript-eslint/no-explicit-any */
    let mermaidInstance: any;
    let diagramId = 0;

    const loadMermaid = (): Promise<any> =>
      new Promise((resolve, reject) => {
        const s = document.createElement('script');
        s.src = 'https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.min.js';
        s.onload = () => resolve((window as any).mermaid);
        s.onerror = () => reject(new Error('Failed to load mermaid from CDN'));
        document.head.appendChild(s);
      });

    const renderDiagrams = () => {
      if (rendering) return;

      const el = document.querySelector<HTMLElement>('.markdown-content');
      if (!el) return;

      const diagrams = el.querySelectorAll<HTMLElement>('.mermaid:not([data-processed])');
      if (!diagrams.length) return;

      if (!mermaidInstance) {
        if (loading) return;
        loading = true;
        loadMermaid()
          .then((mermaid: any) => {
            mermaidInstance = mermaid;
            return mermaidInstance.initialize({ startOnLoad: false, maxTextSize: 1_000_000 });
          })
          .then(() => {
            loading = false;
            renderDiagrams();
          });
        return;
      }

      rendering = true;
      const batch: Promise<void>[] = [];

      diagrams.forEach((diagram) => {
        const text = diagram.textContent ?? '';
        const id = `mermaid-${diagramId++}`;

        batch.push(
          mermaidInstance
            .render(id, text)
            .then(({ svg }: { svg: string }) => {
              diagram.innerHTML = svg;
              diagram.setAttribute('data-processed', 'true');
            })
            .catch((e: Error) => {
              console.error('Mermaid:', e);
              diagram.textContent = `Mermaid error: ${e.message}`;
            })
        );
      });

      Promise.all(batch).then(() => (rendering = false));
    };

    const obs = new MutationObserver(renderDiagrams);
    obs.observe(document.body, { childList: true, subtree: true });
    renderDiagrams();

    return () => obs.disconnect();
  });

  let showBackToTop = $derived(scrollState.y >= 400);

  const tags: TagColorKey[] = $derived(
    project.tags.map((tag) => {
      return Object.prototype.hasOwnProperty.call(tagColors, tag)
        ? { key: tag as keyof TagColors, name: tag }
        : { key: 'default', name: tag };
    })
  );
</script>

<section class="bg-halftone bg-halftone-45">
  <!-- Former Wrapper -->
  <div
    class="mx-auto w-full max-w-screen-2xl px-2 sm:px-8 md:px-12 lg:px-16 xl:px-20 flex flex-col"
  >
    <!-- Main Card -->
    <div
      class="mt-20 p-2 pt-6 pb-8 sm:p-8 w-full bg-white dark:bg-slate-800 border-4 border-slate-900 dark:border-white overflow-clip"
    >
      <h1 class="dark:text-white mb-6 md:mb-8 lg:mb-12 xl:mb-16">{project.name}</h1>
      <!-- Hero section -->
      <div
        class="w-full flex flex-col xl:flex-row-reverse xl:justify-between gap-4 md:gap-8 mb-24 xl:mb-32"
      >
        <!-- Image preview -->
        <div
          class="w-full xl:w-1/2 h-fit shrink-0 border-4 border-slate-900 dark:border-white grid grid-cols-1 grid-rows-1 relative overflow-clip"
          style={fallbackAspectRatio > 0 && imgState !== 'loaded'
            ? `aspect-ratio:${fallbackAspectRatio}`
            : ''}
        >
          <img
            src={project.imageUrl}
            alt={project.name}
            title={project.name}
            class="col-start-1 row-start-1 h-full w-full text-transparent object-cover object-center
              cursor-crosshair duration-200 transition-all active:brightness-75 m-0 p-0"
            class:hidden={imgState === 'error'}
            onload={onImgLoad}
            onerror={() => (imgState = 'error')}
          />

          {#if imgState !== 'loaded'}
            <div
              class="col-start-1 row-start-1 place-self-center flex flex-col items-center gap-4 m-auto w-max py-8 pointer-events-none"
            >
              <div
                class="dark:text-white text-center text-4xl md:text-5xl lg:text-6xl font-extrabold text-text"
              >
                {#if imgState === 'error'}
                  <Fa icon={faImage} />
                {:else if imgState === 'loading'}
                  <Fa icon={faRefresh} class="animate-spin" />
                {/if}
              </div>
              <div
                class="dark:text-white text-wrap text-center font-cascadia-mono font-extrabold text-text text-3xl md:text-4xl lg:text-5xl"
              >
                {#if project.statusMessage}
                  {project.statusMessage}
                {:else if imgState === 'error'}
                  Image not available
                {:else if imgState === 'loading'}
                  Loading...
                {/if}
              </div>
            </div>
          {/if}
        </div>

        <!-- Project description -->
        <div class="w-full xl:w-1/2">
          <p class="dark:text-slate-300 text-center sm:text-left">{project.description}</p>

          <!-- Stars, forks, downloads -->
          <div
            class="pt-4 flex flex-wrap gap-x-4 gap-y-1 w-full justify-center sm:justify-normal dark:text-white"
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
            <div class="flex gap-2 items-center">
              <Fa icon={faBug} />
              {project.issuesCount ?? 0}
              {(project.issuesCount ?? 0) <= 1 ? 'Issue' : 'Issues'}
            </div>
            <div class="flex gap-2 items-center">
              <Fa icon={faCodePullRequest} />
              {project.pullRequestsCount ?? 0}
              {(project.pullRequestsCount ?? 0) <= 1 ? 'PR' : 'PRs'}
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
          {#if markdownStatus === 'loading'}
            Loading...
          {:else if markdownStatus === 'loaded'}
            README.md
          {:else if markdownStatus === 'error'}
            Error!
          {/if}
        </span>
      </a>
      <hr class="mb-16 border border-slate-700 dark:border-slate-300" />

      <!-- README.md content -->
      {#if !project.readmeUrl}
        <ReadmeStatusIndicator status="noreadme" message="No README.md for this project :(" />
      {:else if markdownStatus === 'loading'}
        <ReadmeStatusIndicator
          status="fetching"
          message="Fetching README.md content from {project.readmeUrl}"
        />
      {:else if markdownStatus === 'loaded'}
        {#await markdownizePromise()}
          <ReadmeStatusIndicator status="loading" message="Loading renderer, libraries and tools" />
        {:then markdownize}
          {#await markdownize(preprocessMarkdown(markdownString), { gfm: true })}
            <ReadmeStatusIndicator status="rendering" message="Rendering the content for you" />
          {:then html}
            {#if rendering || loading}
              <ReadmeStatusIndicator status="rendering" message="Rendering the content for you" />
            {/if}
            <div
              class="{rendering || loading ? 'hidden' : ''}
                text-slate-600 dark:text-slate-300 markdown-content"
            >
              {@html html}
            </div>
          {:catch err}
            <ReadmeStatusIndicator status="error" message={err.toString()} />
          {/await}
        {:catch err}
          <ReadmeStatusIndicator status="error" message={err.toString()} />
        {/await}
      {:else if markdownStatus === 'error'}
        <ReadmeStatusIndicator status="error" message={markdownString} />
      {/if}
    </div>

    <div class="flex justify-center py-16 w-full">
      <Button
        href="/#portfolio"
        aria-label="Back to home"
        title="Back to home"
        variant="primary"
        noDarkVariant={false}
        small
      >
        {#snippet icon()}
          <Fa icon={faHome} />
        {/snippet}
        Home
      </Button>
    </div>
  </div>
</section>

<Button
  onClick={() => (scrollState.y = 0)}
  aria-label="Back to top"
  className="back-to-top fixed bottom-6 right-6 z-50 {!showBackToTop ? 'hidden!' : ''}"
  variant="secondary"
  noDarkVariant={false}
  small
>
  {#snippet icon()}
    <Fa icon={faArrowUp} />
  {/snippet}
  Top
</Button>

<div class="markdown-content hidden"><a href="/">_</a></div>

<style>
  :global(.markdown-alert) {
    border-left-width: 4px;
    border-left-style: solid;
    padding: 1rem;
    margin: 1rem 0;
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
    margin: 1rem 0;
  }

  :global(.markdown-content table) {
    width: 100%;
  }

  :global(.markdown-content th),
  :global(.markdown-content td) {
    padding: 0.5rem 1rem;
    border: 1px solid var(--color-slate-300);
  }
  :global(.dark .markdown-content th),
  :global(.dark .markdown-content td) {
    border-color: var(--color-slate-600);
  }

  :global(.markdown-content p),
  :global(.markdown-content li) {
    color: inherit;
  }

  :global(.markdown-content .mermaid) {
    padding: 1rem;
    border-radius: var(--radius-md, 0.375rem);
    margin: 1rem 0;
  }
  :global(.dark .markdown-content .mermaid) {
    background: #f8fafc;
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
