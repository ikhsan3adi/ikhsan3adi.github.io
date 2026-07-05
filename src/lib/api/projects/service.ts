import { initialProjects } from './projects';
import type { ProjectRepository } from './repository';
import { projectStore } from './store.svelte';
import type { Project } from './types';

export class ProjectService {
  constructor(private repo: ProjectRepository) {}

  async init(fetch: typeof globalThis.fetch): Promise<void> {
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
          statusMessage: this.toStatusMessage(reason),
          description: updated[i].description || updated[i].name
        };
      }
    }

    if (failedCount > 0) {
      console.error(`${failedCount} of ${results.length} failed: ${firstError}`);
    }

    if (failedCount === results.length) {
      projectStore.error = this.toStatusMessage(firstError);
    }

    projectStore.projects = updated;
    projectStore.loading = false;
  }

  async openDetail(project: Project, fetch: typeof globalThis.fetch): Promise<void> {
    projectStore.detailLoading = true;
    projectStore.detailError = null;
    projectStore.projectDetail = null;

    try {
      projectStore.projectDetail = await this.repo.fetchProject(project, fetch);
    } catch (err) {
      projectStore.detailError = this.toStatusMessage(String(err));
    } finally {
      projectStore.detailLoading = false;
    }
  }

  async getReadme(project: Project, fetch: typeof globalThis.fetch): Promise<string | null> {
    return await this.repo.fetchReadme(project, fetch);
  }

  private toStatusMessage(reason: string): string {
    if (/rate\s*limit/i.test(reason)) return 'Rate limited';
    if (/Failed to fetch|NetworkError|network/i.test(reason)) return 'No connection';
    if (/not found|404/i.test(reason)) return 'Not found';
    if (/forbidden|403/i.test(reason)) return 'Access denied';
    if (/timeout|timed?\s*out/i.test(reason)) return 'Timed out';
    return 'Could not load';
  }
}
