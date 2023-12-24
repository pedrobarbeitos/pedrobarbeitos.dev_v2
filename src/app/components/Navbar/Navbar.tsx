import React from "react";
import Link from "next/link";
import styles from "./navbar.module.css";

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarLeft}>
        <Link href="/">pedro barbeitos</Link>
      </div>
      <div className={styles.navbarRight}>
        <Link href="./">projects</Link>
      </div>
    </div>
  );
};
