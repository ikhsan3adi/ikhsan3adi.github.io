import { describe, it, expect } from 'vitest';
import { clamp, createSlug, stripHtmlTagsDOM, toStatusMessage } from './utils';

describe('clamp', () => {
  it('returns value within range', () => {
    expect(clamp(5, 0, 10)).toBe(5);
  });

  it('clamps to min', () => {
    expect(clamp(-5, 0, 10)).toBe(0);
  });

  it('clamps to max', () => {
    expect(clamp(15, 0, 10)).toBe(10);
  });

  it('handles equal boundaries', () => {
    expect(clamp(5, 5, 5)).toBe(5);
  });
});

describe('createSlug', () => {
  it('lowercases and trims', () => {
    expect(createSlug('  Hello World  ')).toBe('hello-world');
  });

  it('removes backticks', () => {
    expect(createSlug('`code` block')).toBe('code-block');
  });

  it('removes special chars', () => {
    expect(createSlug('Hello & World!')).toBe('hello-world');
  });

  it('collapses whitespace and underscores', () => {
    expect(createSlug('foo   bar_baz')).toBe('foo-bar-baz');
  });

  it('removes leading and trailing hyphens', () => {
    expect(createSlug('--hello--')).toBe('hello');
  });

  it('handles empty string', () => {
    expect(createSlug('')).toBe('');
  });
});

describe('stripHtmlTagsDOM', () => {
  it('strips HTML tags', () => {
    expect(stripHtmlTagsDOM('<p>Hello <b>World</b></p>')).toBe('Hello World');
  });

  it('returns empty string for empty input', () => {
    expect(stripHtmlTagsDOM('')).toBe('');
  });

  it('handles text without HTML', () => {
    expect(stripHtmlTagsDOM('plain text')).toBe('plain text');
  });
});

describe('toStatusMessage', () => {
  it('returns "Rate limited" for rate limit errors', () => {
    expect(toStatusMessage('API rate limit exceeded')).toBe('Rate limited');
    expect(toStatusMessage('rate limited')).toBe('Rate limited');
  });

  it('returns "No connection" for network errors', () => {
    expect(toStatusMessage('Failed to fetch')).toBe('No connection');
    expect(toStatusMessage('NetworkError')).toBe('No connection');
    expect(toStatusMessage('network timeout')).toBe('No connection');
  });

  it('returns "Not found" for 404', () => {
    expect(toStatusMessage('404 Not Found')).toBe('Not found');
    expect(toStatusMessage('not found')).toBe('Not found');
  });

  it('returns "Access denied" for 403', () => {
    expect(toStatusMessage('403 Forbidden')).toBe('Access denied');
    expect(toStatusMessage('forbidden')).toBe('Access denied');
  });

  it('returns "Timed out" for timeouts', () => {
    expect(toStatusMessage('timeout')).toBe('Timed out');
    expect(toStatusMessage('timed out')).toBe('Timed out');
  });

  it('returns "Could not load" for unknown errors', () => {
    expect(toStatusMessage('something else')).toBe('Could not load');
  });
});
