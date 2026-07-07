import { describe, it, expect, vi, beforeEach } from 'vitest';
import { GitHubRepository } from './github';
import type { Project } from '$lib/api/projects/types';

function createProject(overrides?: Partial<Project>): Project {
  return {
    id: 'test-project',
    name: 'Test Project',
    url: 'https://api.github.com/repos/user/test',
    readmeBaseUrl: 'https://raw.githubusercontent.com/user/test',
    imageUrl: '/images/test.png',
    tags: ['svelte', 'typescript'],
    ...overrides
  };
}

const repoJson = {
  description: 'A test repo',
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

describe('GitHubRepository', () => {
  const repo = new GitHubRepository();

  beforeEach(() => {
    vi.restoreAllMocks();
  });

  const projectUrl = 'https://api.github.com/repos/user/test';

  function mockFetchFn(impl: (url: string) => Promise<Response>): typeof globalThis.fetch {
    return impl as unknown as typeof globalThis.fetch;
  }

  function mockFetch(handlers: Record<string, () => Response>): typeof globalThis.fetch {
    return mockFetchFn((url: string) => {
      if (url === projectUrl) return Promise.resolve(handlers.projectUrl());
      if (url.includes('/releases')) return Promise.resolve(handlers.releases());
      if (url.includes('/pulls')) return Promise.resolve(handlers.pulls());
      return Promise.reject(new Error(`unexpected url: ${url}`));
    });
  }

  describe('fetchProject', () => {
    it('enriches project with data from GitHub API response', async () => {
      const fetch = mockFetch({
        projectUrl: () => okResponse(repoJson),
        releases: () => okResponse([]),
        pulls: () => okResponse([])
      });

      const result = await repo.fetchProject(createProject(), fetch);

      expect(result.starsCount).toBe(100);
      expect(result.forksCount).toBe(25);
      expect(result.issuesCount).toBe(5);
      expect(result.downloadsCount).toBe(0);
      expect(result.pullRequestsCount).toBe(0);
      expect(result.description).toBe('A test repo');
      expect(result.repositoryUrl).toBe('https://github.com/user/test');
      expect(result.hasLivePreview).toBe(true);
      expect(result.livePreviewUrl).toBe('https://test.example.com');
    });

    it('includes repository language in tags', async () => {
      const fetch = mockFetch({
        projectUrl: () => okResponse(repoJson),
        releases: () => okResponse([]),
        pulls: () => okResponse([])
      });

      const result = await repo.fetchProject(createProject(), fetch);

      expect(result.tags).toContain('typescript');
      expect(result.tags).toContain('svelte');
    });

    it('handles missing optional fields from API', async () => {
      const minimalJson = {
        ...repoJson,
        stargazers_count: undefined,
        forks: undefined,
        open_issues_count: undefined,
        description: undefined,
        language: undefined,
        html_url: undefined,
        homepage: undefined
      };
      const fetch = mockFetchFn((url: string) => {
        if (url === projectUrl) return Promise.resolve(okResponse(minimalJson));
        if (url.includes('/releases')) return Promise.resolve(okResponse([]));
        if (url.includes('/pulls')) return Promise.resolve(okResponse([]));
        return Promise.reject(new Error(`unexpected url: ${url}`));
      });

      const result = await repo.fetchProject(createProject(), fetch);

      expect(result.starsCount).toBeUndefined();
      expect(result.forksCount).toBeUndefined();
      expect(result.issuesCount).toBeUndefined();
      expect(result.description).toBeUndefined();
      expect(result.hasLivePreview).toBe(false);
    });

    it('parses pull request count from Link header', async () => {
      const fetch = mockFetchFn((url: string) => {
        if (url === projectUrl) return Promise.resolve(okResponse(repoJson));
        if (url.includes('/releases')) return Promise.resolve(okResponse([]));
        if (url.includes('/pulls'))
          return Promise.resolve(
            okResponse([], {
              Link: '<https://api.github.com/repos/user/test/pulls?page=5>; rel="last"'
            })
          );
        return Promise.reject(new Error(`unexpected url: ${url}`));
      });

      const result = await repo.fetchProject(createProject(), fetch);

      expect(result.pullRequestsCount).toBe(5);
    });

    it('counts downloads from releases', async () => {
      const release = { assets: [{ download_count: 10 }, { download_count: 20 }] };
      let pageCount = 0;
      const fetch = mockFetchFn((url: string) => {
        if (url === projectUrl) return Promise.resolve(okResponse(repoJson));
        if (url.includes('/releases')) {
          if (url.includes('page=2')) {
            return Promise.resolve(okResponse([{ assets: [{ download_count: 5 }] }]));
          }
          pageCount++;
          if (pageCount === 1) {
            return Promise.resolve(
              okResponse([release, release], {
                Link: '<https://api.github.com/repos/user/test/releases?page=2>; rel="last"'
              })
            );
          }
        }
        if (url.includes('/pulls')) return Promise.resolve(okResponse([]));
        return Promise.reject(new Error(`unexpected url: ${url}`));
      });

      const result = await repo.fetchProject(createProject(), fetch);

      expect(result.downloadsCount).toBe(65);
    });

    it('returns 0 downloads when releases API fails', async () => {
      const fetch = mockFetchFn((url: string) => {
        if (url === projectUrl) return Promise.resolve(okResponse(repoJson));
        if (url.includes('/releases')) return Promise.resolve(errorResponse(500, 'Server Error'));
        if (url.includes('/pulls')) return Promise.resolve(okResponse([]));
        return Promise.reject(new Error(`unexpected url: ${url}`));
      });

      const result = await repo.fetchProject(createProject(), fetch);

      expect(result.downloadsCount).toBe(0);
    });
  });

  describe('fetchReadme', () => {
    it('returns readme text on successful fetch', async () => {
      const project = createProject({
        readmeUrl: 'https://raw.githubusercontent.com/user/test/main/README.md'
      });
      const fetch = vi
        .fn()
        .mockResolvedValue(
          textResponse('# Readme Content\nDetails here.')
        ) as unknown as typeof globalThis.fetch;

      const result = await repo.fetchReadme(project, fetch);

      expect(result).toBe('# Readme Content\nDetails here.');
    });

    it('returns null when readmeUrl is not set', async () => {
      const project = createProject({ readmeUrl: undefined });
      const fetch = vi.fn() as unknown as typeof globalThis.fetch;

      const result = await repo.fetchReadme(project, fetch);

      expect(result).toBeNull();
      expect(fetch).not.toHaveBeenCalled();
    });

    it('returns null on non-ok response', async () => {
      const project = createProject({
        readmeUrl: 'https://raw.githubusercontent.com/user/test/main/README.md'
      });
      const fetch = vi
        .fn()
        .mockResolvedValue(
          new Response(null, { status: 404 })
        ) as unknown as typeof globalThis.fetch;

      const result = await repo.fetchReadme(project, fetch);

      expect(result).toBeNull();
    });
  });

  describe('fetchWithRetry', () => {
    it('succeeds after retrying on 429', async () => {
      let attempts = 0;
      const fetch = mockFetchFn((url: string) => {
        if (url === projectUrl) {
          attempts++;
          if (attempts === 1) return Promise.resolve(errorResponse(429, 'Too Many Requests'));
          return Promise.resolve(okResponse(repoJson));
        }
        if (url.includes('/releases')) return Promise.resolve(okResponse([]));
        if (url.includes('/pulls')) return Promise.resolve(okResponse([]));
        return Promise.reject(new Error(`unexpected url: ${url}`));
      });

      const result = await repo.fetchProject(createProject(), fetch);

      expect(attempts).toBe(2);
      expect(result.starsCount).toBe(100);
    }, 10000);

    it('throws after exhausting all retries on 429', async () => {
      const fetch = mockFetchFn((url: string) => {
        if (url === projectUrl) {
          return Promise.resolve(errorResponse(429, 'Too Many Requests'));
        }
        if (url.includes('/releases')) return Promise.resolve(okResponse([]));
        if (url.includes('/pulls')) return Promise.resolve(okResponse([]));
        return Promise.reject(new Error(`unexpected url: ${url}`));
      });

      await expect(repo.fetchProject(createProject(), fetch)).rejects.toThrow(
        '429 Too Many Requests'
      );
    }, 15000);

    it('succeeds after retrying on network failure', async () => {
      let attempts = 0;
      const fetch = mockFetchFn((url: string) => {
        if (url === projectUrl) {
          attempts++;
          if (attempts === 1) return Promise.reject(new Error('Network failure'));
          return Promise.resolve(okResponse(repoJson));
        }
        if (url.includes('/releases')) return Promise.resolve(okResponse([]));
        if (url.includes('/pulls')) return Promise.resolve(okResponse([]));
        return Promise.reject(new Error(`unexpected url: ${url}`));
      });

      const result = await repo.fetchProject(createProject(), fetch);

      expect(attempts).toBe(2);
      expect(result.starsCount).toBe(100);
    }, 10000);
  });
});
