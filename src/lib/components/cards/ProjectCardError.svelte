<script lang="ts">
	import type { Project } from '$lib/api/projects';
	import { scale } from 'svelte/transition';
	import Fa from 'svelte-fa';
	import { faWarning } from '@fortawesome/free-solid-svg-icons';

	export let project: Project;
</script>

<div in:scale class="w-full bg-slate-900 dark:bg-red-400">
	<div
		class="border-4 border-slate-900 dark:border-red-400 bg-red-100 dark:bg-slate-700 aspect-[3/4] sm:aspect-[4/3] lg:aspect-[6/4] xl:aspect-[8/3] -translate-x-1 -translate-y-1 active:translate-x-0 active:translate-y-0 hover:-translate-x-1.5 hover:-translate-y-1.5 duration-200 relative group cursor-pointer"
	>
		<!-- Hero -->
		<div
			class="h-3/5 md:max-lg:h-3/5 border-b-4 bg-red-600 dark:bg-red-400 border-slate-900 dark:border-red-400 flex"
		>
			<div class=" mx-auto inline-flex flex-wrap m-auto justify-center gap-2 items-center w-max">
				<h1 class="dark:text-white text-right"><Fa icon={faWarning} /></h1>
				<h2 class="dark:text-white text-center">Error!</h2>
			</div>
		</div>

		<!-- Messages -->
		<div class="py-2 px-4">
			<h3 class="mb-2 dark:text-white text-center">
				{project.name === 'limit' ? 'API rate limit exceeded' : 'Failed to fetch data'}
			</h3>
			<p class="dark:text-slate-300 text-center">
				{project.description}
			</p>
		</div>
	</div>
</div>
