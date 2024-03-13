"use client";

import Image from "next/image";
import React, { useState } from "react";
import styles from "@/app/ui/project.module.css";

const AWS_ASSETS_URL =
  "https://pinwheels-portfolio-eirian.s3.ca-central-1.amazonaws.com/";

interface URLItem {
  key: string;
  type: string;
  demo: string;
  githubCode: string;
}

interface ProjectCardProps {
  appCode: string;
  title: string;
  company: string;
  thumbnailFormat: string;
  tags: string[];
  desc: string;
  urls: URLItem[];
}

const ExperienceCard: React.FC<ProjectCardProps> = (props) => {
  const { appCode, title, company, thumbnailFormat, tags, desc, urls } = props;

  const descArray = desc.split("|");

  const [isShowingMore, setIsShowingMore] = useState(false);

  const toggleShowingMore = () => {
    setIsShowingMore(!isShowingMore);
  };

  return (
    <div className={`${styles.projectCard} text-left p-5`}>
      <h3 className="font-bold text-lg">{title}</h3>
      {company && <h4 className="italic">{company}</h4>}
      {thumbnailFormat ? (
        <Image
          className={``}
          src={
            AWS_ASSETS_URL +
            "assets/projects/" +
            appCode +
            "." +
            thumbnailFormat
          }
          alt="photo of Eirian in a cartoon style"
          width={1000}
          height={1}
        />
      ) : (
        <p className="italic text-sm">
          For privacy reasons, there are no images available for this project.
        </p>
      )}
      <div className="flex flex-wrap">
        <b>Tags:</b>
        {tags.map((tag, index) => (
          <span
            key={"tag" + index}
            className={`${styles.tag} rounded-full px-3 py-1 text-xs font-semibold mx-1 my-1`}
          >
            {tag.toUpperCase()}
          </span>
        ))}
      </div>
      {descArray.map((item, index) => (
        <p key={"desc" + index}>{item}</p>
      ))}
    </div>
  );
};

export default ExperienceCard;
