<script lang="ts">
	import Wrappper from '$lib/components/Wrappper.svelte';
	import Button from '$lib/components/buttons/Button.svelte';
	import { socials } from '$lib/variables';
</script>

<section>
	<div class="w-full mb-4">
		<Wrappper>
			<div class="w-full">
				<h1
					class="text-center mx-auto my-10 md:my-12 lg:my-16 dark:text-white duration-500"
					id="social"
				>
					Connect with me
				</h1>
				<div class="flex flex-wrap justify-between gap-4">
					{#each socials as social}
						<a href={social.link} class="w-full md:w-[48.5%]">
							<Button
								variant={social.colorVariant}
								fullWidth={true}
								noDarkVariant={false}
								centerText={false}
							>
								<div class="w-10 h-10" slot="icon">
									<svelte:component this={social.icon} />
								</div>
								<div class="flex justify-start items-center">
									{social.social}
								</div>
							</Button>
						</a>
					{/each}
				</div>
			</div>
		</Wrappper>
	</div>
</section>
