<script lang="ts">
	import type { ProjectDetail } from '$lib/api/projects';
	import Wrappper from '$lib/components/Wrappper.svelte';
	import Button from '$lib/components/buttons/Button.svelte';
	import type { ColorVariant } from '$lib/components/buttons/button';

	export let project: ProjectDetail;
	const disabledButton: ColorVariant = { key: 'disabled' };
</script>

<section class="mt-16">
	<Wrappper>
		<div class="mt-16 w-full">
			<h1 class="dark:text-white mb-6 md:mb-8 lg:mb-12 xl:mb-16">Error!</h1>
			<div
				class="w-full justify-between flex flex-col lg:flex-row-reverse gap-4 md:gap-8 lg:gap-12"
			>
				<div class="w-full bg-red-600 dark:bg-red-400 animate-pulse aspect-[4/3]" />
				<div class="w-full">
					<p class="dark:text-slate-300">{project.description}</p>
					<div class="my-4 md:my-6 lg:my-8 flex gap-4 md:gap-6 lg:gap-8">
						<Button noDarkVariant={false} variant={disabledButton}>Error</Button>
						<Button noDarkVariant={false} variant={disabledButton}>{project.name}</Button>
					</div>
				</div>
			</div>
		</div>
	</Wrappper>
</section>
