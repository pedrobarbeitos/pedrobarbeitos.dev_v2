"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./backImage.module.css"; // Ensure the CSS module name matches
import A01 from "../../../../public/01A.jpg";
import B01 from "../../../../public/01B.jpg";

const BackImage: React.FC = () => {
  const [isTopLeftOrBottomRight, setIsTopLeftOrBottomRight] =
    useState<boolean>(true);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const cursorX = e.clientX;
      const cursorY = e.clientY;

      setIsTopLeftOrBottomRight(
        (cursorX < windowWidth / 2 && cursorY < windowHeight / 2) ||
          (cursorX >= windowWidth / 2 && cursorY >= windowHeight / 2)
      );
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className={styles.imageContainer}>
      <div
        className={`${styles.imageBox} ${
          isTopLeftOrBottomRight ? styles.visible : ""
        }`}
      >
        <Image src={A01} width={700} height={700} alt="Image A01" priority />
      </div>
      <div
        className={`${styles.imageBox} ${
          !isTopLeftOrBottomRight ? styles.visible : ""
        }`}
      >
        <Image
          src={B01}
          width={700}
          height={700}
          alt="Image B01"
          priority={true}
        />
      </div>
    </div>
  );
};

export default BackImage;
