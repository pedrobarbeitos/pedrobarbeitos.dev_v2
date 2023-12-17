import React from "react";
import Link from "next/link";
import styles from "./footer.module.css";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerLeft}>
        <Link href="/">contact</Link>
      </div>
      <div className={styles.footerRight}>
        <Link href="./">about</Link>
      </div>
    </div>
  );
};
