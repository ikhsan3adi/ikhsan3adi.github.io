<script lang="ts">
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
