import { useState, useEffect } from "react";
import Movie from "./Movie";
import styles from "./MovieList.module.css";

function MovieList() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/list_movies.json?limit=7&page=1`)
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div className={styles.movieList}>
      {loading
        ? null
        : movies.map((movie) => <Movie key={movie.id} movie={movie} />)}
    </div>
  );
}

export default MovieList;
