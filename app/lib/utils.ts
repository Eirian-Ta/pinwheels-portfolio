import { ProjectCardProps } from "./interfaces";

export function categorizeProjects(
  projects: ProjectCardProps[]
): Promise<{
  realWorldProjectsData: ProjectCardProps[];
  otherProjectsData: ProjectCardProps[];
}> {
  return new Promise((resolve, reject) => {
    try {
      const realWorldProjectsData: ProjectCardProps[] = [];
      const otherProjectsData: ProjectCardProps[] = [];

      projects.forEach((proj) => {
        if (proj.type === 1) {
          realWorldProjectsData.push(proj);
        } else {
          otherProjectsData.push(proj);
        }
      });

      resolve({ realWorldProjectsData, otherProjectsData });
    } catch (error) {
      reject(error);
    }
  });
}
