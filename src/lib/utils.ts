export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

export function areSetsEqual(setA: Set<unknown>, setB: Set<unknown>): boolean {
  return setA.size === setB.size && setA.isSubsetOf(setB) && setB.isSubsetOf(setA);
}

export function createSlug(headingText: string): string {
  return headingText
    .toLowerCase()
    .trim()
    .replace(/`/g, '')
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function stripHtmlTagsDOM(htmlString: string): string {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, 'text/html');
  return doc.body.textContent || '';
}
