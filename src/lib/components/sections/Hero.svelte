<script>
	import bg from '$lib/components/graphics/hero-bg.svg';
	import Emblem from '$lib/components/graphics/Emblem.svelte';
	import Wrappper from '$lib/components/Wrappper.svelte';
</script>

<section>
	<div
		class="h-[1000px] md:h-[870px] bg-cover bg-no-repeat flex"
		style="background-image: url({bg});"
	>
		<Wrappper>
			<div class="w-full md:flex md:gap-4 md:justify-between my-auto">
				<div class="mb-52 mt-16 md:m-0 py-2 md:py-8 lg:py-9 sm:max-md:text-center">
					<h4 class="dark:text-white">Hello, my name is</h4>
					<h1 class="mb-2 dark:text-white">
						Ikhsan <h1 class="inline text-primary">Satriadi</h1>
					</h1>
					<h4 class="mb-4 dark:text-white">A mobile developer</h4>

					<div class="flex gap-3 sm:max-md:justify-center">
						<button class="bg-text dark:bg-primary">
							<div
								class="bg-primary px-4 py-2 -translate-x-1 -translate-y-1 border-text dark:border-primary border-2 dark:bg-text"
							>
								<h4 class="dark:text-primary">See projects</h4>
							</div>
						</button>

						<button class="bg-text dark:bg-white">
							<div
								class="bg-background px-4 py-2 -translate-x-1 -translate-y-1 border-text dark:border-white border-2 dark:bg-text"
							>
								<h4 class="dark:text-white">Contact me</h4>
							</div>
						</button>
					</div>
				</div>
				<div class="max-md:mx-auto w-max md:my-auto relative">
					<div
						class="w-52 h-52 mx-auto md:w-64 md:h-64 lg:w-72 lg:h-72 dark:text-white absolute -top-3 right-2"
					>
						<Emblem />
					</div>
					<div
						class="w-52 h-52 mx-auto md:w-64 md:h-64 lg:w-72 lg:h-72 text-secondary dark:text-transparent dark:stroke-[4] dark:stroke-custom-3"
					>
						<Emblem />
					</div>
				</div>
			</div>
		</Wrappper>
	</div>
</section>
