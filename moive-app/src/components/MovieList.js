import { useState, useEffect } from "react";
import Movie from "./Movie";
import styles from "./MovieList.module.css";

function MovieList() {
  return (
    <div className={styles.movieList}>
      {Array.from({ length: 8 }, (v, index) => (
        <Movie index={index} />
      ))}
    </div>
  );
}

export default MovieList;
