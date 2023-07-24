<script lang="ts">
	import type { ColorVariant } from '$lib/components/buttons/button';

	import Wrappper from '$lib/components/Wrappper.svelte';
	import Button from '$lib/components/buttons/Button.svelte';
	import config from '$lib/config';

	const primaryButton: ColorVariant = { key: 'primary' };
</script>

<section class="w-full bg-custom-1 dark:bg-slate-700 relative">
	<Wrappper>
		<div class="w-full pb-36">
			<h1
				class="text-center mx-auto my-10 md:my-12 lg:my-16 dark:text-white duration-500"
				id="about"
			>
				About
			</h1>
			<div class="w-full flex flex-col gap-4 md:flex-row md:justify-between h-max">
				<div
					class="bg-custom-2 px-4 py-4 md:px-6 lg:py-6 lg:px-8 w-full h-full border-4 border-text dark:border-white"
				>
					<h3 class="mb-4">About me</h3>
					<p>
						I'm Ikhsan, a passionate software engineer with a love for problem-solving and creating
						impactful solutions. I thrive on continuous learning and enjoy collaborating with teams
						to tackle challenges and deliver high-quality software solutions. Let's build something
						great together!
					</p>
				</div>
				<div
					class="bg-secondary px-4 py-4 md:px-6 lg:py-6 lg:px-8 w-full border-4 border-text dark:border-white"
				>
					<p class="mb-4">
						To learn more about my experience and skills, feel free to visit my LinkedIn profile:
					</p>

					<a href={config.links.linkedIn}>
						<Button variant={primaryButton}>Visit LinkedIn</Button>
					</a>
				</div>
			</div>
		</div>
	</Wrappper>
	<div class="absolute left-0 right-0 bottom-0 bg-custom-3 h-16 border-text border-y-4" />
</section>
