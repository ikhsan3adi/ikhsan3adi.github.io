export interface Project {
  id: string;
  name: string;
  url: string;
  description?: string;
  readmeBaseUrl: string;
  imageUrl: string;
  readmeUrl?: string;
  tags: string[];
  starsCount?: number;
  forksCount?: number;
  downloadsCount?: number;
  issuesCount?: number;
  pullRequestsCount?: number;
  statusMessage?: string;
  repositoryUrl?: string;
  hasLivePreview?: boolean;
  livePreviewUrl?: string;
}
