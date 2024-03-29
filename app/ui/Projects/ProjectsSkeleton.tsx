"use client";

import styles from "@/app/ui/project.module.css";
import { ProjectCardProps, ProjectsSkeletonProps } from "@/app/lib/interfaces";
import { permanent_marker } from "@/app/ui/fonts";
import ProjectCard from "@/app/ui/Cards/ProjectCard";
import { useEffect, useState } from "react";

export default function ProjectsSkeleton({
  tagsByGroup,
  realWorldProjectsData,
  otherProjectsData,
}: ProjectsSkeletonProps) {
  const [filter, setFilter] = useState<string[]>([]);
  const [realWorldProjList, setRealWorldProjectList] = useState<
    ProjectCardProps[]
  >(realWorldProjectsData);
  const [otherProjList, setOtherProjectList] =
    useState<ProjectCardProps[]>(otherProjectsData);

  useEffect(() => {
    if (filter.length > 0) {
      setRealWorldProjectList(filterByTags(realWorldProjectsData, filter));
      setOtherProjectList(filterByTags(otherProjectsData, filter));
    } else {
      setRealWorldProjectList(realWorldProjectsData);
      setOtherProjectList(otherProjectsData);
    }
  }, [filter]);

  const checkIfTagSetIncludesElementFromTagArr = (
    tagSet: Set<string>,
    tagArr: string[]
  ): boolean => {
    for (let tag of tagArr) {
      if (tagSet.has(tag)) {
        return true;
      }
    }
    return false;
  };

  const filterByTags = (projects: ProjectCardProps[], filter: string[]) => {
    return projects.reduce(
      (accumulator: ProjectCardProps[], currentProj: ProjectCardProps) => {
        const tagSet = new Set(currentProj.tags);
        if (checkIfTagSetIncludesElementFromTagArr(tagSet, filter)) {
          accumulator.push(currentProj);
        }
        return accumulator;
      },
      []
    );
  };

  const handleFiltering = (tag: string) => {
    setFilter((prevFilter: string[]) => {
      const filterSet = new Set(prevFilter);
      if (!checkIfTagSetIncludesElementFromTagArr(filterSet, [tag])) {
        return [...prevFilter, tag];
      }
      return prevFilter.filter((element) => element !== tag);
    });
  };
  return (
    <main className="flex flex-col-reverse justify-between md:flex-row">
      <div className={`${styles.projectsContainer} w-full md:w-4/5`}>
        <section className="m-3 p-2 md:ml-8 md:my-8 md:p-5">
          <h2
            className={`m-3 text-3xl ${permanent_marker.className} antialiased`}
          >
            Real-world Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {realWorldProjList.map((item, index) => (
              <ProjectCard key={index} {...item} />
            ))}
          </div>
        </section>
        <section className="m-3 p-2 md:ml-8 md:my-8 md:p-5">
          <h2
            className={`m-3 text-3xl ${permanent_marker.className} antialiased`}
          >
            Others
          </h2>
          <p className="mb-5">
            Behold, a treasure trove of my personal and school projects! While
            some of the code might be a tad antiquated, dive in for a peek into
            what used to occupy my creative endeavors.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {otherProjList.map((item, index) => (
              <ProjectCard key={index} {...item} />
            ))}
          </div>
        </section>
      </div>
      <section className="w-100 m-3 p-2 md:w-1/6 md:my-8 md:mr-8 md:p-5">
        <p className="font-bold text-lg">Filter by Tags:</p>
        <div>
          {tagsByGroup.map((tagGroup, index) => (
            <div
              key={"tagGroup" + index}
              className={`${styles.tagGroup} my-0 md:my-8`}
            >
              <p className="hidden md:block">{tagGroup.groupName}</p>
              <div className="flex flex-wrap">
                {tagGroup.tags.map((tag) => (
                  <div
                    key={tag}
                    className={`${styles.tag} ${filter.includes(tag ?? "") ? styles.chosenTag : ""} rounded-full px-3 py-1 text-xs font-semibold mx-1 my-1`}
                    onClick={() => handleFiltering(tag ?? "")}
                  >
                    {tag !== undefined
                      ? tag.charAt(0).toUpperCase() + tag.slice(1)
                      : ""}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
