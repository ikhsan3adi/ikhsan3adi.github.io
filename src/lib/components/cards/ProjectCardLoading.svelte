<script lang="ts">
	import { scale } from 'svelte/transition';
	import Fa from 'svelte-fa';
	import { faRefresh } from '@fortawesome/free-solid-svg-icons';
</script>

<div in:scale class="w-full bg-slate-900 dark:bg-primary">
	<div
		class="border-4 border-slate-900 dark:border-primary bg-custom-1 dark:bg-slate-700 aspect-[3/4] sm:aspect-[4/3] lg:aspect-[6/4] xl:aspect-[8/3] -translate-x-1 -translate-y-1 active:translate-x-0 active:translate-y-0 hover:-translate-x-1.5 hover:-translate-y-1.5 duration-200 relative group cursor-pointer"
	>
		<!-- Hero -->
		<div
			class="h-3/5 md:max-lg:h-3/5 border-b-4 relative border-slate-900 dark:border-primary flex"
		>
			<div class="bg-primary animate-pulse flex absolute top-0 bottom-0 left-0 right-0">
				<div class=" mx-auto inline-flex flex-wrap m-auto justify-center gap-2 items-center w-max">
					<h1 class="dark:text-white text-right animate-spin"><Fa icon={faRefresh} /></h1>
					<h2 class="dark:text-white text-center">Loading...</h2>
				</div>
			</div>
		</div>
		<!-- Messages -->
		<div class="py-2 px-4">
			<h3 class="mb-2 dark:text-white text-center">Loading...</h3>
			<p class="dark:text-slate-300 text-center">Please wait...</p>
		</div>
	</div>
</div>
