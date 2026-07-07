import { describe, it, expect, vi, beforeEach } from 'vitest';
import { ProjectService } from './service';
import type { ProjectRepository } from './repository';
import type { Project } from './types';

const mockProjectStore = vi.hoisted(() => ({
  projects: [] as Project[],
  loading: false,
  error: null as string | null,
  projectDetail: null as Project | null,
  detailLoading: false,
  detailError: null as string | null
}));

vi.mock('./store.svelte', () => ({
  projectStore: mockProjectStore
}));

function createProject(overrides?: Partial<Project>): Project {
  return {
    id: 'test',
    name: 'Test',
    url: 'https://api.github.com/repos/user/test',
    readmeBaseUrl: 'https://raw.githubusercontent.com/user/test',
    imageUrl: '/images/test.png',
    tags: ['svelte'],
    starsCount: 10,
    ...overrides
  };
}

function createMockRepo(): ProjectRepository {
  return {
    fetchProject: vi.fn(),
    fetchReadme: vi.fn()
  };
}

describe('ProjectService', () => {
  let repo: ProjectRepository;
  let service: ProjectService;

  beforeEach(() => {
    repo = createMockRepo();
    service = new ProjectService(repo);
    mockProjectStore.projects = [];
    mockProjectStore.loading = false;
    mockProjectStore.error = null;
    mockProjectStore.projectDetail = null;
    mockProjectStore.detailLoading = false;
    mockProjectStore.detailError = null;
  });

  describe('init', () => {
    it('sets loading state then populates projects on success', async () => {
      vi.mocked(repo.fetchProject).mockResolvedValue(createProject());

      await service.init(fetch);

      expect(mockProjectStore.loading).toBe(false);
      expect(mockProjectStore.projects.length).toBeGreaterThan(0);
      expect(mockProjectStore.error).toBeNull();
    });

    it('sets error when all projects fail', async () => {
      vi.mocked(repo.fetchProject).mockRejectedValue(new Error('API Error'));

      await service.init(fetch);

      expect(mockProjectStore.error).toBeTruthy();
      expect(mockProjectStore.loading).toBe(false);
    });

    it('handles partial failures without setting global error', async () => {
      const successProject = createProject({ id: 'success', name: 'Success' });
      vi.mocked(repo.fetchProject)
        .mockResolvedValueOnce(successProject)
        .mockRejectedValue(new Error('fail'));

      await service.init(fetch);

      expect(mockProjectStore.error).toBeNull();
      expect(mockProjectStore.loading).toBe(false);
    });

    it('does not re-initialize if already initializing', async () => {
      vi.mocked(repo.fetchProject).mockResolvedValue(createProject());

      await Promise.all([service.init(fetch), service.init(fetch)]);

      expect(repo.fetchProject).toHaveBeenCalledTimes(12);
    });
  });

  describe('openDetail', () => {
    it('sets project detail on success', async () => {
      vi.mocked(repo.fetchProject).mockResolvedValue(createProject());

      await service.openDetail(createProject(), fetch);

      expect(mockProjectStore.projectDetail).toBeTruthy();
      expect(mockProjectStore.detailError).toBeNull();
      expect(mockProjectStore.detailLoading).toBe(false);
    });

    it('sets detail error on failure', async () => {
      vi.mocked(repo.fetchProject).mockRejectedValue(new Error('Not found'));

      await service.openDetail(createProject(), fetch);

      expect(mockProjectStore.detailError).toBeTruthy();
      expect(mockProjectStore.projectDetail).toBeNull();
      expect(mockProjectStore.detailLoading).toBe(false);
    });
  });

  describe('getReadme', () => {
    it('returns readme from repository', async () => {
      vi.mocked(repo.fetchReadme).mockResolvedValue('# Readme Content');

      const result = await service.getReadme(createProject(), fetch);

      expect(result).toBe('# Readme Content');
    });

    it('returns null when readme is not available', async () => {
      vi.mocked(repo.fetchReadme).mockResolvedValue(null);

      const result = await service.getReadme(createProject(), fetch);

      expect(result).toBeNull();
    });
  });
});
