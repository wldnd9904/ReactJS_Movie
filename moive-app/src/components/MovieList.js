import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Movie from "./Movie";
import moviestyles from "./Movie.module.css";
import styles from "./MovieList.module.css";

function MovieList({ title, sortby }) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  //-----영화 로드-----//
  const getMovie = async () => {
    setIsLoading(true);
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?sort_by=${sortby}&limit=7&page=${page}`
      )
    ).json();
    setPage(page + 1);
    setMovies(movies.concat(json.data.movies));
    setIsLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  //----------------//
  const onScroll = (event) => {
    console.log(
      event.target.scrollLeft,
      event.target.scrollWidth - event.target.clientWidth
    );
    if (
      !isLoading &&
      event.target.scrollLeft >=
        event.target.scrollWidth - event.target.clientWidth - 230
    ) {
      console.log("loadnig..");
      getMovie();
    }
  };

  return (
    <>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.movieList} onScroll={onScroll}>
        {movies.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            image={movie.medium_cover_image}
            title={movie.title}
          />
        ))}
      </div>
    </>
  );
}

MovieList.propTypes = {
  title: PropTypes.string.isRequired,
  sortby: PropTypes.string.isRequired,
};

export default MovieList;
