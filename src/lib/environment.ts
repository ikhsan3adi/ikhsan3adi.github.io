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

console.info('Browser vendor:', browserVendor);
