"use client";

import React, { useEffect, useState } from "react";
import TmdbFilm from "../../models/TmdbFilm";
import TmdbResponse from "../../models/TmdbResponse";
import Image from "next/image";
import styles from "./page.module.css";

export default function FilmCollection() {
  const [films, setFilms] = useState<TmdbFilm[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_TOKEN}`,
    },
  };

  useEffect(() => {
    const fetchFilms = async (page: number) => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/list/8284424?language=en-US&page=${page}`,
          options
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        return data.items;
      } catch (error: any) {
        setError(error);
        return [];
      }
    };

    const fetchAllFilms = async () => {
      setLoading(true);
      try {
        const [pageOne, pageTwo, pageThree] = await Promise.all([
          fetchFilms(1),
          fetchFilms(2),
          fetchFilms(3),
        ]);
        setFilms([...pageOne, ...pageTwo, ...pageThree]);
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllFilms();
  }, []);

  return (
    <div>
      <main className={styles.main}>
        <div className={styles.grid}>
          {films.map((film, i) => (
            <div key={i} className={styles.card}>
              <h2>{film.title}</h2>
              <div className={styles.imageContainer}>
                <Image
                  src={"https://image.tmdb.org/t/p/w500" + film.poster_path}
                  alt={film.title}
                  width={200}
                  height={300}
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
