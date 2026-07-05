export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
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

export function toStatusMessage(reason: string): string {
  if (/rate\s*limit/i.test(reason)) return 'Rate limited';
  if (/Failed to fetch|NetworkError|network/i.test(reason)) return 'No connection';
  if (/not found|404/i.test(reason)) return 'Not found';
  if (/forbidden|403/i.test(reason)) return 'Access denied';
  if (/timeout|timed?\s*out/i.test(reason)) return 'Timed out';
  return 'Could not load';
}
