import { browser } from '$app/environment';
import { areSetsEqual } from '$lib/utils';
import { initialProjects } from './projects';
import { ProjectService } from './service';
import { projectDetailStore, projectsStore } from './store';
import type { Project, ProjectDetail } from './types';

/**
 * Dev-only subclass of ProjectService that reads data from localStorage
 * instead of making GitHub API calls. Useful for avoiding API rate limits
 * during development.
 */
class LocalStorageProjectService implements ProjectService {
  constructor(_fetch?: (input: URL | RequestInfo, init?: RequestInit) => Promise<Response>) {
    console.log(`Using ${this.constructor.name}`);
    try {
      if (browser) {
        const remoteProjectService = new ProjectService();

        const storedProjects = JSON.parse(localStorage.getItem('projects') ?? '[]') as Project[];

        const storedIdsSet = new Set(storedProjects.map((p) => p.id));
        const initialIdsSet = new Set(initialProjects.map((p) => p.id));

        if (!areSetsEqual(storedIdsSet, initialIdsSet)) {
          Promise.all(
            initialProjects.map((p) =>
              remoteProjectService.fetchProject({
                project: p,
                fetch: _fetch ?? fetch
              })
            )
          ).then(() => {
            console.log('Synced stored localStorage projects.');
            this.storedProjects = JSON.parse(localStorage.getItem('projects') ?? '[]') as Project[];
          });
        } else {
          this.storedProjects = JSON.parse(localStorage.getItem('projects') ?? '[]') as Project[];
        }

        for (const project of initialProjects) {
          const key = `project-detail:${project.id}`;
          const readmeKey = `project-readme:${project.id}`;
          if (!localStorage.getItem(key)) {
            remoteProjectService
              .fetchProjectDetail({ project, fetch: _fetch ?? fetch })
              .then(() => {
                console.log(`Synced stored localStorage ${key}`);
                this.storedProjectDetails.set(
                  key,
                  JSON.parse(localStorage.getItem(key) ?? '') as ProjectDetail
                );
              });
          } else {
            this.storedProjectDetails.set(
              key,
              JSON.parse(localStorage.getItem(key) ?? '') as ProjectDetail
            );
          }
          if (!localStorage.getItem(readmeKey)) {
            remoteProjectService
              .getProjectReadme({ project, fetch: _fetch ?? fetch })
              .then((readme) => {
                console.log(`Synced stored localStorage ${readmeKey}`);
                if (readme) this.storedProjectReadmes.set(readmeKey, readme);
              });
          } else {
            this.storedProjectReadmes.set(
              readmeKey,
              JSON.parse(localStorage.getItem(readmeKey) ?? '')
            );
          }
        }
      }
    } catch {
      // silent
    }
  }

  private storedProjects: Project[] = [];
  private storedProjectDetails: Map<string, ProjectDetail> = new Map();
  private storedProjectReadmes: Map<string, string> = new Map();

  async fetchProject({
    project
  }: {
    project: Project;
    fetch: (input: URL | RequestInfo, init?: RequestInit) => Promise<Response>;
  }) {
    try {
      const newProject = this.storedProjects.find((e) => e.id == project.id)!;
      if (newProject) {
        projectsStore.update((p) => [...p, newProject]);
        return undefined;
      }
    } catch {
      // ignore parse errors
    }

    // fallback: register the project as-is so the UI is not empty
    projectsStore.update((projects) => [
      ...projects,
      {
        description: 'My Lonely Project',
        starsCount: 67,
        forksCount: 67,
        downloadsCount: 67,
        issuesCount: 67,
        pullRequestsCount: 67,
        ...project
      }
    ]);
    return undefined;
  }

  async fetchProjectDetail({
    project
  }: {
    project: Project;
    fetch: (input: URL | RequestInfo, init?: RequestInit) => Promise<Response>;
  }) {
    if (browser) {
      try {
        const detail = this.storedProjectDetails.get(`project-detail:${project.id}`);
        if (detail) {
          projectDetailStore.update(() => detail);
          return detail;
        }
      } catch {
        // ignore parse errors
      }
    }

    // fallback: derive a minimal ProjectDetail from the given project
    const fallback: ProjectDetail = {
      ...project,
      repositoryUrl: project.url.replace('api.github.com/repos', 'github.com'),
      hasLivePreview: false,
      description: project.description || 'My Lonely Project',
      starsCount: project.starsCount || 67,
      forksCount: project.forksCount || 67,
      downloadsCount: project.downloadsCount || 67,
      issuesCount: project.issuesCount || 67,
      pullRequestsCount: project.pullRequestsCount || 67
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
      return this.storedProjectReadmes.get(`project-readme:${project.id}`) ?? null;
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
