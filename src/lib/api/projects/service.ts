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
        const newProject: Project = {
          ...project,
          description: project.description || json.description,
          tags: [...new Set([...project.tags, json.language?.toLowerCase()])],
          starsCount: json.stargazers_count,
          forksCount: json.forks,
          downloadsCount: await this.getDownloadsCount(project.url)
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
        const newProject: ProjectDetail = {
          ...project,
          description: json.description,
          tags: [...(project.tags || []), (json.language || '').toLowerCase()],
          repositoryUrl: json['svn_url'] || '',
          hasLivePreview: !!json.homepage,
          livePreviewUrl: json.homepage || '',
          starsCount: json.stargazers_count,
          forksCount: json.forks,
          downloadsCount: await this.getDownloadsCount(project.url)
        };

        projectDetailStore.update(() => newProject);
        return newProject;
      }

      // non-200: show fallback using existing project data
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
        imageText: 'Server error / API rate limit exceeded'
      };
      projectDetailStore.update(() => fallback);
    } catch (err) {
      console.log(err);

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
      if (!response.ok) return null;
      return await response.text();
    } catch {
      return null;
    }
  }

  async getDownloadsCount(url: string) {
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

export { ProjectService };
