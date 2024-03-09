"use client";

import Image from "next/image";
import styles from "@/app/ui/about.module.css";
import { useState } from "react";

export default function ProfileImage() {
  const [isRealPhotoShown, setIsRealPhotoShown] = useState(false);

  const toggleRealPhoto = () => {
    setIsRealPhotoShown(true);
  };
  return (
    <div className={`${styles.profileImageContainer} m-6 relative`}>
      <Image
        className={`{${isRealPhotoShown ? "invisible" : "visible"} rounded-full absolute top-0 left-0`}
        src="https://pinwheels-portfolio-eirian.s3.ca-central-1.amazonaws.com/assets/Eirian_Photo_Animated.jpeg"
        alt="photo of Eirian in a cartoon style"
        width={200}
        height={200}
        onClick={toggleRealPhoto}
      />
      <Image
        className={`${isRealPhotoShown ? "visible" : "invisible"}`}
        src="https://pinwheels-portfolio-eirian.s3.ca-central-1.amazonaws.com/assets/Eirian_Photo.png"
        alt="photo of Eirian"
        width={200}
        height={200}
      />
    </div>
  );
}
