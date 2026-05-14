<script lang="ts">
  import Button from '$lib/components/buttons/Button.svelte';
  import Wrappper from '$lib/components/widgets/Wrappper.svelte';
  import { faRefresh } from '@fortawesome/free-solid-svg-icons';
  import Fa from 'svelte-fa';
</script>

<section class="mt-16">
  <Wrappper>
    <div class="mt-16 w-full">
      <h1 class="dark:text-white mb-6 md:mb-8 lg:mb-12 xl:mb-16 animate-bounce">Loading...</h1>
      <div
        class="w-full justify-between flex flex-col lg:flex-row-reverse gap-4 md:gap-8 lg:gap-12 mb-24 lg:mb-32"
      >
        <div class="w-full bg-primary animate-pulse aspect-[2/1] flex items-center">
          <h1 class="text-center m-auto text-white dark:text-text inline-flex gap-2 animate-bounce">
            <span class="animate-spin"><Fa icon={faRefresh} /></span>Loading...
          </h1>
        </div>
        <div class="w-full">
          <p class="dark:text-slate-300">Fetching data...</p>
          <div class="my-4 md:my-6 lg:my-8 flex gap-4 md:gap-6 lg:gap-8">
            <Button noDarkVariant={false} variant="disabled">Loading</Button>
          </div>
        </div>
      </div>
    </div>
  </Wrappper>
</section>
