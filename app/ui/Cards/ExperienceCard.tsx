"use client";

import React, { useState } from "react";
import styles from "@/app/ui/experience.module.css";
import { ExperienceCardProps } from "@/app/lib/interfaces";
import ShowMoreBtn from "./ShowMoreBtn";

const ExperienceCard: React.FC<ExperienceCardProps> = (props) => {
  const {
    employer,
    employerLogoUrl,
    title,
    time,
    year,
    content,
    stack,
    lastItem,
    schoolItem,
  } = props;

  const [isShowingMore, setIsShowingMore] = useState<boolean>(false);

  return (
    <section
      className={`${styles.experienceCard} ${schoolItem ? styles.schoolCard : ""} text-left  m-8 p-7`}
    >
      <h3 className={`${styles.year}`}>{year}</h3>
      <div>
        <h2 className="text-xl font-bold"> {employer} </h2>
        <h3>{title} </h3>
        <h4 className="italic text-right">{time}</h4>
        <ul
          className={`${styles.achievementList} ${isShowingMore ? "" : styles.achievementListShorten} `}
        >
          {content.map((a) => (
            <li key={a.key}>{a.achieve}</li>
          ))}
        </ul>
      </div>
      {!schoolItem && (
        <ShowMoreBtn
          isShowingMore={isShowingMore}
          setIsShowingMore={setIsShowingMore}
        />
      )}

      <div
        className={`${styles.dividerContainer} flex flex-col items-center -mt-2`}
      >
        {!lastItem && (
          <>
            <div className="w-4 h-4 rounded-full relative z-10">
              <div className="w-4 h-4 rounded-full relative z-10 animate-ping"></div>
            </div>
            <div className="w-1 h-16 bg-gray-200 dark:bg-gray-500 rounded-full -mt-2"></div>
          </>
        )}
      </div>
    </section>
  );
};

export default ExperienceCard;
