"use client";

import { useState, useEffect } from "react";
import styles from "@/app/ui/home.module.css";
import Loading from "../Loading";
import TopNav from "../HeadNav/TopNav";
import {
  resumeData,
  socialLinks,
  imageUrlsPlaceHolder,
} from "@/app/lib/static-data";
import { CurrentThemeProps } from "@/app/lib/interfaces";

export default function AnimatedLandscape({
  currentTheme,
  setCurrentTheme,
}: CurrentThemeProps) {
  const AWS_ASSETS_URL =
    "https://pinwheels-portfolio-eirian.s3.ca-central-1.amazonaws.com/assets/";
  const [loading, setLoading] = useState<boolean>(true);
  const [errorLandscape, setErrorLandscape] = useState<boolean>(false);
  // const [backgroundImage, setBackgroundImage] = useState("");

  let imageUrls: string[] = imageUrlsPlaceHolder;

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

  useEffect(() => {
    try {
      setCurrentTheme(localStorage.getItem("currentTheme")!);
    } catch (error) {
      console.warn(
        "currentTheme is reset due to failure to access to local storage: " +
          error
      );
    }
    switch (currentTheme) {
      case "winter":
        imageUrls = imageUrls.map((url) => url.replace("$theme", "1"));
        break;
      case "spring":
        imageUrls = imageUrls.map((url) => url.replace("$theme", "2"));
        break;
      case "summer":
        imageUrls = imageUrls.map((url) => url.replace("$theme", "3"));
        break;
      case "autumn":
        imageUrls = imageUrls.map((url) => url.replace("$theme", "4"));
        break;
      default:
        imageUrls = imageUrls.map((url) => url.replace("$theme", "1"));
    }

    let loadedImages = 0;
    let i = 0;
    let loading = true;
    const imageLoaders: HTMLImageElement[] = []; // Store image loaders to clean up later

    const handleImageLoad = (success: boolean) => {
      loadedImages += 1;
      if (!success) {
        setErrorLandscape(true);
        setLoading(false);
      }
      if (loadedImages === imageUrls.length) {
        setLoading(false);
      }
    };

    while (loading && i < imageUrls.length) {
      const img = new Image();
      img.src = AWS_ASSETS_URL + imageUrls[i];
      img.onload = () => {
        // setBackgroundImage(`url(${img.src})`);
        handleImageLoad(true);
      };
      img.onerror = () => {
        handleImageLoad(false);
        i = imageUrls.length;
      };
      imageLoaders.push(img); // Keep track of image elements
      i++;
    }

    return () => {
      // Cleanup: Cancel all image loading
      imageLoaders.forEach((img) => {
        img.onload = null;
        img.onerror = null;
      });
    };
  }, [imageUrls, imageUrls.length, loading]);

  return (
    <>
      <div className="w-full container mx-auto" key={currentTheme}>
        <div className=" flex flex-col items-center justify-center">
          <div
            className={styles.landingBox}
            // style={{ backgroundImage }}
          >
            <TopNav
              currentTheme={currentTheme}
              setCurrentTheme={setCurrentTheme}
            />
            {loading ? (
              <Loading />
            ) : errorLandscape ? (
              <p className={`${styles.landscapeError}`}>
                Oops! Looks like our loading page images are taking a coffee
                break ☕️. Feel free to check out other pages for now and swing
                back by later to see them in action!
              </p>
            ) : (
              <>
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
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
