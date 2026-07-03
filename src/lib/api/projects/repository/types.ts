import type { Project } from '$lib/api/projects';

export interface ProjectRepository {
  fetchProject(project: Project, fetch: typeof globalThis.fetch): Promise<Project>;
  fetchReadme(project: Project, fetch: typeof globalThis.fetch): Promise<string | null>;
}

export interface CacheStore {
  get<T>(key: string): T | null;
  peek<T>(key: string): T | null;
  set<T>(key: string, value: T, ttlMs?: number): void;
  remove(key: string): void;
  clear(): void;
}

export interface CacheEntry {
  data: unknown;
  version: string;
  expiresAt?: number;
}

export interface ReleaseAsset {
  download_count: number;
}

export interface Release {
  assets: ReleaseAsset[];
}

export interface RepoBase {
  json: Record<string, unknown>;
  downloadsCount: number;
  pullRequestsCount: number;
}
