<script lang="ts">
  import { page } from '$app/state';

  import { faArrowLeft, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
  import Fa from 'svelte-fa';

  import Button from '$lib/components/buttons/Button.svelte';
  import ThemeButton from '$lib/components/widgets/ThemeButton.svelte';
  import Wrappper from '$lib/components/widgets/Wrappper.svelte';

  import { sourceLink } from '$lib/config';
</script>

<svelte:head>
  <title>{page.status}: {page.error?.message}</title>

  <meta name="robots" content="noindex" />
</svelte:head>

<div class="w-full h-full flex absolute dark:bg-slate-800">
  <div class="fixed w-full">
    <Wrappper>
      <div class="my-auto h-14 md:h-16 flex w-full justify-end">
        <div class="my-auto">
          <ThemeButton />
        </div>
      </div>
    </Wrappper>
  </div>
  <Wrappper>
    <div
      class="m-auto flex flex-col items-center justify-center
        border-4 border-slate-900 dark:border-white p-8 bg-slate-100 dark:bg-slate-700"
    >
      <h1 class="text-center dark:text-white mb-4">{page.status}: {page.error?.message}</h1>

      <p class="mb-8 text-text dark:text-white italic">Oops!</p>

      <div class="flex flex-row flex-wrap justify-center gap-4 lg:gap-8">
        <!-- button for go back -->
        <Button variant="primary" href="/" fullWidth={false} noDarkVariant={false}>
          {#snippet icon()}
            <Fa icon={faArrowLeft} size="lg" />
          {/snippet}
          Home
        </Button>

        <Button
          variant="email"
          href="{sourceLink}/issues"
          target="_blank"
          fullWidth={false}
          noDarkVariant={false}
        >
          {#snippet icon()}
            <Fa icon={faExclamationCircle} size="lg" />
          {/snippet}
          Report
        </Button>
      </div>
    </div>
  </Wrappper>
</div>
