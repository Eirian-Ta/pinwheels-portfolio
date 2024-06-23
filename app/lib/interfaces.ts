import { TagGroup } from "./types";

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
  type: string;
  url: string;
}

export interface ProjectCardProps {
  appCode: string;
  title: string;
  company?: string;
  thumbnailFormat: string;
  tags: string[];
  desc: string;
  urls: URLItem[];
  type?: number;
}

export interface ShowMoreBtnProps {
  isShowingMore: boolean;
  setIsShowingMore: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ProjectsSkeletonProps {
  tagsByGroup: TagGroup[];
  realWorldProjectsData: ProjectCardProps[];
  otherProjectsData: ProjectCardProps[];
}

export interface CurrentThemeProps {
  currentTheme: string;
  setCurrentTheme: React.Dispatch<React.SetStateAction<string>>;
}
