"use client";

import Image from "next/image";
import React, { useState } from "react";
import styles from "@/app/ui/project.module.css";
import { ProjectCardProps } from "@/app/lib/interfaces";
import ShowMoreBtn from "./ShowMoreBtn";

const AWS_ASSETS_URL =
  "https://pinwheels-portfolio-eirian.s3.ca-central-1.amazonaws.com/";

const ExperienceCard: React.FC<ProjectCardProps> = (props) => {
  const { appCode, title, company, thumbnailFormat, tags, desc, urls } = props;

  const descArray = desc.split("|");

  const [isShowingMore, setIsShowingMore] = useState(false);

  return (
    <div className={`${styles.projectCard} text-left p-5 relative`}>
      <h3 className="font-bold text-lg">{title}</h3>
      {company && <h4 className="italic">{company}</h4>}
      {thumbnailFormat ? (
        <a href={urls[0]?.url} target="_blank">
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
        </a>
      ) : (
        <p className="italic text-sm">
          For privacy reasons, there are no images available for this project.
        </p>
      )}
      <div>
        {urls.length > 0 ? (
          <div className="flex justify-between items-center">
            {urls.map((url) => (
              <a
                key={appCode + url.type}
                className="underline"
                href={url.url}
                target="_blank"
              >
                {url.type.charAt(0).toUpperCase() +
                  url.type.slice(1).replace("-", " ")}
              </a>
            ))}
          </div>
        ) : (
          <p>Unfortunately, this project is no longer available for viewing</p>
        )}
      </div>
      <div className="flex flex-wrap justify-between items-center">
        <p className="font-bold">Tags:</p>
        {tags.map((tag, index) => (
          <span
            key={"tag" + index}
            className={`${styles.tag} rounded-full text-xs px-3 py-1 font-semibold mx-1 my-1`}
          >
            {tag.charAt(0).toUpperCase() + tag.slice(1)}
          </span>
        ))}
      </div>
      <ShowMoreBtn
        isShowingMore={isShowingMore}
        setIsShowingMore={setIsShowingMore}
      />
      {isShowingMore
        ? descArray.map((item, index) => <p key={"desc" + index}>{item}</p>)
        : null}
    </div>
  );
};

export default ExperienceCard;
