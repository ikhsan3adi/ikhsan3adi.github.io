<script>
	import Wrappper from '$lib/components/Wrappper.svelte';
	import waveBg from '$lib/components/graphics/wave-bg.svg';

	import Github from '$lib/components/graphics/social/Github.svelte';
	import AdobeIllustrator from '$lib/components/graphics/tools/AdobeIllustrator.svelte';
	import AdobePhotoshop from '$lib/components/graphics/tools/AdobePhotoshop.svelte';
	import AndroidStudio from '$lib/components/graphics/tools/AndroidStudio.svelte';
	import Bootstrap from '$lib/components/graphics/tools/Bootstrap.svelte';
	import Codeigniter from '$lib/components/graphics/tools/Codeigniter.svelte';
	import Figma from '$lib/components/graphics/tools/Figma.svelte';
	import Flutter from '$lib/components/graphics/tools/Flutter.svelte';
	import Git from '$lib/components/graphics/tools/Git.svelte';
	import Javascript from '$lib/components/graphics/tools/Javascript.svelte';
	import Kotlin from '$lib/components/graphics/tools/Kotlin.svelte';
	import Mysql from '$lib/components/graphics/tools/Mysql.svelte';
	import Nodejs from '$lib/components/graphics/tools/Nodejs.svelte';
	import Php from '$lib/components/graphics/tools/Php.svelte';
	import Postgresql from '$lib/components/graphics/tools/Postgresql.svelte';
	import Postman from '$lib/components/graphics/tools/Postman.svelte';
	import SublimeText from '$lib/components/graphics/tools/SublimeText.svelte';
	import Svelte from '$lib/components/graphics/tools/Svelte.svelte';
	import TailwindCss from '$lib/components/graphics/tools/TailwindCss.svelte';
	import VisualStudioCode from '$lib/components/graphics/tools/VisualStudioCode.svelte';
</script>

<section
	class="bg-custom-4 dark:bg-teal-800 border-y-4 border-text dark:border-white bg-no-repeat bg-cover bg-center overflow-hidden relative mb-4"
>
	<div
		class="absolute top-0 bottom-0 left-0 right-0 bg-cover bg-center bg-no-repeat scale-[1.05]"
		style="background-image: url({waveBg});"
	/>
	<Wrappper>
		<div class="w-full pb-36 z-10">
			<h1
				class="text-center mx-auto my-10 md:my-12 lg:my-16 dark:text-white duration-500"
				id="tools"
			>
				Development tools
			</h1>
			<div
				class="bg-text border-2 border-text w-full h-max flex flex-col md:flex-row justify-stretch"
			>
				<div class="flex w-full md:w-[40%] flex-col">
					<div
						class="w-full h-[250px] md:h-[350px] bg-accent border-2 border-text flex flex-col relative"
					>
						<div class="border-b-4 w-full border-text absolute top-0 h-12 flex justify-start">
							<h4 class="my-auto mx-4">Mobile apps</h4>
						</div>
						<div class="flex md:flex-wrap my-auto mx-2 gap-y-2 pt-16 items-center justify-evenly">
							<div class="w-36 h-36 md:w-40 md:h-40 xl:w-[11.15rem] xl:h-64">
								<Flutter />
							</div>
							<div class="w-32 h-32 md:w-16 md:h-16">
								<Kotlin />
							</div>
							<div class="w-36 h-36 md:w-32 md:h-32 lg:w-32 lg:h-36">
								<AndroidStudio />
							</div>
						</div>
					</div>
					<div class="w-full h-[200px] md:h-[300px] bg-custom-1 border-2 border-text flex relative">
						<div class="flex flex-wrap m-2 my-auto px-2 pb-12 gap-2 items-center justify-evenly">
							<div class="w-16 md:w-20 lg:w-24">
								<Codeigniter />
							</div>
							<div class="w-16 md:w-20 lg:w-24">
								<Nodejs />
							</div>
							<div class="w-16 md:w-20 lg:w-24">
								<Php />
							</div>
							<div class="w-16 md:w-20 lg:w-24">
								<Postgresql />
							</div>
							<div class="w-16 md:w-20 lg:w-24">
								<Mysql />
							</div>
						</div>
						<div class="border-t-4 w-full border-text h-12 absolute bottom-0 flex justify-start">
							<h4 class="my-auto mx-4">Back-end</h4>
						</div>
					</div>
				</div>
				<div class="flex w-full md:w-[60%] h-full flex-col">
					<div
						class="w-full h-[200px] md:h-[300px] bg-secondary border-2 border-text flex relative"
					>
						<div class="w-full flex my-auto pb-12 px-2 gap-2 justify-evenly">
							<div class="w-20 md:w-24 lg:w-36">
								<Svelte />
							</div>
							<div class="w-20 md:w-24 lg:w-36">
								<TailwindCss />
							</div>
							<div class="w-20 md:w-24 lg:w-36">
								<Bootstrap />
							</div>
							<div class="w-20 md:w-24 lg:w-36">
								<Javascript />
							</div>
						</div>
						<div class="border-t-4 w-full border-text h-12 absolute bottom-0 flex justify-start">
							<h4 class="my-auto mx-4">Front-end web</h4>
						</div>
					</div>
					<div class="flex">
						<div class="flex w-1/2 flex-col">
							<div
								class="w-full h-[150px] bg-custom-4 border-2 border-text flex justify-center relative"
							>
								<div class="w-full flex my-auto px-2 pb-12 gap-2 justify-evenly">
									<div class="w-20">
										<Git />
									</div>
									<div class="w-20">
										<Github />
									</div>
								</div>
								<div
									class="border-t-4 w-full border-text h-12 absolute bottom-0 flex justify-start"
								>
									<h4 class="my-auto mx-4">DevOps</h4>
								</div>
							</div>
							<div class="w-full h-[200px] bg-custom-3 border-2 border-text">
								<div class="border-b-4 w-full border-text h-12 flex justify-start">
									<h4 class="my-auto mx-4">Design</h4>
								</div>
								<div
									class="w-full flex my-auto md:my-0 px-2 pt-12 md:pt-6 gap-2 gap-y-4 justify-evenly"
								>
									<div class="w-20 stroke-black">
										<Figma />
									</div>
									<div class="w-20">
										<AdobeIllustrator />
									</div>
									<div class="w-20">
										<AdobePhotoshop />
									</div>
								</div>
							</div>
						</div>
						<div class="w-1/2 h-[350px] bg-custom-2 border-2 border-text flex flex-col">
							<div class="border-b-4 w-full border-text h-12 flex justify-start">
								<h4 class="my-auto mx-4">Others</h4>
							</div>
							<div
								class="mx-auto md:mx-0 md:my-auto flex flex-col gap-2 max-md:pt-6 md:flex-row justify-evenly"
							>
								<div class="w-20">
									<VisualStudioCode />
								</div>
								<div class="w-20">
									<SublimeText />
								</div>
								<div class="w-20">
									<Postman />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</Wrappper>
</section>
