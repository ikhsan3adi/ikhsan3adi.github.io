import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { initialProjects } from '$lib/api/projects';

vi.mock('$app/environment', () => ({ browser: true }));

const repoJson = {
  description: 'Mock repo',
  language: 'TypeScript',
  stargazers_count: 100,
  forks: 25,
  open_issues_count: 5,
  html_url: 'https://github.com/user/repo',
  homepage: 'https://example.com'
};

function okResponse(body: unknown): Response {
  return new Response(JSON.stringify(body), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}

function makeMockFetch(): typeof globalThis.fetch {
  return ((url: string) => {
    if (url.includes('/releases')) return Promise.resolve(okResponse([]));
    if (url.includes('/pulls')) return Promise.resolve(okResponse([]));
    if (initialProjects.some((p) => url === p.url)) return Promise.resolve(okResponse(repoJson));
    return Promise.resolve(okResponse({}));
  }) as unknown as typeof globalThis.fetch;
}

describe('home page load', () => {
  beforeEach(() => {
    vi.stubEnv('DEV', false);
    localStorage.clear();
  });

  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it('returns projectService and cacheStore with correct shape', async () => {
    const { load } = await import('./+page');
    const result = await load({
      fetch: makeMockFetch(),
      url: new URL('http://localhost/'),
      params: {},
      route: { id: null },
      data: null,
      setHeaders: () => {},
      depends: () => {},
      parent: async () => ({})
    } as unknown as Parameters<typeof load>[0]);

    expect(result).toHaveProperty('projectService');
    expect(result).toHaveProperty('cacheStore');
    expect(result).toHaveProperty('fetch');
  });

  it('returns ProjectService instance that can init projects', async () => {
    const { load } = await import('./+page');
    const result = await load({
      fetch: makeMockFetch(),
      url: new URL('http://localhost/'),
      params: {},
      route: { id: null },
      data: null,
      setHeaders: () => {},
      depends: () => {},
      parent: async () => ({})
    } as unknown as Parameters<typeof load>[0]);

    const { projectService, fetch } = result;
    await projectService.init(fetch);

    const { projectStore } = await import('$lib/api/projects/store.svelte');
    expect(projectStore.projects.length).toBeGreaterThan(0);
    expect(projectStore.loading).toBe(false);
  });
});

describe('project detail page load', () => {
  beforeEach(() => {
    vi.stubEnv('DEV', false);
    localStorage.clear();
  });

  afterEach(() => {
    vi.unstubAllEnvs();
  });

  describe('dev mode', () => {
    beforeEach(() => {
      vi.stubEnv('DEV', true);
      localStorage.clear();
    });

    it('returns project for /$projects$/loading', async () => {
      const { load } = await import('./$projects$/[id]/+page');

      const result = await load({
        fetch: makeMockFetch(),
        url: new URL('http://localhost/$projects$/loading'),
        params: { id: 'loading' },
        route: { id: 'loading' },
        data: null,
        setHeaders: () => {},
        depends: () => {},
        parent: async () => ({})
      } as unknown as Parameters<typeof load>[0]);

      expect(result).toHaveProperty('project');
      expect(result).toHaveProperty('projectService');
      expect(result.project.id).toBe(initialProjects[0].id);
    });

    it('returns project for /$projects$/error', async () => {
      const { load } = await import('./$projects$/[id]/+page');

      const result = await load({
        fetch: makeMockFetch(),
        url: new URL('http://localhost/$projects$/error'),
        params: { id: 'error' },
        route: { id: 'error' },
        data: null,
        setHeaders: () => {},
        depends: () => {},
        parent: async () => ({})
      } as unknown as Parameters<typeof load>[0]);

      expect(result).toHaveProperty('project');
      expect(result.project.id).toBe(initialProjects[0].id);
      expect(result).toHaveProperty('markdownPromise');
    });
  });

  it('returns project and projectService for a valid project ID', async () => {
    const { load } = await import('./$projects$/[id]/+page');

    const result = await load({
      fetch: makeMockFetch(),
      url: new URL('http://localhost/$projects$/ruwet-meter'),
      params: { id: 'ruwet-meter' },
      route: { id: 'ruwet-meter' },
      data: null,
      setHeaders: () => {},
      depends: () => {},
      parent: async () => ({})
    } as unknown as Parameters<typeof load>[0]);

    expect(result).toHaveProperty('project');
    expect(result).toHaveProperty('projectService');
    expect(result.project.id).toBe('ruwet-meter');
    expect(result.project.name).toBe('RuwetMeter');
  });

  it('throws 404 for unknown project ID', async () => {
    const { load } = await import('./$projects$/[id]/+page');

    await expect(
      load({
        fetch: makeMockFetch(),
        url: new URL('http://localhost/$projects$/nonexistent'),
        params: { id: 'nonexistent' },
        route: { id: 'nonexistent' },
        data: null,
        setHeaders: () => {},
        depends: () => {},
        parent: async () => ({})
      } as unknown as Parameters<typeof load>[0])
    ).rejects.toMatchObject({ status: 404 });
  });
});
