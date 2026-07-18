function getBrowserVendor(): 'chromium' | 'safari' | 'firefox' | 'other' {
  switch (globalThis.navigator.vendor) {
    case 'Google Inc.':
      return 'chromium';
    case 'Apple Computer, Inc.':
      return 'safari';
    case '':
      return 'firefox';
    default:
      return 'other';
  }
}

export const browserVendor = getBrowserVendor();

export function areYouIndonesian(): boolean {
  return globalThis.navigator.language === 'id';
}

console.info('Browser vendor:', browserVendor);
console.info('Browser lang:', globalThis.navigator.language);
