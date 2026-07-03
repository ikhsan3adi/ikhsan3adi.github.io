import type { Project, ProjectDetail } from '../types';

interface ProjectRepository {
  fetchProject(project: Project, fetch: typeof globalThis.fetch): Promise<Project>;

  fetchDetail(project: Project, fetch: typeof globalThis.fetch): Promise<ProjectDetail>;

  fetchReadme(project: Project, fetch: typeof globalThis.fetch): Promise<string | null>;
}

interface CacheStore {
  get<T>(key: string): T | null;
  peek<T>(key: string): T | null;
  set<T>(key: string, value: T, ttlMs?: number): void;
  remove(key: string): void;
  clear(): void;
}

export type { ProjectRepository, CacheStore };
