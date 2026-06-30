export function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function createSlug(headingText: string) {
  return headingText
    .toLowerCase()
    .trim()
    .replace(/`/g, '')
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function stripHtmlTagsDOM(htmlString: string) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, 'text/html');
  return doc.body.textContent || '';
}
