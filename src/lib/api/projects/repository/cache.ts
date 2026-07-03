import { browser } from '$app/environment';
import type { CacheStore, CacheEntry } from './types';

class LocalStorageCache implements CacheStore {
  private memoryCache = new Map<string, CacheEntry>();

  constructor(
    private prefix = 'project:',
    private version = '1'
  ) {}

  private buildKey(key: string): string {
    return `${this.prefix}${key}`;
  }

  private isExpired(entry: CacheEntry): boolean {
    if (!entry.expiresAt) return false;
    return Date.now() > entry.expiresAt;
  }

  private readEntry(key: string): CacheEntry | undefined {
    const cacheKey = this.buildKey(key);
    let entry: CacheEntry | undefined;

    if (browser) {
      try {
        const raw = localStorage.getItem(cacheKey);
        if (raw) {
          entry = JSON.parse(raw) as CacheEntry;
        }
      } catch {
        // ignore parse errors
      }
    }

    return entry ?? this.memoryCache.get(cacheKey);
  }

  get<T>(key: string): T | null {
    const entry = this.readEntry(key);
    if (!entry) return null;

    if (entry.version !== this.version || this.isExpired(entry)) {
      this.remove(key);
      return null;
    }

    return entry.data as T;
  }

  peek<T>(key: string): T | null {
    const entry = this.readEntry(key);
    if (!entry) return null;
    return entry.data as T;
  }

  set<T>(key: string, value: T, ttlMs?: number): void {
    const cacheKey = this.buildKey(key);
    const entry: CacheEntry = {
      data: value,
      version: this.version,
      expiresAt: ttlMs ? Date.now() + ttlMs : undefined
    };

    this.memoryCache.set(cacheKey, entry);

    if (browser) {
      try {
        localStorage.setItem(cacheKey, JSON.stringify(entry));
      } catch {
        // ignore write errors
      }
    }
  }

  remove(key: string): void {
    const cacheKey = this.buildKey(key);
    this.memoryCache.delete(cacheKey);

    if (browser) {
      try {
        localStorage.removeItem(cacheKey);
      } catch {
        // ignore
      }
    }
  }

  clear(): void {
    this.memoryCache.clear();

    if (browser) {
      try {
        const keysToRemove: string[] = [];
        for (let i = 0; i < localStorage.length; i++) {
          const k = localStorage.key(i);
          if (k?.startsWith(this.prefix)) {
            keysToRemove.push(k);
          }
        }
        for (const k of keysToRemove) {
          localStorage.removeItem(k);
        }
      } catch {
        // ignore
      }
    }
  }
}

export { LocalStorageCache };
