import type { Project } from '$lib/api/projects/types';
import type { CacheStore, ProjectRepository } from './types';

const TTL_STATS = 60 * 60 * 1000;
const TTL_README = 30 * 60 * 1000;

export class CachedRepository implements ProjectRepository {
  constructor(
    private inner: ProjectRepository,
    private cache: CacheStore
  ) {}

  async fetchProject(project: Project, fetch: typeof globalThis.fetch): Promise<Project> {
    const cacheKey = project.id;
    const cached = this.cache.get<Project>(cacheKey);
    if (cached) return cached;

    try {
      const result = await this.inner.fetchProject(project, fetch);
      this.cache.set(cacheKey, result, TTL_STATS);
      return result;
    } catch (err) {
      const stale = this.cache.peek<Project>(cacheKey);
      if (stale) return stale;

      if (import.meta.env.DEV) {
        const dummy = this.getDummyProject(project);
        this.cache.set(cacheKey, dummy, TTL_STATS / 60);
        return dummy;
      }

      throw err;
    }
  }

  async fetchReadme(project: Project, fetch: typeof globalThis.fetch): Promise<string | null> {
    const cacheKey = `readme:${project.id}`;
    const cached = this.cache.get<string>(cacheKey);
    if (cached) return cached;

    try {
      const result = await this.inner.fetchReadme(project, fetch);
      if (result) {
        this.cache.set(cacheKey, result, TTL_README);
      }

      return result;
    } catch (err) {
      const stale = this.cache.peek<string>(cacheKey);
      if (stale) return stale;
      throw err;
    }
  }

  private getDummyProject(project: Project): Project {
    return {
      ...project,
      description: project.description || project.name,
      starsCount: project.starsCount || 767,
      forksCount: project.forksCount || 67,
      downloadsCount: project.downloadsCount || 67,
      issuesCount: project.issuesCount || 67,
      pullRequestsCount: project.pullRequestsCount || 67
    };
  }
}
