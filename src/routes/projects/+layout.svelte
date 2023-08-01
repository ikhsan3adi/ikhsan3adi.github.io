<script lang="ts">
	import 'highlight.js/styles/github-dark-dimmed.css';

	import Footer from '$lib/components/sections/Footer.svelte';
	import Navbar from '$lib/components/sections/project-detail/Navbar.svelte';
</script>

<Navbar />

<slot />

<Footer noNavLinks />
