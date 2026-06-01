<script lang="ts">
  import type { PageData } from './$types';

  import About from '$lib/components/sections/About.svelte';
  import Achievements from '$lib/components/sections/Achievements.svelte';
  import Contact from '$lib/components/sections/Contact.svelte';
  import Footer from '$lib/components/sections/Footer.svelte';
  import Hero from '$lib/components/sections/Hero.svelte';
  import Navbar from '$lib/components/sections/Navbar.svelte';
  import Portfolio from '$lib/components/sections/Portfolio.svelte';
  import Social from '$lib/components/sections/Social.svelte';
  import Tools from '$lib/components/sections/Tools.svelte';
  import { FULL_NAME } from '$lib/config';

  interface Props {
    data: PageData;
  }

  let { data }: Props = $props();

  const description =
    "Just a simple space to get to know Ikhsan Satriadi. Explore the everyday problems I'm trying to solve and creations made to help people make things just a bit easier.";
</script>

<svelte:head>
  <title>{FULL_NAME}</title>

  <meta name="description" content={description} />
  <meta property="og:description" content={description} />
  <meta name="twitter:description" content={description} />
</svelte:head>

<main>
  <Navbar />
  <Hero />
  <About />
  <Portfolio fetch={data.fetch} projectService={data.projectService} />
  <Achievements />
  <Tools />
  <Social />
  <Contact />
  <Footer />
</main>
