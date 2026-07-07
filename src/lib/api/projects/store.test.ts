import { describe, it, expect } from 'vitest';
import { projectStore } from './store.svelte';
import type { Project } from './types';

describe('projectStore', () => {
  it('initializes projects as empty array', () => {
    expect(projectStore.projects).toEqual([]);
  });

  it('initializes loading as false', () => {
    expect(projectStore.loading).toBe(false);
  });

  it('initializes error as null', () => {
    expect(projectStore.error).toBeNull();
  });

  it('initializes projectDetail as null', () => {
    expect(projectStore.projectDetail).toBeNull();
  });

  it('initializes detailLoading as false', () => {
    expect(projectStore.detailLoading).toBe(false);
  });

  it('initializes detailError as null', () => {
    expect(projectStore.detailError).toBeNull();
  });

  it('reflects mutations to projects', () => {
    const testProject = {
      id: 'test',
      name: 'Test',
      url: '',
      readmeBaseUrl: '',
      imageUrl: '',
      tags: []
    } satisfies Project;
    projectStore.projects = [testProject];
    expect(projectStore.projects).toHaveLength(1);
    expect(projectStore.projects[0].id).toBe('test');
  });

  it('reflects mutations to loading and error', () => {
    projectStore.loading = true;
    projectStore.error = 'something went wrong';
    expect(projectStore.loading).toBe(true);
    expect(projectStore.error).toBe('something went wrong');
  });
});
