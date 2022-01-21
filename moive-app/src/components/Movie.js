import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./Movie.module.css";

function Movie({ index }) {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const getMovie = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?limit=1&page=${index}`
      )
    ).json();
    setMovie(json.data.movies[0]);
    setIsLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div className={styles.movieBox} key={index}>
      {isLoading ? null : (
        <nav>
          <Link to={`/movie/${movie.id}`}>
            <img src={movie.medium_cover_image} alt={movie.title} />
          </Link>
        </nav>
      )}
    </div>
  );
}

export default Movie;
