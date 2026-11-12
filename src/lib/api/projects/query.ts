import { initialProjects } from './projects';
import type { Project } from './types';

export type ProjectSortKey = 'date' | 'stars' | 'downloads';
export type ProjectSortDirection = 'asc' | 'desc';

export interface TagSummary {
  name: string;
  count: number;
}

const defaultOrder = new Map<string, number>(
  initialProjects.map((project, index) => [project.id, index])
);

export function filterProjectsByTags(projects: Project[], selectedTags: string[]): Project[] {
  if (selectedTags.length === 0) return projects;
  return projects.filter((project) => selectedTags.every((tag) => project.tags.includes(tag)));
}

export function sortProjects(
  projects: Project[],
  key: ProjectSortKey,
  direction: ProjectSortDirection = 'desc'
): Project[] {
  const multiplier = direction === 'desc' ? -1 : 1;

  return [...projects].sort((a, b) => {
    const diff = valueOf(a, key) - valueOf(b, key);
    if (diff !== 0) return diff * multiplier;
    return (defaultOrder.get(a.id) ?? Infinity) - (defaultOrder.get(b.id) ?? Infinity);
  });
}

export function getTagSummaries(projects: Project[]): TagSummary[] {
  const counts = new Map<string, number>();

  for (const project of projects) {
    for (const tag of project.tags) {
      counts.set(tag, (counts.get(tag) ?? 0) + 1);
    }
  }

  return [...counts.entries()]
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
}

function valueOf(project: Project, key: ProjectSortKey): number {
  if (key === 'date') {
    if (!project.date) return Number.NEGATIVE_INFINITY;
    const time = Date.parse(project.date);
    return Number.isNaN(time) ? Number.NEGATIVE_INFINITY : time;
  }

  if (key === 'stars') return project.starsCount ?? 0;
  return project.downloadsCount ?? 0;
}
