<script lang="ts">
	import { socials } from '$lib/api/socials';

	import Wrappper from '$lib/components/widgets/Wrappper.svelte';
	import Button from '$lib/components/buttons/Button.svelte';

	import Saos from 'saos';
</script>

<section>
	<div class="w-full mb-4">
		<Wrappper>
			<div class="w-full">
				<Saos animation={'scale-up-center 1s cubic-bezier(0.4, 0, 0.2, 1) both'} once>
					<h1
						class="text-center mx-auto my-10 md:my-12 lg:my-16 dark:text-white duration-500"
						id="social"
					>
						Connect with me
					</h1>
				</Saos>

				<!-- Social buttons -->
				<div class="flex flex-wrap justify-center gap-4 lg:gap-5 xl:gap-6">
					{#each socials as social}
						<a href={social.link} target="_blank" class="w-full md:w-[48.5%]">
							<Saos animation={'scale-up-center 1s cubic-bezier(0.4, 0, 0.2, 1) both'} once>
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
							</Saos>
						</a>
					{/each}
				</div>
			</div>
		</Wrappper>
	</div>
</section>
