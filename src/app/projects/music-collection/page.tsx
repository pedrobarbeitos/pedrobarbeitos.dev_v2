"use client";

import React, { useEffect, useState } from "react";
import DiscogRecord from "../../models/DiscogRecord";
import DiscogResponse from "../../models/DiscogResponse";
import Image from "next/image";
import styles from "./page.module.css";

export default function MusicCollection() {
  const [records, setRecords] = useState<DiscogRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchRecords() {
      try {
        const response = await fetch(
          `https://api.discogs.com/users/vasquiat/collection/folders/0/releases?token=${process.env.NEXT_PUBLIC_DISCOG_TOKEN}&per_page=100&sort=artist`
        );
        const data: DiscogResponse = await response.json();
        setRecords(data.releases);
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchRecords();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading records.</div>;
  }

  return (
    <div>
      <main className={styles.main}>
        <div className={styles.grid}>
          {records.map((record, i) => (
            <div key={i} className={styles.card}>
              <h2>
                {record.basic_information.title} -{" "}
                {record.basic_information.artists[0].name}
              </h2>
              <div className={styles.imageContainer}>
                <Image
                  src={record.basic_information.cover_image}
                  alt={record.basic_information.title}
                  width={200}
                  height={200}
                  priority
                />
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
