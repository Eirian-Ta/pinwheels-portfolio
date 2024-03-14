"use client";

import Image from "next/image";
import styles from "@/app/ui/about.module.css";
import { useEffect, useState } from "react";

export default function ProfileImage() {
  const [isRealPhotoShown, setIsRealPhotoShown] = useState(false);
  const [isFirstTimeRendered, setIsFirstTimeRendered] = useState(true);

  const toggleRealPhoto = () => {
    setIsRealPhotoShown(!isRealPhotoShown);
    setIsFirstTimeRendered(false);
  };

  const showRealPhotoAfterTime = () => {
    setIsFirstTimeRendered(false);
    setIsRealPhotoShown(true);
  };

  useEffect(() => {
    setTimeout(showRealPhotoAfterTime, 12000);
  }, []);

  // setTimeout(toggleRealPhoto, 12000);
  return (
    <div
      className={`${styles.profileImageContainer}  m-6 relative`}
      onClick={toggleRealPhoto}
    >
      <Image
        className={`${isRealPhotoShown ? styles.fadeOut : styles.fadeIn} rounded-full absolute top-0`}
        src="https://pinwheels-portfolio-eirian.s3.ca-central-1.amazonaws.com/assets/Eirian_Photo_Animated.jpeg"
        alt="photo of Eirian in a cartoon style"
        width={500}
        height={500}
      />
      {/* <Image
        className={`${isRealPhotoShown ? styles.fadeOut : styles.fadeIn} rounded-full absolute top-0`}
        src="https://pinwheels-portfolio-eirian.s3.ca-central-1.amazonaws.com/assets/Eirian_Photo_Cartoon.png"
        alt="photo of Eirian in a cartoon style"
        width={500}
        height={500}
      /> */}
      <Image
        className={`${isRealPhotoShown ? styles.fadeIn : styles.fadeOut} absolute top-0 ${isFirstTimeRendered ? "invisible" : ""}`}
        src="https://pinwheels-portfolio-eirian.s3.ca-central-1.amazonaws.com/assets/Eirian_Photo.png"
        alt="photo of Eirian"
        width={500}
        height={500}
      />
    </div>
  );
}
