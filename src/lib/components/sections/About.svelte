<script lang="ts">
  import { linkedInLink } from '$lib/api/socials';
  import type { ButtonColorVariant } from '$lib/components/colors';

  import Button from '$lib/components/buttons/Button.svelte';
  import PhotoCard from '$lib/components/cards/PhotoCard.svelte';
  import MarqueeText from '$lib/components/widgets/MarqueeText.svelte';
  import Wrappper from '$lib/components/widgets/Wrappper.svelte';

  import { topMarqueeTexts } from '$lib/api/about';
  import { faExternalLink } from '@fortawesome/free-solid-svg-icons';
  import Saos from 'saos';
  import Fa from 'svelte-fa';

  const primaryButton: ButtonColorVariant = { key: 'primary' };

  let hoveredCard: number | null = null;

  // TODO: Replace the placeholder images with real photos and update the descriptions accordingly
  const cards = [
    {
      title: 'Random Photo',
      description: 'A random photo that I took when I was in [REDACTED]',
      imgSrc: 'https://placehold.co/160x120/fff/280609?text=Random+Photo&font=lora',
      bgClass: 'bg-emerald-200 dark:bg-emerald-400',
      transformClass: 'rotate-2 -bottom-12 right-4',
      cardSizeClass: 'w-80',
      imgClass: 'aspect-[4/3]',
      baseZ: 1
    },
    {
      title: 'Me at coding',
      description: 'Opening my laptop to vibe code bugs',
      imgSrc: 'https://placehold.co/160x90/fff/280609?text=Coding+Vibes&font=lora',
      bgClass: 'bg-fuchsia-200 dark:bg-fuchsia-400',
      transformClass: 'rotate-1 top-2 lg:-top-12 -right-2',
      cardSizeClass: 'w-96',
      imgClass: 'aspect-[16/9]',
      baseZ: 2
    },
    {
      title: 'Me',
      description: 'This is me. The photo was taken at my bedroom',
      imgSrc: 'https://placehold.co/300x400/fff/280609?text=Personal+Photo&font=lora',
      bgClass: 'bg-indigo-200 dark:bg-indigo-400',
      transformClass: 'rotate-[-1.5deg] top-0 lg:-top-3 left-0',
      cardSizeClass: 'w-72',
      imgClass: 'aspect-[3/4]',
      baseZ: 3
    }
  ];

  function getZIndex(cardIndex: number): number {
    if (hoveredCard === null) return cards[cardIndex].baseZ;
    if (hoveredCard === cardIndex) return 100;
    return cards[cardIndex].baseZ;
  }
</script>

<section class="w-full relative pt-16 bg-fuchsia-200 dark:bg-purple-900">
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
    <div class="w-full py-16">
      <Saos animation={'scale-up-center 1s cubic-bezier(0.4, 0, 0.2, 1) both'} once />
      <div
        class="w-full flex flex-col gap-4 lg:gap-5 xl:gap-6 lg:flex-row md:justify-between h-max"
      >
        <div
          class="w-full border-4 border-slate-900 dark:border-slate-700 p-8 bg-slate-100 dark:bg-fuchsia-400"
        >
          <Saos animation={'scale-up-center 1s cubic-bezier(0.4, 0, 0.2, 1) both'} once>
            <h1 class="mb-4 md:mb-6 lg:mb-8 duration-500" id="about">About Me</h1>
            <p class="">
              I'm Ikhsan, a passionate software engineer with a love for problem-solving and
              creating impactful solutions. I thrive on continuous learning and enjoy collaborating
              with teams to tackle challenges and deliver high-quality software solutions. Let's
              build something great together!
            </p>
            <p class="my-6">
              To learn more about my experience and skills, feel free to visit my LinkedIn profile:
            </p>
            <a href={linkedInLink} target="_blank">
              <Button variant={primaryButton} noDarkVariant={true}>
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
            {#each cards as card, i}
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
