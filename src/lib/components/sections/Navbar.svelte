<script>
	import Wrappper from '$lib/components/Wrappper.svelte';
	import Theme from '$lib/components/Theme.svelte';
</script>

<section
	class="fixed top-0 left-0 right-0 bg-primary bg-opacity-30 border-b-4 border-text border-opacity-0"
>
	<Wrappper>
		<div class="my-auto h-16 flex justify-between w-full">
			<!-- Logo -->
			<div class="my-auto">
				<div class="mt-2 dark:mt-0 relative">
					<h3 class="text-primary dark:text-white font-mechsuit md:text-2xl z-0">IKHSaN3ADI</h3>
					<h3 class="font-mechsuit dark:hidden md:text-2xl absolute -top-1 right-1">IKHSaN3ADI</h3>
				</div>
			</div>

			<!-- Dark mode toggle -->
			<div class="my-auto">
				<Theme />
			</div>
		</div>
	</Wrappper>
</section>
