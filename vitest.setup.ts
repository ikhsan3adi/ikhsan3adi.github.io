if (typeof globalThis.localStorage === 'undefined') {
  let store: Record<string, string> = {};
  globalThis.localStorage = {
    getItem: (key: string) => store[key] ?? null,
    setItem: (key: string, value: string) => {
      store[key] = String(value);
    },
    removeItem: (key: string) => {
      delete store[key];
    },
    clear: () => {
      store = {};
    },
    get length() {
      return Object.keys(store).length;
    },
    key: (index: number) => Object.keys(store)[index] ?? null
  } as Storage;
}

// Polyfill Element.prototype.animate for jsdom (used by Svelte transitions)
if (typeof Element.prototype.animate === 'undefined') {
  Element.prototype.animate = () =>
    ({
      finished: Promise.resolve(),
      cancel: () => {},
      play: () => {},
      pause: () => {},
      reverse: () => {},
      finish: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      currentTime: 0,
      startTime: 0,
      playbackRate: 1
    }) as unknown as Animation;
}
