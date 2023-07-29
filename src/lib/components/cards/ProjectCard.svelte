<script lang="ts">
	import type { Project } from '$lib/api/projects';
	import { scale } from 'svelte/transition';
	import type { CardColorKey, CardColors, TagColorKey, TagColors } from './colors';

	export let project: Project;

	export let cardColor: CardColorKey = { key: 'default' };

	const cardColors: CardColors = {
		default: 'bg-custom-1',
		blue: 'bg-sky-300',
		yellow: 'bg-yellow-300',
		red: 'bg-red-200',
		purple: 'bg-purple-300',
		green: 'bg-green-300'
	};

	const tagColors: TagColors = {
		default: 'bg-slate-400',
		flutter: 'bg-sky-400',
		dart: 'bg-teal-500',
		php: 'bg-indigo-300',
		codeigniter: 'bg-red-400',
		javascript: 'bg-yellow-400',
		svelte: 'bg-orange-400'
	};

	const tags: TagColorKey[] = project.tags.map((tag) => {
		return tagColors.hasOwnProperty(tag)
			? { key: tag as keyof TagColors, name: tag }
			: { key: 'default', name: tag };
	});
</script>

<div in:scale out:scale class="w-full lg:w-[48.88%] bg-slate-900 dark:bg-white">
	<div
		class="{cardColors[cardColor.key]}
		aspect-[3/4] sm:aspect-[4/3] lg:aspect-[3/4] xl:aspect-[4/3] border-4 border-slate-900 dark:border-white
		dark:bg-slate-700 -translate-x-1 -translate-y-1 active:translate-x-0 active:translate-y-0 hover:-translate-x-1.5 hover:-translate-y-1.5 duration-200 relative group cursor-pointer"
	>
		<div
			class="h-3/5 md:max-lg:h-3/5 border-b-4 border-slate-900 dark:border-white
			bg-slate-300 dark:bg-slate-600 flex relative"
		>
			{#if project.imageText}
				<h2 class="dark:text-white text-center m-auto">
					{project.imageText}
				</h2>
			{/if}
			<div
				class="top-0 bottom-0 left-0 right-0 flex bg-no-repeat bg-cover bg-center absolute"
				style="background-image: url('{project.imageUrl}');"
			/>
			<div
				class="opacity-0 group-hover:opacity-70 absolute top-0 right-0 m-2 px-4 py-2 rounded-full bg-slate-900 duration-200"
			>
				<h4 class="text-white">View detail</h4>
			</div>
		</div>
		<div class="pt-2 pb-14 px-4">
			<h3 class="mb-2 dark:text-white">{project.name}</h3>
			<p class="dark:text-slate-300 line-clamp-3">{project.description}</p>
		</div>
		<div
			class="border-t-4 border-slate-900 dark:border-white w-full h-12 absolute bottom-0 flex justify-start items-center gap-2 px-2 overflow-hidden"
		>
			{#each tags as tag}
				<p
					class="{tagColors[tag.key]} 
					max-sm:text-sm px-2 sm:px-4 py-1 h-max border-2 border-slate-900"
				>
					#{tag.name}
				</p>
			{/each}
		</div>
	</div>
</div>
