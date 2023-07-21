<script lang="ts">
	import '../app.css';
	import type { LayoutData } from './$types';

	import Navbar from '$lib/components/sections/Navbar.svelte';

	export let data: LayoutData;
</script>

<Navbar />

<slot />

<style global lang="postcss">
	:global(h1),
	:global(h2) {
		@apply font-jetbrains font-extrabold text-text;
	}

	:global(h1) {
		@apply text-4xl md:text-5xl lg:text-6xl;
	}

	:global(h2) {
		@apply text-2xl md:text-3xl lg:text-4xl;
	}

	:global(h3),
	:global(h4) {
		@apply font-poppins text-text;
	}

	:global(h3) {
		@apply md:text-lg lg:text-xl font-bold;
	}

	:global(h4) {
		@apply md:text-lg lg:text-xl font-medium;
	}

	:global(p) {
		@apply font-poppins font-medium text-text;
	}
</style>
