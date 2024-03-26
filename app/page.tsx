"use client";

import { useState, useEffect } from "react";
import TopNav from "./ui/HeadNav/TopNav";
import { socialLinks, resumeData } from "./lib/static-data";
import styles from "@/app/ui/home.module.css";

export default function Home() {
  const [isBigPinwheelRotating, setBigPinwheelRotating] = useState(true);
  const [isSmallPinwheelRotating, setSmallPinwheelRotating] = useState(true);
  const [isMediaListVisible, setMediaListVisible] = useState(false);
  const [isResumeVisible, setResumeVisible] = useState(false);

  const stopBigPinwheelRotation = () => {
    setBigPinwheelRotating(!isBigPinwheelRotating);
  };

  const stopSmallPinwheelRotation = () => {
    setSmallPinwheelRotating(!isSmallPinwheelRotating);
  };

  const toggleMediaList = () => {
    setMediaListVisible(!isMediaListVisible);
  };

  const toggleResume = () => {
    setResumeVisible(!isResumeVisible);
  };

  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    const handleClick = (e: {
      preventDefault: () => void;
      currentTarget: any;
    }) => {
      e.preventDefault();
      const parentElement = e.currentTarget;
      if (parentElement) {
        parentElement.classList.add(styles.animate);
        setTimeout(() => {
          parentElement.classList.remove(styles.animate);
        }, 700);
      }
    };

    const bubblyButtons = document.querySelectorAll(
      `.${styles["bubblyButton"]}`
    );

    bubblyButtons.forEach((button) => {
      button.addEventListener("click", handleClick);
    });

    return () => {
      document.body.classList.remove("overflow-hidden");
      bubblyButtons.forEach((button) => {
        button.removeEventListener("click", handleClick);
      });
    };
  }, []);

  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div className="w-full container mx-auto">
      <div className=" flex flex-col items-center justify-center">
        <div className={styles.landingBox}>
          <TopNav />
          <div
            className={`${styles.landscape} ${styles.leftCloud}`}
            onClick={toggleMediaList}
          >
            <ul
              className={`mediaList flex w-full justify-evenly py-2 absolute bottom-[-60%] ${
                isMediaListVisible ? "visible" : "invisible"
              }`}
            >
              {socialLinks.map((l) => (
                <li key={l.name}>
                  <a href={l.url}>{l.icon}</a>
                </li>
              ))}
            </ul>
          </div>
          <div
            className={`${styles.landscape} ${styles.rightCloud}`}
            onClick={toggleResume}
          >
            <a
              href={resumeData.url}
              target="_blank"
              className={`resumeContainer flex w-full justify-center absolute bottom-[-60%] ${
                isResumeVisible ? "visible" : "invisible"
              }`}
            >
              {resumeData.text}
              {resumeData.icon}
            </a>
          </div>
          <div
            className={`${styles.landscape} ${styles.midTree} ${styles.bubblyButton}`}
          ></div>

          <div
            className={`${styles.landscape} ${styles.leftTree} ${styles.bubblyButton}`}
          >
            <div
              className={`${styles.landscape} ${styles.leftPinwheel} ${isBigPinwheelRotating ? styles.slowRotate : ""}`}
              onClick={stopBigPinwheelRotation}
            ></div>
          </div>
          <div
            className={`${styles.landscape} ${styles.rightTree} ${styles.bubblyButton}`}
          >
            <div
              className={`${styles.landscape} ${styles.rightPinwheel} ${isSmallPinwheelRotating ? styles.fastRotate : ""}`}
              onClick={stopSmallPinwheelRotation}
            ></div>
          </div>
          <div
            className={`${styles.landscape} ${styles.groundCloud} ${styles.bubblyButton}`}
          ></div>
        </div>
      </div>
    </div>
    // </main>
  );
}
