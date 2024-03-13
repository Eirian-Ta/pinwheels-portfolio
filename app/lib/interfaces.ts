interface ContentItem {
  key: string;
  achieve: string;
}

export interface ExperienceCardProps {
  employer: string;
  employerLogoUrl: string;
  title: string;
  time: string;
  year: number;
  content: ContentItem[];
  stack: string;
  schoolItem: boolean;
  lastItem: boolean;
}

interface URLItem {
  key: string;
  type: string;
  demo: string;
  githubCode: string;
}

export interface ProjectCardProps {
  appCode: string;
  title: string;
  company?: string;
  thumbnailFormat: string;
  tags: string[];
  desc: string;
  urls: URLItem[];
}
