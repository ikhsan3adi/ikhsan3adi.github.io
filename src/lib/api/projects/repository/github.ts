import type { Project, ProjectDetail } from '../types';
import type { ProjectRepository } from './types';

interface RepoBase {
  json: Record<string, unknown>;
  downloadsCount: number;
  pullRequestsCount: number;
}

class GitHubRepository implements ProjectRepository {
  async fetchProject(project: Project, fetch: typeof globalThis.fetch): Promise<Project> {
    const { json, downloadsCount, pullRequestsCount } = await this.fetchRepoBase(project, fetch);

    return {
      ...project,
      description: project.description || (json.description as string | undefined) || undefined,
      tags: this.mergeTags(project.tags, json.language),
      starsCount: json.stargazers_count as number | undefined,
      forksCount: json.forks as number | undefined,
      downloadsCount,
      issuesCount: json.open_issues_count as number | undefined,
      pullRequestsCount
    };
  }

  async fetchDetail(project: Project, fetch: typeof globalThis.fetch): Promise<ProjectDetail> {
    const { json, downloadsCount, pullRequestsCount } = await this.fetchRepoBase(project, fetch);

    return {
      ...project,
      description: (json.description as string | undefined) || project.description || undefined,
      tags: this.mergeTags(project.tags, json.language),
      repositoryUrl:
        (json.svn_url as string) || project.url.replace('api.github.com/repos', 'github.com'),
      hasLivePreview: !!json.homepage,
      livePreviewUrl: (json.homepage as string) || undefined,
      starsCount: json.stargazers_count as number | undefined,
      forksCount: json.forks as number | undefined,
      downloadsCount,
      issuesCount: json.open_issues_count as number | undefined,
      pullRequestsCount
    };
  }

  async fetchReadme(project: Project, fetch: typeof globalThis.fetch): Promise<string | null> {
    if (!project.readmeUrl) return null;

    try {
      const response = await fetch(project.readmeUrl, { method: 'GET' });
      if (!response.ok) return null;
      return await response.text();
    } catch {
      return null;
    }
  }

  private async fetchRepoBase(project: Project, fetch: typeof globalThis.fetch): Promise<RepoBase> {
    const response = await this.fetchWithRetry(() =>
      fetch(project.url, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      })
    );

    const text = await response.text();
    const json = text ? JSON.parse(text) : {};

    const [downloadsCount, pullRequestsCount] = await Promise.all([
      this.fetchDownloadsCount(project.url, fetch),
      this.fetchPullRequestsCount(project.url, fetch)
    ]);

    return { json, downloadsCount, pullRequestsCount };
  }

  private async fetchWithRetry(
    fn: () => Promise<Response>,
    maxRetries = 3,
    baseDelay = 1000
  ): Promise<Response> {
    let lastError: unknown;

    for (let attempt = 0; attempt < maxRetries; attempt++) {
      try {
        const response = await fn();

        if (response.ok) return response;

        if (response.status === 429 || response.status === 403) {
          if (attempt < maxRetries - 1) {
            const delay = baseDelay * Math.pow(2, attempt);
            await new Promise((r) => setTimeout(r, delay));
            continue;
          }
        }

        return response;
      } catch (err) {
        lastError = err;
        if (attempt < maxRetries - 1) {
          const delay = baseDelay * Math.pow(2, attempt);
          await new Promise((r) => setTimeout(r, delay));
        }
      }
    }

    throw lastError;
  }

  private mergeTags(initialTags: string[], language: unknown): string[] {
    if (!language || typeof language !== 'string') return initialTags;
    return [...new Set([...initialTags, language.toLowerCase()])];
  }

  private async fetchPullRequestsCount(
    url: string,
    fetch: typeof globalThis.fetch
  ): Promise<number> {
    try {
      const response = await fetch(`${url}/pulls?state=all&per_page=1`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      });
      if (!response.ok) return 0;

      const linkHeader = response.headers.get('Link');
      if (linkHeader) {
        const match = linkHeader.match(/page=(\d+)>;\s*rel="last"/);
        if (match) return parseInt(match[1], 10);
      }

      const text = await response.text();
      const pulls = JSON.parse(text);
      return Array.isArray(pulls) ? pulls.length : 0;
    } catch {
      return 0;
    }
  }

  private async fetchDownloadsCount(url: string, fetch: typeof globalThis.fetch): Promise<number> {
    try {
      const response = await fetch(`${url}/releases`, { method: 'GET' });
      if (!response.ok) return 0;
      const text = await response.text();
      const releases = JSON.parse(text);
      let count = 0;
      for (let i = 0; i < (releases || []).length; ++i) {
        for (let j = 0; j < (releases[i].assets || []).length; ++j) {
          count += releases[i].assets[j].download_count || 0;
        }
      }
      return count;
    } catch {
      return 0;
    }
  }
}

export { GitHubRepository };
