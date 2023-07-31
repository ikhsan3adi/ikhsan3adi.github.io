<script lang="ts">
	import Footer from '$lib/components/sections/Footer.svelte';
	import Navbar from '$lib/components/sections/projectDetail/Navbar.svelte';
	import 'highlight.js/styles/github-dark-dimmed.css';
</script>

<Navbar />

<slot />

<Footer noNavLinks />
