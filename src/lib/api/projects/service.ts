import { browser } from '$app/environment';
import { error } from '@sveltejs/kit';
import { projectDetailStore, projectsStore } from './store';
import type { Project, ProjectDetail } from './types';

class ProjectService {
  async fetchProject({
    project,
    fetch
  }: {
    project: Project;
    fetch: (input: URL | RequestInfo, init?: RequestInit) => Promise<Response>;
  }) {
    try {
      const response = await fetch(project.url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const text = await response.text();
      const json = text ? JSON.parse(text) : {};

      if (response.status === 200) {
        const [downloadsCount, pullRequestsCount] = await Promise.all([
          this.getDownloadsCount(project.url),
          this.getPullRequestsCount(project.url)
        ]);
        const newProject: Project = {
          ...project,
          description: project.description || json.description,
          tags: [...new Set([...project.tags, json.language?.toLowerCase()])],
          starsCount: json.stargazers_count,
          forksCount: json.forks,
          downloadsCount,
          issuesCount: json.open_issues_count,
          pullRequestsCount
        };

        projectsStore.update((projects) => {
          const existsIndex = projects.findIndex((p) => p.id === newProject.id);
          let updatedProjects: Project[];
          if (existsIndex !== -1) {
            updatedProjects = [...projects];
            updatedProjects[existsIndex] = newProject;
          } else {
            updatedProjects = [...projects, newProject];
          }

          if (browser) {
            try {
              localStorage.setItem('projects', JSON.stringify(updatedProjects));
            } catch {
              // ignore localStorage write errors
            }
          }

          return updatedProjects;
        });
        return;
      }

      // non-200 responses: preserve cached projects if available
      const status = response.status;
      let shouldUseCache = false;
      let cacheData: Project[] = [];

      if (browser && localStorage.getItem('projects')) {
        try {
          const stored = JSON.parse(localStorage.getItem('projects') ?? '[]') as Project[];
          if (stored.length > 0) {
            shouldUseCache = true;
            const unique: Project[] = [];
            const seen = new Set<string>();
            for (const p of stored) {
              if (!seen.has(p.id)) {
                seen.add(p.id);
                unique.push({ ...p, imageText: 'Server error / API rate limit exceeded' });
              }
            }
            cacheData = unique;
          }
        } catch {
          // ignore JSON parse errors
        }
      }

      if (shouldUseCache) {
        projectsStore.update(() => cacheData);
      } else if (status === 403) {
        projectsStore.update((projects) => [
          ...projects,
          {
            ...project,
            name: 'limit',
            tags: []
          }
        ]);
      } else {
        projectsStore.update((projects) => [
          ...projects,
          {
            ...project,
            name: 'error',
            description: response.statusText || 'Failed to fetch',
            tags: []
          }
        ]);
      }

      return error(status ?? 500, 'Failed to fetch data');
    } catch (err) {
      console.log(err);

      let shouldUseCache = false;
      let cacheData: Project[] = [];

      if (browser && localStorage.getItem('projects')) {
        try {
          const stored = JSON.parse(localStorage.getItem('projects') ?? '[]') as Project[];
          if (stored.length > 0) {
            shouldUseCache = true;
            const unique: Project[] = [];
            const seen = new Set<string>();
            for (const p of stored) {
              if (!seen.has(p.id)) {
                seen.add(p.id);
                unique.push({ ...p, imageText: 'No internet connection' });
              }
            }
            cacheData = unique;
          }
        } catch {
          // ignore JSON parse errors
        }
      }

      if (shouldUseCache) {
        projectsStore.update(() => cacheData);
      } else {
        projectsStore.update((projects) => [
          ...projects,
          {
            ...project,
            name: 'error',
            description: 'No internet connection',
            tags: []
          }
        ]);
      }

      return error(500, 'Failed to fetch data');
    }
  }

  async fetchProjectDetail({
    project,
    fetch
  }: {
    project: Project;
    fetch: (input: URL | RequestInfo, init?: RequestInit) => Promise<Response>;
  }) {
    try {
      const response = await fetch(project.url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const text = await response.text();
      const json = text ? JSON.parse(text) : {};

      if (response.status === 200) {
        const [downloadsCount, pullRequestsCount] = await Promise.all([
          this.getDownloadsCount(project.url),
          this.getPullRequestsCount(project.url)
        ]);
        const newProject: ProjectDetail = {
          ...project,
          description: json.description,
          tags: [...(project.tags || []), (json.language || '').toLowerCase()],
          repositoryUrl: json['svn_url'] || '',
          hasLivePreview: !!json.homepage,
          livePreviewUrl: json.homepage || '',
          starsCount: json.stargazers_count,
          forksCount: json.forks,
          downloadsCount,
          issuesCount: json.open_issues_count,
          pullRequestsCount
        };

        projectDetailStore.update(() => newProject);

        if (browser) {
          try {
            localStorage.setItem(`project-detail:${project.id}`, JSON.stringify(newProject));
          } catch {
            // ignore localStorage write errors
          }
        }

        return newProject;
      }

      // non-200: try localStorage cache first
      if (browser) {
        const cached = localStorage.getItem(`project-detail:${project.id}`);
        if (cached) {
          try {
            const detail = JSON.parse(cached) as ProjectDetail;
            detail.imageText = 'Server error / API rate limit exceeded';
            projectDetailStore.update(() => detail);
            return detail;
          } catch {
            // ignore parse errors
          }
        }
      }

      // fallback: derive a minimal ProjectDetail from the given project
      const repositoryUrl = project.url.replace('api.github.com/repos', 'github.com');
      const fallback: ProjectDetail = {
        ...project,
        description: json.message || project.description || 'Failed to fetch project details',
        tags: project.tags || [],
        repositoryUrl,
        hasLivePreview: false,
        starsCount: project.starsCount || 0,
        forksCount: project.forksCount || 0,
        downloadsCount: project.downloadsCount || 0,
        issuesCount: project.issuesCount || 0,
        pullRequestsCount: project.pullRequestsCount || 0,
        imageText: 'Server error / API rate limit exceeded'
      };
      projectDetailStore.update(() => fallback);
      return fallback;
    } catch (err) {
      console.log(err);

      // try localStorage cache first
      if (browser) {
        const cached = localStorage.getItem(`project-detail:${project.id}`);
        if (cached) {
          try {
            const detail = JSON.parse(cached) as ProjectDetail;
            detail.imageText = 'No internet connection';
            projectDetailStore.update(() => detail);
            return detail;
          } catch {
            // ignore parse errors
          }
        }
      }

      const repositoryUrl = project.url.replace('api.github.com/repos', 'github.com');
      projectDetailStore.update(
        () =>
          ({
            ...project,
            description: 'No internet connection',
            tags: project.tags || [],
            repositoryUrl,
            hasLivePreview: false,
            starsCount: project.starsCount || 0,
            forksCount: project.forksCount || 0,
            downloadsCount: project.downloadsCount || 0,
            issuesCount: project.issuesCount || 0,
            pullRequestsCount: project.pullRequestsCount || 0,
            imageText: 'No internet connection'
          }) as ProjectDetail
      );

      return error(500, 'Failed to fetch data');
    }
  }

  async getProjectReadme({
    project,
    fetch
  }: {
    project: Project;
    fetch: (input: URL | RequestInfo, init?: RequestInit) => Promise<Response>;
  }) {
    try {
      const response = await fetch(project.readmeUrl ?? '', { method: 'GET' });
      if (!response.ok) {
        // try localStorage cache
        if (browser) {
          const cached = localStorage.getItem(`project-readme:${project.id}`);
          if (cached) return cached;
        }
        return null;
      }
      const text = await response.text();

      if (browser) {
        try {
          localStorage.setItem(`project-readme:${project.id}`, text);
        } catch {
          // ignore localStorage write errors
        }
      }

      return text;
    } catch {
      // try localStorage cache on network error
      if (browser) {
        const cached = localStorage.getItem(`project-readme:${project.id}`);
        if (cached) return cached;
      }
      return null;
    }
  }

  async getPullRequestsCount(url: string) {
    try {
      const response = await fetch(`${url}/pulls?state=all&per_page=1`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
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

  async getDownloadsCount(url: string) {
    const cacheKey = `download-count:${url}`;

    // check localStorage cache first
    if (browser) {
      const cached = localStorage.getItem(cacheKey);
      if (cached !== null) {
        const parsed = Number(cached);
        if (!Number.isNaN(parsed)) return parsed;
      }
    }

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

      if (browser) {
        try {
          localStorage.setItem(cacheKey, String(count));
        } catch {
          // ignore localStorage write errors
        }
      }

      return count;
    } catch {
      // network error: return cached value if available, otherwise 0
      if (browser) {
        const cached = localStorage.getItem(cacheKey);
        if (cached !== null) {
          const parsed = Number(cached);
          if (!Number.isNaN(parsed)) return parsed;
        }
      }
      return 0;
    }
  }
}

export { ProjectService };
