<script lang="ts">
	import type { Project } from '$lib/api/projects';
	import { scale } from 'svelte/transition';
	import type { CardColorKey, CardColors, TagColorKey, TagColors } from './colors';

	export let project: Project;

	export let cardColor: CardColorKey = { key: 'default' };

	const cardColors: CardColors = {
		default: {
			light: 'bg-custom-1',
			dark: { border: 'dark:border-blue-400', bg: 'dark:bg-blue-400' }
		},
		blue: { light: 'bg-sky-300', dark: { border: 'dark:border-sky-400', bg: 'dark:bg-sky-400' } },
		yellow: {
			light: 'bg-yellow-300',
			dark: { border: 'dark:border-yellow-400', bg: 'dark:bg-yellow-400' }
		},
		red: { light: 'bg-red-200', dark: { border: 'dark:border-red-400', bg: 'dark:bg-red-400' } },
		purple: {
			light: 'bg-purple-300',
			dark: { border: 'dark:border-purple-400', bg: 'dark:bg-purple-400' }
		},
		green: {
			light: 'bg-green-300',
			dark: { border: 'dark:border-green-400', bg: 'dark:bg-green-400' }
		}
	};

	const tagColors: TagColors = {
		default: 'bg-slate-400',
		flutter: 'bg-sky-400',
		dart: 'bg-teal-500',
		html: 'bg-rose-400',
		php: 'bg-indigo-300',
		codeigniter: 'bg-red-400',
		javascript: 'bg-yellow-400',
		typescript: 'bg-blue-400',
		svelte: 'bg-orange-400'
	};

	const tags: TagColorKey[] = project.tags.map((tag) => {
		return tagColors.hasOwnProperty(tag)
			? { key: tag as keyof TagColors, name: tag }
			: { key: 'default', name: tag };
	});
</script>

<div
	in:scale
	out:scale
	class="w-full lg:w-[48.88%] bg-slate-900 {cardColors[cardColor.key].dark.bg}"
>
	<a href="/projects/{project.id}" target="_blank">
		<div
			class="{cardColors[cardColor.key].light}
		aspect-[3/4] sm:aspect-[4/3] lg:aspect-[3/4] xl:aspect-[4/3] border-4 border-slate-900 {cardColors[
				cardColor.key
			].dark.border}
		dark:bg-slate-700 -translate-x-1 -translate-y-1 active:translate-x-0 active:translate-y-0 hover:-translate-x-1.5 hover:-translate-y-1.5 duration-200 relative group cursor-pointer"
		>
			<div
				class="h-3/5 md:max-lg:h-3/5 border-b-4 border-slate-900 {cardColors[cardColor.key].dark
					.border}
			bg-slate-300 dark:bg-slate-600 flex relative"
			>
				<h2 class="dark:text-white text-center m-auto">
					{project.imageText ?? 'Image not available'}
				</h2>
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
				class="border-t-4 border-slate-900 {cardColors[cardColor.key].dark
					.border} w-full h-12 absolute bottom-0 flex justify-start items-center gap-2 px-2 overflow-hidden"
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
	</a>
</div>
