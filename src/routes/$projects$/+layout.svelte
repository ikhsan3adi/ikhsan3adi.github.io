<script lang="ts">
  import 'highlight.js/styles/github-dark-dimmed.css';

  import Footer from '$lib/components/sections/Footer.svelte';
  import Navbar from '$lib/components/sections/Navbar.svelte';
  interface Props {
    children?: import('svelte').Snippet;
  }

  let { children }: Props = $props();
</script>

<Navbar showNavLinks={false} />

{@render children?.()}

<Footer noNavLinks />
