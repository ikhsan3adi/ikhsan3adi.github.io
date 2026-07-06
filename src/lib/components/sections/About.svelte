<script lang="ts">
  import { faExternalLink } from '@fortawesome/free-solid-svg-icons';
  import Fa from 'svelte-fa';

  import { aboutTexts, photoCards, topMarqueeTexts } from '$lib/api/about';
  import { linkedInLink } from '$lib/api/socials';

  import Button from '$lib/components/buttons/Button.svelte';
  import PhotoCard from '$lib/components/cards/PhotoCard.svelte';
  import MarqueeText from '$lib/components/widgets/MarqueeText.svelte';
  import Saos from '$lib/components/widgets/Saos.svelte';
  import Wrappper from '$lib/components/widgets/Wrappper.svelte';

  let hoveredCard: number | null = $state(null);

  function getZIndex(cardIndex: number): number {
    if (hoveredCard === null) return photoCards[cardIndex].baseZ;
    if (hoveredCard === cardIndex) return 39;
    return photoCards[cardIndex].baseZ;
  }

  function getImgOverlayFxCls(cardIndex: number): string {
    if (hoveredCard === null) {
      const topCardIndex = photoCards.reduce(
        (highestIndex, card, currentIndex, cards) =>
          card.baseZ > cards[highestIndex].baseZ ? currentIndex : highestIndex,
        0
      );

      return cardIndex === topCardIndex
        ? 'opacity-0 bg-slate-800 duration-200'
        : 'opacity-25 bg-slate-800 duration-[1000ms]';
    }

    return cardIndex === hoveredCard
      ? 'opacity-0 bg-slate-800 duration-200'
      : 'opacity-25 bg-slate-800 duration-[1000ms]';
  }
</script>

<section class="w-full relative pt-12 md:pt-14 lg:pt-16 bg-fuchsia-200 dark:bg-purple-900">
  <div
    class="absolute left-0 right-0 top-0 bg-primary h-12 md:h-14 lg:h-16 border-slate-900 dark:border-slate-700 border-y-4 flex items-center"
  >
    <MarqueeText direction="left">
      <div class="flex items-center gap-8 mx-4">
        {#each topMarqueeTexts as text}
          <span class="md:text-lg lg:text-xl font-medium">{text}</span>
        {/each}
      </div>
    </MarqueeText>
  </div>
  <Wrappper>
    <div
      class="w-full flex flex-col-reverse lg:flex-row gap-20 sm:gap-4 lg:gap-5 xl:gap-6 md:justify-between h-max pt-10 sm:pt-12 md:pt-14 lg:pt-16 pb-16"
    >
      <!-- About Card -->
      <div
        class="w-full border-4 border-slate-900 dark:border-slate-700 px-2 py-6 sm:p-8 bg-slate-100 dark:bg-fuchsia-400 z-38"
      >
        <Saos animation={'scale-up-center 1s cubic-bezier(0.4, 0, 0.2, 1) both'} once>
          <h2 class="mb-4 md:mb-6 lg:mb-8 duration-500" id="about">
            About <u class="select-none">Me</u>
          </h2>
        </Saos>
        {#each aboutTexts as aboutText, i}
          <Saos animation={'scale-up-center 1s cubic-bezier(0.4, 0, 0.2, 1) both'} once>
            {#if i == 0}
              <p
                class="active:text-indigo-900 text-justify mb-2
                  first-letter:leading-[0.8]
                  first-letter:font-cascadia-mono first-letter:capitalize
                  first-letter:text-[3.67rem] first-letter:float-left first-letter:mr-1"
              >
                {aboutText}
              </p>
            {:else}
              <p class="active:text-indigo-900 text-justify mb-2 first-letter:font-bold">
                {aboutText}
              </p>
            {/if}
          </Saos>
        {/each}

        <Saos animation={'scale-up-center 1s cubic-bezier(0.4, 0, 0.2, 1) both'} once>
          <p class="first-letter:font-bold my-6 italic">
            To learn more about my experience and skills, feel free to visit my LinkedIn profile:
          </p>
          <div class="flex">
            <Button
              href={linkedInLink}
              target="_blank"
              rel="noreferrer"
              variant="linkedIn"
              noDarkVariant={true}
              className="max-sm:mx-auto"
            >
              {#snippet icon()}
                <Fa icon={faExternalLink} />
              {/snippet}Visit LinkedIn
            </Button>
          </div>
        </Saos>
      </div>
      <!-- Photo Cards Card -->
      <div class="w-full">
        <div
          class="h-full w-full max-h-150
            overflow-visible relative
            flex items-center justify-center
            border-4 border-slate-900 dark:border-slate-700
            bg-amber-200 dark:bg-amber-400
            aspect-square md:aspect-4/3 lg:aspect-auto
            bg-halftone bg-halftone-45"
          aria-label="Illustrated About Me"
          role="region"
          onmouseleave={() => (hoveredCard = null)}
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
              imgOverlayFxClass={getImgOverlayFxCls(i)}
              animDelayMs={1000 + (photoCards.length - 1 - i) * 676}
              zIndex={getZIndex(i)}
              onmouseenter={() => (hoveredCard = i)}
              halftone
            />
          {/each}
        </div>
      </div>
    </div>
  </Wrappper>
</section>
