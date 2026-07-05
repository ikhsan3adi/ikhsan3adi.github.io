interface UseStaggeredParams {
  itemCount: number;
  onProgress: (visibleCount: number) => void;
  skip?: boolean;
  delay?: number;
  staggerDelay?: number;
}

export function useStaggered(
  node: Element,
  params: UseStaggeredParams
): { destroy(): void; update(p: UseStaggeredParams): void } {
  let { itemCount, onProgress, skip = false, delay = 1676, staggerDelay = 367 } = params;

  let destroyed = false;
  let observer: IntersectionObserver | null = null;
  let timer: ReturnType<typeof setTimeout> | null = null;

  function revealAll() {
    observer?.disconnect();
    observer = null;
    if (timer !== null) {
      clearTimeout(timer);
      timer = null;
    }
    onProgress(itemCount);
  }

  function startObserver() {
    observer = new IntersectionObserver((entries) => {
      const entry = entries.find((e) => e.isIntersecting);
      if (!entry || destroyed) return;

      observer?.disconnect();
      observer = null;

      timer = setTimeout(async () => {
        if (destroyed) return;

        for (let i = 0; i < itemCount; i++) {
          if (destroyed) return;
          onProgress(i + 1);
          await new Promise((r) => setTimeout(r, staggerDelay));
        }
      }, delay);
    });

    observer.observe(node);
  }

  if (skip) {
    revealAll();
  } else {
    startObserver();
  }

  return {
    destroy() {
      destroyed = true;
      observer?.disconnect();
      if (timer !== null) clearTimeout(timer);
    },
    update(p: UseStaggeredParams) {
      itemCount = p.itemCount;
      onProgress = p.onProgress;
      delay = p.delay ?? delay;
      staggerDelay = p.staggerDelay ?? staggerDelay;

      const newSkip = p.skip ?? skip;
      if (newSkip && !skip) {
        revealAll();
      }
      skip = newSkip;
    }
  };
}
