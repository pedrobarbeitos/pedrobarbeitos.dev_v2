import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./BackImage.module.css"; // Make sure the CSS module name matches

const BackImage: React.FC = () => {
  const [isLeftSide, setIsLeftSide] = useState<boolean>(true);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const windowWidth = window.innerWidth;
      const cursorPosition = e.clientX;
      setIsLeftSide(cursorPosition < windowWidth / 2);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className={styles.imageContainer}>
      <div className={`${styles.image} ${isLeftSide ? styles.visible : ""}`}>
        <Image
          src="/path/to/image1.jpg"
          alt="Image 1"
          layout="fill"
          objectFit="cover" // Adjust as needed
        />
      </div>
      <div className={`${styles.image} ${!isLeftSide ? styles.visible : ""}`}>
        <Image
          src="/path/to/image2.jpg"
          alt="Image 2"
          layout="fill"
          objectFit="cover" // Adjust as needed
        />
      </div>
    </div>
  );
};

export default BackImage;
