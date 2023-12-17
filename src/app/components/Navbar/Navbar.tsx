import React from "react";
import Link from "next/link";
import styles from "./navbar.module.css";

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarLeft}>
        <Link href="/">
          <b>pgsf</b>architects
        </Link>
      </div>
      <div className={styles.navbarRight}>
        <Link href="./">work</Link>
      </div>
    </div>
  );
};
