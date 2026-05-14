<script lang="ts">
  import Icon from '@iconify/svelte';
  import Saos from 'saos';

  import Wrappper from '$lib/components/widgets/Wrappper.svelte';

  import { toolCategories } from '$lib/api/tools';
  import { cardColors, randomizeElements } from '$lib/components/colors';

  const randomizedColors = randomizeElements(cardColors, toolCategories.length);
</script>

<section
  class="bg-custom-4 dark:bg-cyan-800 border-t-4 border-slate-900 dark:border-white bg-no-repeat bg-cover bg-center overflow-hidden relative"
>
  <Wrappper>
    <div class="w-full pb-16 z-10">
      <Saos animation={'scale-up-center 1s cubic-bezier(0.4, 0, 0.2, 1) both'} once>
        <h1
          class="text-center mx-auto my-10 md:my-12 lg:my-16 dark:text-white duration-500"
          id="tools"
        >
          Development tools
        </h1>
      </Saos>

      <div
        class="columns-1 md:columns-2 lg:columns-3 gap-4 lg:gap-5 xl:gap-6 space-y-4 lg:space-y-5"
      >
        {#each toolCategories as category, i}
          <Saos animation={'scale-up-center 1s cubic-bezier(0.4, 0, 0.2, 1) both'} once>
            <div
              class="break-inside-avoid border-4 border-slate-900 dark:border-slate-700 p-4 flex flex-col
              {randomizedColors[i]}"
            >
              <h3 class="font-bold mb-4">
                {category.category}
              </h3>
              <div class="flex flex-wrap gap-4">
                {#each category.tools as tool}
                  <div class="flex flex-col items-center gap-2">
                    <div
                      class="w-12 h-12 bg-slate-200 border-2 border-slate-900 dark:border-slate-700 flex items-center justify-center"
                    >
                      <Icon icon={tool.icon} class="w-8 h-8 text-black" />
                    </div>
                    <span class="text-xs text-center">
                      {tool.name}
                    </span>
                  </div>
                {/each}
              </div>
            </div>
          </Saos>
        {/each}
      </div>
    </div>
  </Wrappper>
</section>
