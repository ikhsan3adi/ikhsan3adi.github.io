<script>
	import Wrappper from '$lib/components/Wrappper.svelte';

	const projects = [
		{
			name: 'Auction app',
			description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, sed!',
			tag: ['flutter', 'svelte']
		},
		{
			name: 'Polling app',
			description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, sed!',
			tag: ['flutter', 'svelte']
		},
		{
			name: 'Music app',
			description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, sed!',
			tag: ['flutter', 'svelte']
		},
		{
			name: 'Todo app',
			description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, sed!',
			tag: ['flutter', 'svelte']
		},
		{
			name: 'Todo app',
			description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, sed!',
			tag: ['flutter', 'svelte']
		}
	];
</script>

<section>
	<Wrappper>
		<div class="w-full pb-36">
			<h1
				class="text-center mx-auto my-10 md:my-12 lg:my-16 dark:text-white duration-500"
				id="portfolio"
			>
				Projects
			</h1>
			<div class="w-full flex flex-wrap justify-center gap-4">
				{#each projects as project}
					<div class="w-full lg:w-[48.88%] bg-text dark:bg-white">
						<div
							class="border-4 border-text dark:border-white bg-custom-1 dark:bg-slate-700 aspect-[3/4] sm:max-md:aspect-[4/3] md:max-lg:aspect-[3/2] xl:aspect-[4/3] -translate-x-1 -translate-y-1 active:translate-x-0 active:translate-y-0 hover:-translate-x-1.5 hover:-translate-y-1.5 duration-200 relative group cursor-pointer"
						>
							<div class="h-3/5 md:max-lg:h-3/5 border-b-4 border-text dark:border-white relative">
								<div
									class="opacity-0 group-hover:opacity-70 absolute top-0 right-0 m-2 px-4 py-2 rounded-full bg-text duration-200"
								>
									<h4 class="text-white">View detail</h4>
								</div>
							</div>
							<div class="py-2 px-4">
								<h3 class="mb-2 dark:text-white">{project.name}</h3>
								<p class="dark:text-slate-300">{project.description}</p>
							</div>
							<div
								class="border-t-4 border-text dark:border-white w-full h-12 absolute bottom-0 flex justify-start items-center gap-2 px-2"
							>
								{#each project.tag as tag}
									<p class="bg-custom-2 px-4 py-1 h-max">#{tag}</p>
								{/each}
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</Wrappper>
</section>
