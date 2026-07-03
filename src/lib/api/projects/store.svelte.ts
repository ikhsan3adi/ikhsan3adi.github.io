import type { Project, ProjectDetail } from './types';

class ProjectStore {
  projects = $state<Project[]>([]);
  projectDetail = $state<ProjectDetail | null>(null);
  loading = $state(false);
  detailLoading = $state(false);
  error = $state<string | null>(null);
  errorMessage = $state<string | null>(null);
  detailError = $state<string | null>(null);
  projectDetailId = $state<string | null>(null);
}

export const projectStore = new ProjectStore();
