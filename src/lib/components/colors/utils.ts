import { tagColors } from './colors';
import type { TagColorKey, TagColors } from './types';

export function generateTagColorKeys(tags: string[]): TagColorKey[] {
  const unusedTags = new Set<string>(
    Object.keys(tagColors).filter((tag) => tagColors[tag as keyof TagColors].gradient === undefined)
  );

  return tags.map((tag) => {
    if (Object.prototype.hasOwnProperty.call(tagColors, tag)) {
      unusedTags.delete(tag);
      return { key: tag as keyof TagColors, name: tag };
    }

    const unused = Array.from(unusedTags);
    let key: keyof TagColors = 'default';
    if (unused.length !== 0) {
      key = unused[Math.floor(Math.random() * unused.length)] as keyof TagColors;
      unusedTags.delete(key);
    }
    return { key, name: tag };
  });
}
