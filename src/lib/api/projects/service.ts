import { initialProjects } from './projects';
import type { ProjectRepository } from './repository';
import { projectStore } from './store.svelte';
import type { Project } from './types';

class ProjectService {
  constructor(private repo: ProjectRepository) {}

  async init(fetch: typeof globalThis.fetch): Promise<void> {
    projectStore.loading = true;
    projectStore.error = null;
    projectStore.projects = [...initialProjects];

    const results = await Promise.allSettled(
      initialProjects.map((p) => this.repo.fetchProject(p, fetch))
    );

    const updated = [...projectStore.projects];
    let failedCount = 0;
    for (let i = 0; i < results.length; i++) {
      const r = results[i];
      if (r.status === 'fulfilled') {
        updated[i] = r.value;
      } else {
        failedCount++;
      }
    }

    if (failedCount === results.length) {
      projectStore.error = 'Failed to fetch project data';
    }

    projectStore.projects = updated;
    projectStore.loading = false;
  }

  async openDetail(project: Project, fetch: typeof globalThis.fetch): Promise<void> {
    projectStore.projectDetailId = project.id;
    projectStore.detailLoading = true;
    projectStore.detailError = null;
    projectStore.projectDetail = null;

    try {
      projectStore.projectDetail = await this.repo.fetchDetail(project, fetch);
    } catch {
      projectStore.detailError = 'Failed to load project details';
    } finally {
      projectStore.detailLoading = false;
    }
  }

  async getReadme(project: Project, fetch: typeof globalThis.fetch): Promise<string | null> {
    return this.repo.fetchReadme(project, fetch);
  }
}

export { ProjectService };
