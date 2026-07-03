import type { Project, ProjectDetail } from '$lib/api/projects';

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

interface CacheEntry {
  data: unknown;
  version: string;
  expiresAt?: number;
}

interface ReleaseAsset {
  download_count: number;
}

interface Release {
  assets: ReleaseAsset[];
}

interface RepoBase {
  json: Record<string, unknown>;
  downloadsCount: number;
  pullRequestsCount: number;
}

export type { CacheEntry, CacheStore, ProjectRepository, Release, ReleaseAsset, RepoBase };
