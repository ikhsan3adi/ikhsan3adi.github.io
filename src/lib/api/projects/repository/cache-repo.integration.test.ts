import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { CachedRepository } from './cached';
import { GitHubRepository } from './github';
import { LocalStorageCache } from './cache';
import type { Project } from '$lib/api/projects/types';

vi.mock('$app/environment', () => ({ browser: true }));

const repoJson = {
  description: 'Test repo',
  language: 'JavaScript',
  stargazers_count: 50,
  forks: 10,
  open_issues_count: 3,
  html_url: 'https://github.com/user/project',
  homepage: 'https://project.example.com'
};

function okResponse(body: unknown): Response {
  return new Response(JSON.stringify(body), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}

function textResponse(body: string): Response {
  return new Response(body, { status: 200 });
}

function errorResponse(status: number): Response {
  return new Response(null, { status });
}

function createProject(overrides?: Partial<Project>): Project {
  return {
    id: 'int-test-project',
    name: 'Integration Test Project',
    url: 'https://api.github.com/repos/user/project',
    readmeBaseUrl: 'https://raw.githubusercontent.com/user/project',
    imageUrl: '/images/project.png',
    tags: ['javascript'],
    readmeUrl: 'https://raw.githubusercontent.com/user/project/main/README.md',
    ...overrides
  };
}

function makeMockFetch(overrides?: {
  repo?: () => Response;
  releases?: () => Response;
  pulls?: () => Response;
  readme?: () => Response;
}): typeof globalThis.fetch {
  const handlers = {
    repo: () => okResponse(repoJson),
    releases: () => okResponse([]),
    pulls: () => okResponse([]),
    readme: () => textResponse('# Readme'),
    ...overrides
  };

  return ((url: string) => {
    if (url === 'https://api.github.com/repos/user/project')
      return Promise.resolve(handlers.repo());
    if (url.includes('/releases')) return Promise.resolve(handlers.releases());
    if (url.includes('/pulls')) return Promise.resolve(handlers.pulls());
    if (url.includes('raw.githubusercontent.com')) return Promise.resolve(handlers.readme());
    return Promise.reject(new Error(`unexpected url: ${url}`));
  }) as unknown as typeof globalThis.fetch;
}

describe('CachedRepository + LocalStorageCache integration', () => {
  let cache: LocalStorageCache;
  let cachedRepo: CachedRepository;
  const project = createProject();

  beforeEach(() => {
    vi.stubEnv('DEV', false);
    localStorage.clear();
    cache = new LocalStorageCache('int:', '1');
    cachedRepo = new CachedRepository(new GitHubRepository(), cache);
  });

  afterEach(() => {
    vi.unstubAllEnvs();
  });

  describe('fetchProject', () => {
    it('fetches from GitHub on miss and caches result', async () => {
      const fetch = makeMockFetch();

      const first = await cachedRepo.fetchProject(project, fetch);
      expect(first.starsCount).toBe(50);

      const cached = cache.get<Project>(project.id);
      expect(cached).toBeTruthy();
      expect(cached!.starsCount).toBe(50);
    });

    it('returns cached result on subsequent calls without GitHub fetch', async () => {
      const spy = vi.fn();
      const fetch = makeMockFetch({
        repo: () => {
          spy();
          return okResponse(repoJson);
        }
      });

      await cachedRepo.fetchProject(project, fetch);
      const firstCount = spy.mock.calls.length;

      await cachedRepo.fetchProject(project, fetch);
      const secondCount = spy.mock.calls.length;

      expect(firstCount).toBe(1);
      expect(secondCount).toBe(1);
    });

    it('serves stale data when GitHub API fails and cache has expired entry', async () => {
      cache.set(project.id, { ...project, starsCount: 99 }, -1);
      const fetch = makeMockFetch({ repo: () => errorResponse(500) });

      const result = await cachedRepo.fetchProject(project, fetch);

      expect(result.starsCount).toBe(99);
    });

    it('throws when GitHub API fails and no stale data is available', async () => {
      const fetch = makeMockFetch({ repo: () => errorResponse(500) });

      await expect(cachedRepo.fetchProject(project, fetch)).rejects.toThrow();
    });

    it('re-fetches after cache entry expires', async () => {
      cache.set(project.id, { ...project, starsCount: 1 }, -1);
      let fetchCount = 0;
      const fetch = makeMockFetch({
        repo: () => {
          fetchCount++;
          return okResponse(repoJson);
        }
      });

      const result = await cachedRepo.fetchProject(project, fetch);

      expect(result.starsCount).toBe(50);
      expect(fetchCount).toBe(1);
    });
  });

  describe('fetchReadme', () => {
    it('fetches readme on miss and caches it', async () => {
      const fetch = makeMockFetch({ readme: () => textResponse('# Hello World') });

      const first = await cachedRepo.fetchReadme(project, fetch);
      expect(first).toBe('# Hello World');

      const cached = cache.get<string>('readme:int-test-project');
      expect(cached).toBe('# Hello World');
    });

    it('returns cached readme without fetching again', async () => {
      const readmeSpy = vi.fn();
      const fetch = makeMockFetch({
        readme: () => {
          readmeSpy();
          return textResponse('# Readme');
        }
      });

      await cachedRepo.fetchReadme(project, fetch);
      const firstCount = readmeSpy.mock.calls.length;

      await cachedRepo.fetchReadme(project, fetch);
      const secondCount = readmeSpy.mock.calls.length;

      expect(firstCount).toBe(1);
      expect(secondCount).toBe(1);
    });
  });
});
