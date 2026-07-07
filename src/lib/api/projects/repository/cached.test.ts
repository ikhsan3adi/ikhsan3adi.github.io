import { describe, it, expect, vi, beforeEach } from 'vitest';
import { CachedRepository } from './cached';
import type { ProjectRepository, CacheStore } from './types';
import type { Project } from '$lib/api/projects/types';

function createProject(overrides?: Partial<Project>): Project {
  return {
    id: 'test-project',
    name: 'Test Project',
    url: 'https://api.github.com/repos/user/test',
    readmeBaseUrl: 'https://raw.githubusercontent.com/user/test',
    imageUrl: '/images/test.png',
    tags: ['svelte'],
    ...overrides
  };
}

function createMockRepo(): ProjectRepository {
  return {
    fetchProject: vi.fn(),
    fetchReadme: vi.fn()
  };
}

function createMockCache(): CacheStore {
  return {
    get: vi.fn(),
    peek: vi.fn(),
    set: vi.fn(),
    remove: vi.fn(),
    clear: vi.fn()
  };
}

describe('CachedRepository', () => {
  let inner: ProjectRepository;
  let cache: CacheStore;
  let cachedRepo: CachedRepository;
  const project = createProject();
  const fetch = vi.fn();

  beforeEach(() => {
    inner = createMockRepo();
    cache = createMockCache();
    cachedRepo = new CachedRepository(inner, cache);
  });

  describe('fetchProject', () => {
    it('returns cached project without calling inner', async () => {
      const cached = createProject({ starsCount: 42 });
      vi.mocked(cache.get).mockReturnValue(cached);

      const result = await cachedRepo.fetchProject(project, fetch);

      expect(result).toBe(cached);
      expect(inner.fetchProject).not.toHaveBeenCalled();
    });

    it('calls inner and caches result on cache miss', async () => {
      vi.mocked(cache.get).mockReturnValue(null);
      vi.mocked(inner.fetchProject).mockResolvedValue(createProject({ starsCount: 10 }));

      const result = await cachedRepo.fetchProject(project, fetch);

      expect(result.starsCount).toBe(10);
      expect(cache.set).toHaveBeenCalledWith(project.id, result, expect.any(Number));
    });

    it('returns stale data when inner fetch fails', async () => {
      const stale = createProject({ starsCount: 5 });
      vi.mocked(cache.get).mockReturnValue(null);
      vi.mocked(cache.peek).mockReturnValue(stale);
      vi.mocked(inner.fetchProject).mockRejectedValue(new Error('API down'));

      const result = await cachedRepo.fetchProject(project, fetch);

      expect(result).toBe(stale);
      expect(cache.set).not.toHaveBeenCalled();
    });

    it('throws on inner failure when no stale or dev fallback', async () => {
      vi.stubEnv('DEV', false);
      vi.mocked(cache.get).mockReturnValue(null);
      vi.mocked(cache.peek).mockReturnValue(null);
      vi.mocked(inner.fetchProject).mockRejectedValue(new Error('API error'));

      await expect(cachedRepo.fetchProject(project, fetch)).rejects.toThrow('API error');
      vi.unstubAllEnvs();
    });

    it('returns dummy project with fake stats in dev mode on inner failure', async () => {
      vi.stubEnv('DEV', true);
      vi.mocked(cache.get).mockReturnValue(null);
      vi.mocked(cache.peek).mockReturnValue(null);
      vi.mocked(inner.fetchProject).mockRejectedValue(new Error('fail'));

      const result = await cachedRepo.fetchProject(project, fetch);

      expect(result.starsCount).toBe(767);
      expect(result.forksCount).toBe(67);
      expect(result.downloadsCount).toBe(67);
      expect(result.issuesCount).toBe(67);
      expect(result.pullRequestsCount).toBe(67);
      expect(cache.set).toHaveBeenCalledOnce();
      vi.unstubAllEnvs();
    });
  });

  describe('fetchReadme', () => {
    it('returns cached readme without calling inner', async () => {
      vi.mocked(cache.get).mockReturnValue('# Cached Readme');

      const result = await cachedRepo.fetchReadme(project, fetch);

      expect(result).toBe('# Cached Readme');
      expect(inner.fetchReadme).not.toHaveBeenCalled();
    });

    it('calls inner and caches result on cache miss', async () => {
      vi.mocked(cache.get).mockReturnValue(null);
      vi.mocked(inner.fetchReadme).mockResolvedValue('# Fresh Readme');

      const result = await cachedRepo.fetchReadme(project, fetch);

      expect(result).toBe('# Fresh Readme');
      expect(cache.set).toHaveBeenCalledWith(
        'readme:test-project',
        '# Fresh Readme',
        expect.any(Number)
      );
    });

    it('does not cache null readme result', async () => {
      vi.mocked(cache.get).mockReturnValue(null);
      vi.mocked(inner.fetchReadme).mockResolvedValue(null);

      const result = await cachedRepo.fetchReadme(project, fetch);

      expect(result).toBeNull();
      expect(cache.set).not.toHaveBeenCalled();
    });

    it('returns stale readme on inner failure', async () => {
      vi.mocked(cache.get).mockReturnValue(null);
      vi.mocked(cache.peek).mockReturnValue('# Stale Readme');
      vi.mocked(inner.fetchReadme).mockRejectedValue(new Error('fail'));

      const result = await cachedRepo.fetchReadme(project, fetch);

      expect(result).toBe('# Stale Readme');
    });

    it('re-throws on inner failure when no stale data', async () => {
      vi.mocked(cache.get).mockReturnValue(null);
      vi.mocked(cache.peek).mockReturnValue(null);
      vi.mocked(inner.fetchReadme).mockRejectedValue(new Error('fail'));

      await expect(cachedRepo.fetchReadme(project, fetch)).rejects.toThrow('fail');
    });
  });
});
