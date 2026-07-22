<script lang="ts">
  import type { PageData } from './$types';

  import About from '$lib/components/sections/About.svelte';
  import Achievements from '$lib/components/sections/Achievements.svelte';
  import Contact from '$lib/components/sections/Contact.svelte';
  import Hero from '$lib/components/sections/Hero.svelte';
  import Portfolio from '$lib/components/sections/Portfolio.svelte';
  import Social from '$lib/components/sections/Social.svelte';
  import Tools from '$lib/components/sections/Tools.svelte';
  import Footer from '$lib/components/sections/Footer.svelte';
  import Navbar from '$lib/components/sections/Navbar.svelte';
  import { FULL_NAME, imgPreviewLink, metaDescription } from '$lib/config';

  interface Props {
    data: PageData;
  }

  let { data }: Props = $props();
</script>

<svelte:head>
  <title>{FULL_NAME}</title>

  <meta name="description" content={metaDescription} />
  <meta property="og:description" content={metaDescription} />
  <meta name="twitter:description" content={metaDescription} />

  <meta property="og:image:alt" content={FULL_NAME} />
  <meta property="og:image" content={imgPreviewLink} />
</svelte:head>

<Navbar />

<main>
  <Hero />
  <About />
  <Portfolio fetch={data.fetch} projectService={data.projectService} cacheStore={data.cacheStore} />
  <Achievements />
  <Tools />
  <Social />
  <Contact />
</main>

<Footer />
