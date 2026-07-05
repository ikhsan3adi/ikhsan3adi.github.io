import { initialProjects } from './projects';
import type { ProjectRepository } from './repository';
import { projectStore } from './store.svelte';
import type { Project } from './types';
import { toStatusMessage } from '$lib/utils';

export class ProjectService {
  constructor(private repo: ProjectRepository) {}

  private initializing = false;

  async init(fetch: typeof globalThis.fetch): Promise<void> {
    if (this.initializing) return;
    this.initializing = true;

    try {
      projectStore.projects = [...initialProjects];
      projectStore.loading = true;
      projectStore.error = null;

      const results = await Promise.allSettled(
        initialProjects.map((p) => this.repo.fetchProject(p, fetch))
      );

      const updated = [...projectStore.projects];
      let failedCount = 0;
      let firstError = '';
      for (let i = 0; i < results.length; i++) {
        const r = results[i];
        if (r.status === 'fulfilled') {
          updated[i] = r.value;
        } else {
          failedCount++;
          const reason = String(r.reason);
          if (!firstError) firstError = reason;
          updated[i] = {
            ...updated[i],
            statusMessage: toStatusMessage(reason),
            description: updated[i].description || updated[i].name
          };
        }
      }

      if (failedCount > 0) {
        console.error(`${failedCount} of ${results.length} failed: ${firstError}`);
      }

      if (failedCount === results.length) {
        projectStore.error = toStatusMessage(firstError);
      }

      projectStore.projects = updated;
      projectStore.loading = false;
    } finally {
      this.initializing = false;
    }
  }

  async openDetail(project: Project, fetch: typeof globalThis.fetch): Promise<void> {
    projectStore.detailLoading = true;
    projectStore.detailError = null;
    projectStore.projectDetail = null;

    try {
      projectStore.projectDetail = await this.repo.fetchProject(project, fetch);
    } catch (err) {
      projectStore.detailError = toStatusMessage(String(err));
    } finally {
      projectStore.detailLoading = false;
    }
  }

  async getReadme(project: Project, fetch: typeof globalThis.fetch): Promise<string | null> {
    return await this.repo.fetchReadme(project, fetch);
  }
}
