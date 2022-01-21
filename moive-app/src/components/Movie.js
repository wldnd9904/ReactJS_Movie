import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./Movie.module.css";

function Movie({ movie }) {
  const [isLoading, setIsLoading] = useState(true);
  const onload = () => {
    setIsLoading(false);
  };
  return (
    <div
      className={styles.movieBox}
      key={movie.id}
      loaded={isLoading ? "false" : "true"}
    >
      <nav>
        <Link to={`/movie/${movie.id}`}>
          <img
            src={movie.medium_cover_image}
            onLoad={onload}
            alt={movie.title}
          />
        </Link>
      </nav>
    </div>
  );
}

export default Movie;
