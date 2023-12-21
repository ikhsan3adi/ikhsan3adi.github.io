<script lang="ts">
	import { type ProjectService, initialProjects, projects } from '$lib/api/projects';
	import { type CardColorKey, randomizeElements } from '$lib/components/colors';

	import Wrappper from '$lib/components/widgets/Wrappper.svelte';
	import MarqueeText from '$lib/components/widgets/MarqueeText.svelte';
	import ProjectCard from '$lib/components/cards/ProjectCard.svelte';
	import ProjectCardLoading from '$lib/components/cards/ProjectCardLoading.svelte';
	import ProjectCardError from '$lib/components/cards/ProjectCardError.svelte';

	import Saos from 'saos';

	export let fetch: (input: URL | RequestInfo, init?: RequestInit) => Promise<Response>;
	export let projectService: ProjectService;

	const cardColorVariants: CardColorKey[] = [
		{ key: 'default' },
		{ key: 'blue' },
		{ key: 'yellow' },
		{ key: 'red' },
		{ key: 'purple' },
		{ key: 'green' }
	];

	const cardColors: CardColorKey[] = randomizeElements(cardColorVariants, 4);

	let isIntersecting = false;

	// Fetch project when this section is appeared
	function checkIntersecting(node: Element) {
		const observer: IntersectionObserver = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (!entry.isIntersecting) return;

				setTimeout(async () => {
					console.log('Fetching projects');

					for (const project of initialProjects) {
						try {
							await projectService.fetchProject({ project, fetch });
						} catch (_) {
							break;
						}
					}

					isIntersecting = true;
					observer.disconnect();
				}, 500);
			});
		});

		if (!isIntersecting) {
			observer.observe(node);
		}
	}
</script>

<section class="relative pt-20" use:checkIntersecting>
	<div
		class="absolute left-0 right-0 top-0 bg-custom-3 h-12 md:h-14 lg:h-16 border-slate-900 border-y-4 flex items-center"
	>
		<MarqueeText direction="right" duration={5} repeat={5}>
			<div class="flex items-center gap-8 mx-4">
				<h4>● Portfolio</h4>
				<h4>● Projects</h4>
				<h4>● Apps</h4>
				<h4>● Websites</h4>
				<h4>● Tools</h4>
				<h4>● Things</h4>
			</div>
		</MarqueeText>
	</div>
	<Wrappper>
		<div class="w-full pb-36">
			<Saos animation={'scale-up-center 1s cubic-bezier(0.4, 0, 0.2, 1) both'} once>
				<h1
					class="text-center mx-auto my-10 md:my-12 lg:my-16 dark:text-white duration-500"
					id="portfolio"
				>
					Projects
				</h1>
			</Saos>

			<!-- Projects -->
			<Saos animation={'scale-up-center 1s cubic-bezier(0.4, 0, 0.2, 1) both'} once>
				<div class="w-full flex flex-wrap justify-center gap-4">
					{#if $projects.length == 0}
						<ProjectCardLoading />
					{:else if $projects.length == 1 && ($projects[0].name === 'error' || $projects[0].name === 'limit')}
						<ProjectCardError project={$projects[0]} />
					{:else}
						{#each $projects as project, i}
							<ProjectCard {project} cardColor={cardColors[i]} />
						{/each}
					{/if}
				</div>
			</Saos>
		</div>
	</Wrappper>
</section>
