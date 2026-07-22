import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { ProjectService } from './service';
import { GitHubRepository } from './repository/github';
import { CachedRepository } from './repository/cached';
import { LocalStorageCache } from './repository/cache';
import { projectStore } from './store.svelte';
import { initialProjects } from './projects';

vi.mock('$app/environment', () => ({ browser: true }));

const repoJson = {
  description: 'A test repo description',
  language: 'TypeScript',
  stargazers_count: 100,
  forks: 25,
  open_issues_count: 5,
  html_url: 'https://github.com/user/test',
  homepage: 'https://test.example.com'
};

function okResponse(body: unknown, headers?: Record<string, string>): Response {
  return new Response(JSON.stringify(body), {
    status: 200,
    headers: { 'Content-Type': 'application/json', ...headers }
  });
}

function textResponse(body: string): Response {
  return new Response(body, { status: 200 });
}

function errorResponse(status: number, statusText: string): Response {
  return new Response(null, { status, statusText });
}

function createMockFetch(overrides?: {
  projectResponse?: () => Response;
  releasesResponse?: () => Response;
  pullsResponse?: () => Response;
}): typeof globalThis.fetch {
  const handlers = {
    projectResponse: () => okResponse(repoJson),
    releasesResponse: () => okResponse([]),
    pullsResponse: () => okResponse([]),
    ...overrides
  };

  return ((url: string) => {
    if (url.includes('/releases')) return Promise.resolve(handlers.releasesResponse());
    if (url.includes('/pulls')) return Promise.resolve(handlers.pullsResponse());
    if (initialProjects.some((p) => url === p.url))
      return Promise.resolve(handlers.projectResponse());
    return Promise.reject(new Error(`unexpected url: ${url}`));
  }) as unknown as typeof globalThis.fetch;
}

describe('ProjectService integration', () => {
  let service: ProjectService;
  let projectCount: number;

  beforeEach(() => {
    vi.stubEnv('DEV', false);
    localStorage.clear();
    projectStore.projects = [];
    projectStore.loading = false;
    projectStore.error = null;
    projectStore.projectDetail = null;
    projectStore.detailLoading = false;
    projectStore.detailError = null;

    projectCount = initialProjects.length;
  });

  afterEach(() => {
    vi.unstubAllEnvs();
  });

  function createService() {
    const cache = new LocalStorageCache('test:int:', '1');
    const repo = new CachedRepository(new GitHubRepository(), cache);
    return new ProjectService(repo);
  }

  describe('init', () => {
    it('populates all projects with enriched data on success', async () => {
      service = createService();
      const fetch = createMockFetch();

      await service.init(fetch);

      expect(projectStore.loading).toBe(false);
      expect(projectStore.error).toBeNull();
      expect(projectStore.projects).toHaveLength(projectCount);
      expect(projectStore.projects[0].starsCount).toBe(100);
      expect(projectStore.projects[0].forksCount).toBe(25);
      expect(projectStore.projects[0].issuesCount).toBe(5);
      expect(projectStore.projects[0].repositoryUrl).toBe('https://github.com/user/test');
    });

    it('serves cached data on subsequent init (no second GitHub fetch)', async () => {
      service = createService();
      const fetch = createMockFetch();

      await service.init(fetch);

      const projectCounts = vi.fn();
      const cachedFetch = ((url: string) => {
        projectCounts();
        if (initialProjects.some((p) => url === p.url))
          return Promise.resolve(okResponse(repoJson));
        return Promise.reject(new Error(`unexpected url: ${url}`));
      }) as unknown as typeof globalThis.fetch;

      const service2 = createService();
      await service2.init(cachedFetch);

      expect(projectStore.loading).toBe(false);
      expect(projectStore.projects[0].starsCount).toBe(100);
    });

    it('handles partial failures without setting global error', async () => {
      service = createService();
      const failUrls = new Set([initialProjects[0].url, initialProjects[1].url]);
      const partialFetch = ((url: string) => {
        if (url.includes('/releases')) return Promise.resolve(okResponse([]));
        if (url.includes('/pulls')) return Promise.resolve(okResponse([]));
        if (failUrls.has(url)) return Promise.resolve(errorResponse(500, 'Server Error'));
        if (initialProjects.some((p) => url === p.url))
          return Promise.resolve(okResponse(repoJson));
        return Promise.reject(new Error(`unexpected url: ${url}`));
      }) as unknown as typeof globalThis.fetch;

      await service.init(partialFetch);

      expect(projectStore.error).toBeNull();
      expect(projectStore.loading).toBe(false);
      expect(projectStore.projects[0].statusMessage).toBeTruthy();
      expect(projectStore.projects[3].starsCount).toBe(100);
    });

    it('sets error when all projects fail', async () => {
      service = createService();
      const failFetch = ((url: string) => {
        if (url.includes('/releases')) return Promise.resolve(errorResponse(500, 'Fail'));
        if (url.includes('/pulls')) return Promise.resolve(errorResponse(500, 'Fail'));
        return Promise.resolve(errorResponse(500, 'API Down'));
      }) as unknown as typeof globalThis.fetch;

      await service.init(failFetch);

      expect(projectStore.error).toBeTruthy();
      expect(projectStore.loading).toBe(false);
    });
  });

  describe('openDetail', () => {
    it('enriches a single project with GitHub stats', async () => {
      service = createService();
      const fetch = createMockFetch();

      await service.openDetail(initialProjects[0], fetch);

      expect(projectStore.detailLoading).toBe(false);
      expect(projectStore.detailError).toBeNull();
      expect(projectStore.projectDetail).toBeTruthy();
      expect(projectStore.projectDetail!.starsCount).toBe(100);
      expect(projectStore.projectDetail!.repositoryUrl).toBe('https://github.com/user/test');
    });

    it('sets detail error on API failure', async () => {
      service = createService();
      const failFetch = (() =>
        Promise.resolve(errorResponse(500, 'Server Error'))) as unknown as typeof globalThis.fetch;

      await service.openDetail(initialProjects[0], failFetch);

      expect(projectStore.detailError).toBeTruthy();
      expect(projectStore.projectDetail).toBeNull();
      expect(projectStore.detailLoading).toBe(false);
    });
  });

  describe('getReadme', () => {
    it('fetches and caches readme content', async () => {
      service = createService();
      const project = { ...initialProjects[0], readmeUrl: 'https://example.com/readme.md' };
      const fetch = vi
        .fn()
        .mockResolvedValue(textResponse('# Readme Content')) as unknown as typeof globalThis.fetch;

      const first = await service.getReadme(project, fetch);
      expect(first).toBe('# Readme Content');
      expect(fetch).toHaveBeenCalledTimes(1);

      const second = await service.getReadme(project, fetch);
      expect(second).toBe('# Readme Content');
      expect(fetch).toHaveBeenCalledTimes(1);
    });

    it('returns null when readme is not available', async () => {
      service = createService();
      const project = { ...initialProjects[0], readmeUrl: undefined };

      const result = await service.getReadme(
        project,
        (() => {}) as unknown as typeof globalThis.fetch
      );

      expect(result).toBeNull();
    });
  });
});
