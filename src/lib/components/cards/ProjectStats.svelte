<script lang="ts">
  import { Tween } from 'svelte/motion';
  import { expoOut, linear } from 'svelte/easing';
  import {
    faStar,
    faCodeFork,
    faBug,
    faCodePullRequest,
    faDownload
  } from '@fortawesome/free-solid-svg-icons';
  import Fa from 'svelte-fa';

  import type { Project } from '$lib/api/projects';
  import type { CardColor } from '$lib/components/colors';
  import { clamp } from '$lib/utils';

  interface Props {
    project: Project;
    cardColor: CardColor;
  }

  let { project, cardColor }: Props = $props();

  const MIN_DURATION = 1000;
  const MAX_DURATION = 7676;

  const getDuration = (target: number) => clamp(target * 50, MIN_DURATION, MAX_DURATION);

  const stars = new Tween(0);
  const forks = new Tween(0);
  const downloads = new Tween(0);
  const issues = new Tween(0);
  const pullRequests = new Tween(0);

  $effect(() => {
    stars.set(project.starsCount ?? 0, {
      duration: getDuration(project.starsCount ?? 0),
      easing: expoOut
    });
    forks.set(project.forksCount ?? 0, {
      duration: getDuration(project.forksCount ?? 0),
      easing: expoOut
    });
    downloads.set(project.downloadsCount ?? 0, {
      duration: getDuration(project.downloadsCount ?? 0),
      easing: expoOut
    });
    issues.set(project.issuesCount ?? 0, {
      duration: getDuration(project.issuesCount ?? 0),
      easing: linear
    });
    pullRequests.set(project.pullRequestsCount ?? 0, {
      duration: getDuration(project.pullRequestsCount ?? 0),
      easing: linear
    });
  });

  const title = $derived(
    `${project.starsCount} Stars\n${project.forksCount} Forks\n${project.downloadsCount} Downloads\n${project.issuesCount ?? 0} Issues\n${project.pullRequestsCount ?? 0} PRs`
  );
</script>

<div
  class="{cardColor.dark.bg} bg-slate-900 text-white dark:text-text duration-200
    flex justify-evenly gap-4 xl:gap-3 py-2 px-4"
  {title}
>
  <div class="flex gap-2 items-center">
    <Fa icon={faStar} />
    {stars.current.toFixed(0)}
    <span class="hidden sm:inline-block lg:hidden xl:inline-block">
      {(project.starsCount ?? 0) <= 1 ? 'Star' : 'Stars'}
    </span>
  </div>
  <div class="flex gap-2 items-center">
    <Fa icon={faCodeFork} />
    {forks.current.toFixed(0)}
    <span class="hidden sm:inline-block lg:hidden xl:inline-block">
      {(project.forksCount ?? 0) <= 1 ? 'Fork' : 'Forks'}
    </span>
  </div>
  <div class="flex gap-2 items-center">
    <Fa icon={faBug} />
    {issues.current.toFixed(0)}
    <span class="hidden sm:inline-block lg:hidden xl:inline-block">
      {(project.issuesCount ?? 0) <= 1 ? 'Issue' : 'Issues'}
    </span>
  </div>
  <div class="flex gap-2 items-center">
    <Fa icon={faCodePullRequest} />
    {pullRequests.current.toFixed(0)}
    <span class="hidden sm:inline-block lg:hidden xl:inline-block">
      {(project.pullRequestsCount ?? 0) <= 1 ? 'PR' : 'PRs'}
    </span>
  </div>
  <div class="flex gap-2 items-center">
    <Fa icon={faDownload} />
    {downloads.current.toFixed(0)}
    <span class="hidden sm:inline-block lg:hidden xl:inline-block">
      {(project.downloadsCount ?? 0) <= 1 ? 'Download' : 'Downloads'}
    </span>
  </div>
</div>
