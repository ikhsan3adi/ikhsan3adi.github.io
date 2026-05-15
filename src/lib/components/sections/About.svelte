<script lang="ts">
  import { faExternalLink } from '@fortawesome/free-solid-svg-icons';
  import Saos from 'saos';
  import Fa from 'svelte-fa';

  import { aboutText, photoCards, topMarqueeTexts } from '$lib/api/about';
  import { linkedInLink } from '$lib/api/socials';

  import Button from '$lib/components/buttons/Button.svelte';
  import PhotoCard from '$lib/components/cards/PhotoCard.svelte';
  import MarqueeText from '$lib/components/widgets/MarqueeText.svelte';
  import Wrappper from '$lib/components/widgets/Wrappper.svelte';

  let hoveredCard: number | null = null;

  function getZIndex(cardIndex: number): number {
    if (hoveredCard === null) return photoCards[cardIndex].baseZ;
    if (hoveredCard === cardIndex) return 100;
    return photoCards[cardIndex].baseZ;
  }
</script>

<section class="w-full relative pt-12 md:pt-14 lg:pt-16 bg-fuchsia-200 dark:bg-purple-900">
  <div
    class="absolute left-0 right-0 top-0 bg-primary h-12 md:h-14 lg:h-16 border-slate-900 dark:border-slate-700 border-y-4 flex items-center"
  >
    <MarqueeText direction="left">
      <div class="flex items-center gap-8 mx-4">
        {#each topMarqueeTexts as text}
          <h4>{text}</h4>
        {/each}
      </div>
    </MarqueeText>
  </div>
  <Wrappper>
    <div class="w-full pt-10 sm:pt-12 md:pt-14 lg:pt-16 pb-16">
      <Saos animation={'scale-up-center 1s cubic-bezier(0.4, 0, 0.2, 1) both'} once />
      <div
        class="w-full flex flex-col gap-4 lg:gap-5 xl:gap-6 lg:flex-row md:justify-between h-max"
      >
        <div
          class="w-full border-4 border-slate-900 dark:border-slate-700 p-8 bg-slate-100 dark:bg-fuchsia-400"
        >
          <Saos animation={'scale-up-center 1s cubic-bezier(0.4, 0, 0.2, 1) both'} once>
            <h1 class="mb-4 md:mb-6 lg:mb-8 duration-500" id="about">About Me</h1>
            <p class="active:text-indigo-900">
              {aboutText}
            </p>
            <p class="my-6">
              To learn more about my experience and skills, feel free to visit my LinkedIn profile:
            </p>
            <a href={linkedInLink} target="_blank">
              <Button variant="primary" noDarkVariant={true}>
                <Fa icon={faExternalLink} slot="icon" />Visit LinkedIn
              </Button>
            </a>
          </Saos>
        </div>
        <div class="w-full">
          <div
            class="h-full w-full
            overflow-visible relative
            flex items-center justify-center
            border-4 border-slate-900 dark:border-slate-700
            bg-amber-200 dark:bg-amber-400
            aspect-[1/1] md:aspect-[4/3] lg:aspect-[3/4] xl:aspect-[2/1]"
            aria-labelledby="Illustrated About Me"
            role="region"
            on:mouseleave={() => (hoveredCard = null)}
          >
            {#each photoCards as card, i}
              <PhotoCard
                title={card.title}
                description={card.description}
                imageSrc={card.imgSrc}
                bgClass={card.bgClass}
                transformClass={card.transformClass}
                cardSizeClass={card.cardSizeClass}
                imgClass={card.imgClass}
                zIndex={getZIndex(i)}
                on:mouseenter={() => (hoveredCard = i)}
              />
            {/each}
          </div>
        </div>
      </div>
    </div>
  </Wrappper>
</section>
