<script lang="ts">
	import Navbar from '$lib/components/sections/Navbar.svelte';
	import About from '$lib/components/sections/About.svelte';
	import Contact from '$lib/components/sections/Contact.svelte';
	import Footer from '$lib/components/sections/Footer.svelte';
	import Hero from '$lib/components/sections/Hero.svelte';
	import Portfolio from '$lib/components/sections/Portfolio.svelte';
	import Social from '$lib/components/sections/Social.svelte';
	import Tools from '$lib/components/sections/Tools.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<main>
	<Navbar />
	<Hero />
	<About />
	<Portfolio fetch={data.fetch} />
	<Tools />
	<Social />
	<Contact />
	<Footer />
</main>
