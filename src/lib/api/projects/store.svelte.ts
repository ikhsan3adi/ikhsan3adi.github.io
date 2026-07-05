import type { Project } from './types';

class ProjectStore {
  projects = $state<Project[]>([]);
  loading = $state(false);
  error = $state<string | null>(null);

  projectDetail = $state<Project | null>(null);
  detailLoading = $state(false);
  detailError = $state<string | null>(null);
}

export const projectStore = new ProjectStore();
