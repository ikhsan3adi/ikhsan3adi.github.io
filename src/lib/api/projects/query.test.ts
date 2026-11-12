import { describe, it, expect } from 'vitest';
import { filterProjectsByTags, getTagSummaries, sortProjects, type ProjectSortKey } from './query';
import type { Project } from './types';

function createProject(overrides?: Partial<Project>): Project {
  return {
    id: 'test',
    name: 'Test',
    url: '',
    date: '2024-01-01',
    tags: [],
    ...overrides
  };
}

const projects: Project[] = [
  createProject({ id: 'a', date: '2026-05-10', tags: ['svelte'] }),
  createProject({
    id: 'b',
    date: '2024-02-20',
    tags: ['svelte', 'go'],
    starsCount: 120,
    downloadsCount: 30
  }),
  createProject({
    id: 'c',
    date: '2024-02-20',
    tags: ['flutter'],
    starsCount: 500,
    downloadsCount: 5
  }),
  createProject({ id: 'd', date: '2023-01-01', tags: ['go'], starsCount: 10 })
];

describe('filterProjectsByTags', () => {
  it('returns all projects when no tags selected', () => {
    expect(filterProjectsByTags(projects, [])).toHaveLength(4);
  });

  it('returns only projects containing the selected tag', () => {
    const result = filterProjectsByTags(projects, ['go']);
    expect(result.map((p) => p.id)).toEqual(['b', 'd']);
  });

  it('requires all selected tags (AND)', () => {
    const result = filterProjectsByTags(projects, ['svelte', 'go']);
    expect(result.map((p) => p.id)).toEqual(['b']);
  });

  it('returns empty array when no project matches', () => {
    expect(filterProjectsByTags(projects, ['svelte', 'flutter'])).toEqual([]);
  });
});

describe('sortProjects', () => {
  const cases: [ProjectSortKey, (p: Project) => number][] = [
    ['date', (p) => Date.parse(p.date)],
    ['stars', (p) => p.starsCount ?? 0],
    ['downloads', (p) => p.downloadsCount ?? 0]
  ];

  it.each(cases)('sorts by %s descending by default', (key, value) => {
    const result = sortProjects(projects, key);
    for (let i = 1; i < result.length; i++) {
      expect(value(result[i - 1])).toBeGreaterThanOrEqual(value(result[i]));
    }
  });

  it.each(cases)('sorts by %s ascending', (key, value) => {
    const result = sortProjects(projects, key, 'asc');
    for (let i = 1; i < result.length; i++) {
      expect(value(result[i - 1])).toBeLessThanOrEqual(value(result[i]));
    }
  });

  it('treats missing numeric values as zero', () => {
    const result = sortProjects(projects, 'stars', 'asc');
    expect(result[result.length - 1]!.id).toBe('c');
  });

  it('ties are broken by initial order', () => {
    const result = sortProjects(projects, 'date', 'desc');
    expect(result.map((p) => p.id)).toEqual(['a', 'b', 'c', 'd']);
  });

  it('does not mutate the input array', () => {
    const copy = [...projects];
    sortProjects(projects, 'date');
    expect(projects).toEqual(copy);
  });
});

describe('getTagSummaries', () => {
  it('returns unique tags with counts', () => {
    const result = getTagSummaries(projects);
    expect(result).toEqual([
      { name: 'go', count: 2 },
      { name: 'svelte', count: 2 },
      { name: 'flutter', count: 1 }
    ]);
  });

  it('sorts equal counts alphabetically', () => {
    const result = getTagSummaries([createProject({ id: 'x', tags: ['zebra', 'alpha'] })]);
    expect(result).toEqual([
      { name: 'alpha', count: 1 },
      { name: 'zebra', count: 1 }
    ]);
  });

  it('returns empty array for empty projects', () => {
    expect(getTagSummaries([])).toEqual([]);
  });
});
