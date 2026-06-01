<script>
  import { onMount } from 'svelte';

  let {
    animation = 'none',
    animation_out = 'none; opacity: 0',
    once = false,
    top = 0,
    bottom = 0,
    css_observer = '',
    css_animation = '',
    outerClass = '',
    innerClass = '',
    onupdate = undefined,
    children
  } = $props();

  let observing = $state(true);

  $effect(() => {
    if (onupdate) {
      onupdate({ observing });
    }
  });

  const countainer = `__saos-${Math.random()}__`;

  /**
   * @param {HTMLElement} box
   */
  function intersection_verify(box) {
    // bottom left top right
    const rootMargin = `${-bottom}px 0px ${-top}px 0px`;
    const observer = new IntersectionObserver(
      (entries) => {
        observing = entries[0].isIntersecting;
        if (observing && once) {
          observer.unobserve(box);
        }
      },
      {
        rootMargin
      }
    );
    observer.observe(box);
    return () => observer.unobserve(box);
  }

  /**
   * @param {HTMLElement} box
   */
  function bounding_verify(box) {
    const verify = () => {
      const c = box.getBoundingClientRect();
      observing = c.top + top < window.innerHeight && c.bottom - bottom > 0;
      if (observing && once) {
        window.removeEventListener('scroll', verify);
      }
    };

    verify();
    window.addEventListener('scroll', verify);
    return () => window.removeEventListener('scroll', verify);
  }

  onMount(() => {
    const box = document.getElementById(countainer);

    if (!box) return;

    if (typeof IntersectionObserver !== 'undefined') {
      return intersection_verify(box);
    } else {
      return bounding_verify(box);
    }
  });
</script>

<div id={countainer} style={css_observer} class={outerClass}>
  {#if observing}
    <div style="animation: {animation}; {css_animation}" class={innerClass}>
      {#if children}
        {@render children()}
      {/if}
    </div>
  {:else}
    <div style="animation: {animation_out}; {css_animation}" class={innerClass}>
      {#if children}
        {@render children()}
      {/if}
    </div>
  {/if}
</div>
