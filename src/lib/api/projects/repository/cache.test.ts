import { describe, it, expect, vi, beforeEach } from 'vitest';
import { LocalStorageCache } from './cache';

vi.mock('$app/environment', () => ({ browser: true }));

describe('LocalStorageCache', () => {
  let cache: LocalStorageCache;

  beforeEach(() => {
    localStorage.clear();
    cache = new LocalStorageCache('test:', '1');
  });

  it('stores and retrieves a value', () => {
    cache.set('key1', { foo: 'bar' });
    expect(cache.get('key1')).toEqual({ foo: 'bar' });
  });

  it('returns null for missing key', () => {
    expect(cache.get('nonexistent')).toBeNull();
  });

  it('returns null after removal', () => {
    cache.set('key1', 'value');
    cache.remove('key1');
    expect(cache.get('key1')).toBeNull();
  });

  it('returns null on version mismatch', () => {
    cache.set('key1', 'value');
    const cacheV2 = new LocalStorageCache('test:', '2');
    expect(cacheV2.get('key1')).toBeNull();
  });

  it('expires entry when TTL has passed', () => {
    cache.set('key1', 'value', -1);
    expect(cache.get('key1')).toBeNull();
  });

  it('peek returns data even after TTL expiry', () => {
    cache.set('key1', 'value', -1);
    expect(cache.get('key1')).toBeNull();
    expect(cache.peek('key1')).toBe('value');
  });

  it('peek returns null for nonexistent key', () => {
    expect(cache.peek('missing')).toBeNull();
  });

  it('persists entry to localStorage', () => {
    cache.set('key1', 'stored-data');
    const raw = localStorage.getItem('test:key1');
    expect(raw).toBeTruthy();
    const parsed = JSON.parse(raw!);
    expect(parsed.data).toBe('stored-data');
    expect(parsed.version).toBe('1');
  });

  it('clears all keys with the configured prefix', () => {
    cache.set('a', 1);
    cache.set('b', 2);
    cache.clear();
    expect(cache.get('a')).toBeNull();
    expect(cache.get('b')).toBeNull();
  });

  it('only clears keys with matching prefix', () => {
    localStorage.setItem('other:key', 'preserved');
    cache.set('x', 'value');
    cache.clear();
    expect(localStorage.getItem('other:key')).toBe('preserved');
  });

  it('reads from in-memory cache even if localStorage has data', () => {
    localStorage.setItem('test:mem', JSON.stringify({ data: 'wrong', version: '1' }));
    cache.set('mem', 'correct');
    expect(cache.get('mem')).toBe('correct');
  });
});
