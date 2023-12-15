import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";

type Props = {};

function Navbar({}: Props) {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarLeft}>
        <Link href="/">pedro barbeitos</Link>
      </div>
      <div className={styles.navbarRight}>
        <Link href="">about</Link>
        <Link href="">work</Link>
        <Link href="">contact</Link>
      </div>
    </div>
  );
}

export default Navbar;
