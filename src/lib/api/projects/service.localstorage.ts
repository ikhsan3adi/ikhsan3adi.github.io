import { browser } from '$app/environment';
import { projectDetailStore, projectsStore } from './store';
import { ProjectService } from './service';
import type { Project, ProjectDetail } from './types';

/**
 * Dev-only subclass of ProjectService that reads data from localStorage
 * instead of making GitHub API calls. Useful for avoiding API rate limits
 * during development.
 */
class LocalStorageProjectService implements ProjectService {
  constructor() {
    console.log(`Using ${this.constructor.name}`);
  }

  async fetchProject({
    project
  }: {
    project: Project;
    fetch: (input: URL | RequestInfo, init?: RequestInit) => Promise<Response>;
  }) {
    if (browser) {
      const stored = localStorage.getItem('projects');
      if (stored) {
        try {
          const projects = JSON.parse(stored) as Project[];
          const newProject = projects.find((e) => e.id == project.id)!;
          if (projects.length > 0) {
            projectsStore.update((p) => [...p, newProject]);
            return undefined;
          }
        } catch {
          // ignore parse errors
        }
      }
    }

    // fallback: register the project as-is so the UI is not empty
    projectsStore.update((projects) => [...projects, project]);
    return undefined;
  }

  async fetchProjectDetail({
    project
  }: {
    project: Project;
    fetch: (input: URL | RequestInfo, init?: RequestInit) => Promise<Response>;
  }) {
    if (browser) {
      const stored = localStorage.getItem(`project-detail:${project.id}`);
      if (stored) {
        try {
          const detail = JSON.parse(stored) as ProjectDetail;
          projectDetailStore.update(() => detail);
          return detail;
        } catch {
          // ignore parse errors
        }
      }
    }

    // fallback: derive a minimal ProjectDetail from the given project
    const fallback: ProjectDetail = {
      ...project,
      repositoryUrl: project.url.replace('api.github.com/repos', 'github.com'),
      hasLivePreview: false,
      starsCount: project.starsCount || 0,
      forksCount: project.forksCount || 0,
      downloadsCount: project.downloadsCount || 0
    };
    projectDetailStore.update(() => fallback);
    return fallback;
  }

  async getProjectReadme({
    project
  }: {
    project: Project;
    _fetch?: (input: URL | RequestInfo, init?: RequestInit) => Promise<Response>;
  }) {
    if (browser) {
      return localStorage.getItem(`project-readme:${project.id}`) ?? null;
    }
    return null;
  }

  async getPullRequestsCount(_url: string) {
    void _url;
    return 0;
  }

  async getDownloadsCount(url: string) {
    if (browser) {
      const cached = localStorage.getItem(`download-count:${url}`);
      if (cached !== null) {
        const parsed = Number(cached);
        if (!Number.isNaN(parsed)) return parsed;
      }
    }
    return 0;
  }
}

export { LocalStorageProjectService };
