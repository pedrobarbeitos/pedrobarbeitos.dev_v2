import React from "react";
import styles from "./filterBar.module.css";

export default function FilterBar() {
  return (
    <div className={styles.mainBar}>
      <div className={styles.barLeft}>
        <select className={styles.select}>
          <option value="rating">Sort by Rating</option>
          <option value="year">Sort by Release Year</option>
        </select>
      </div>
      <div className={styles.barRight}>
        <input type="text" className={styles.search} placeholder="search" />
      </div>
    </div>
  );
}
