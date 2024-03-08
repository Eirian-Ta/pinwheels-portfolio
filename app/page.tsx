"use client";

import { useState, useEffect } from "react";
import TopNav from "./ui/HeadNav/TopNav";

export default function Home() {
  const [isBigPinwheelRotating, setBigPinwheelRotating] = useState(true);
  const [isSmallPinwheelRotating, setSmallPinwheelRotating] = useState(true);

  const stopBigPinwheelRotation = () => {
    setBigPinwheelRotating(!isBigPinwheelRotating);
  };

  const stopSmallPinwheelRotation = () => {
    setSmallPinwheelRotating(!isSmallPinwheelRotating);
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
        parentElement.classList.add("animate");
        setTimeout(() => {
          parentElement.classList.remove("animate");
        }, 700);
      }
    };

    const bubblyButtons = document.querySelectorAll(".bubbly-button");

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
        <div className="landing-box">
          <TopNav />
          <div className="landscape left-cloud"></div>
          <div className="landscape right-cloud"></div>
          <div className="landscape mid-tree bubbly-button"></div>
          <div className="landscape left-tree bubbly-button">
            <div
              className={
                "landscape left-pinwheel " +
                `${isBigPinwheelRotating ? "slow-rotate" : ""}`
              }
              onClick={stopBigPinwheelRotation}
            ></div>
          </div>
          <div className="landscape right-tree bubbly-button">
            <div
              className={
                "landscape left-pinwheel " +
                `${isSmallPinwheelRotating ? "fast-rotate" : ""}`
              }
              onClick={stopSmallPinwheelRotation}
            ></div>
          </div>
          <div className="landscape ground-cloud bubbly-button"></div>
        </div>
      </div>
    </div>
    // </main>
  );
}
