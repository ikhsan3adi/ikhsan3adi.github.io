<script lang="ts">
  import '@fontsource/cascadia-mono/400.css';
  import '@fontsource/cascadia-mono/500.css';
  import '@fontsource/cascadia-mono/600.css';
  import '@fontsource/cascadia-mono/700.css';

  import '@fontsource/space-grotesk/400.css';
  import '@fontsource/space-grotesk/700.css';
  import '../app.css';
</script>

<slot />

<style global lang="postcss">
  :global(body) {
    @apply font-space-grotesk;
  }

  :global(h1),
  :global(h2) {
    @apply font-cascadia-mono font-extrabold text-text;
  }

  :global(h1) {
    @apply text-4xl md:text-5xl lg:text-6xl;
  }

  :global(h2) {
    @apply text-2xl md:text-3xl lg:text-4xl;
  }

  :global(h3),
  :global(h4) {
    @apply font-space-grotesk text-text;
  }

  :global(h3) {
    @apply text-xl md:text-2xl font-bold;
  }

  :global(h4) {
    @apply md:text-lg lg:text-xl font-medium;
  }

  :global(p) {
    @apply font-space-grotesk font-medium text-text;
  }

  :global(a) {
    @apply font-space-grotesk font-medium;
  }

  :global(code > *) {
    @apply font-cascadia-mono;
  }

  @-webkit-keyframes -global-scale-up-center {
    0% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }

  @keyframes -global-scale-up-center {
    0% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
</style>
