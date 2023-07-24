<script>
	import Wrappper from '$lib/components/Wrappper.svelte';
	import waveBg from '$lib/components/graphics/wave-bg.svg';
</script>

<section
	class="bg-custom-4 dark:bg-teal-800 border-y-4 border-text dark:border-white bg-no-repeat bg-cover bg-center overflow-hidden relative"
>
	<div
		class="absolute top-0 bottom-0 left-0 right-0 bg-cover bg-center bg-no-repeat scale-[1.05]"
		style="background-image: url({waveBg});"
	/>
	<Wrappper>
		<div class="w-full pb-36 z-10">
			<h1
				class="text-center mx-auto my-10 md:my-12 lg:my-16 dark:text-white duration-500"
				id="portfolio"
			>
				Development tools
			</h1>
			<div
				class="bg-text border-2 border-text w-full h-max flex flex-col md:flex-row justify-stretch"
			>
				<div class="flex w-full md:w-[40%] flex-col">
					<div class="w-full h-[250px] md:h-[350px] bg-accent border-2 border-text">
						<div class="border-b-4 w-full border-text h-12 flex justify-start">
							<h4 class="my-auto mx-4">Mobile apps</h4>
						</div>
					</div>
					<div
						class="w-full h-[200px] md:h-[300px] bg-custom-1 border-2 border-text flex justify-center"
					>
						<div class="border-t-4 w-full border-text h-12 self-end flex justify-start">
							<h4 class="my-auto mx-4">Back-end</h4>
						</div>
					</div>
				</div>
				<div class="flex w-full md:w-[60%] h-full flex-col">
					<div
						class="w-full h-[200px] md:h-[300px] bg-secondary border-2 border-text flex justify-center"
					>
						<div class="border-t-4 w-full border-text h-12 self-end flex justify-start">
							<h4 class="my-auto mx-4">Front-end web</h4>
						</div>
					</div>
					<div class="flex">
						<div class="flex w-1/2 flex-col">
							<div class="w-full h-[150px] bg-custom-4 border-2 border-text flex justify-center">
								<div class="border-t-4 w-full border-text h-12 self-end flex justify-start">
									<h4 class="my-auto mx-4">DevOps</h4>
								</div>
							</div>
							<div class="w-full h-[200px] bg-custom-3 border-2 border-text">
								<div class="border-b-4 w-full border-text h-12 flex justify-start">
									<h4 class="my-auto mx-4">Design</h4>
								</div>
							</div>
						</div>
						<div class="w-1/2 h-[350px] bg-custom-2 border-2 border-text">
							<div class="border-b-4 w-full border-text h-12 flex justify-start">
								<h4 class="my-auto mx-4">Others</h4>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</Wrappper>
</section>
