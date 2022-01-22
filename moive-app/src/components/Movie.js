import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./Movie.module.css";

function Movie({ id, image, title }) {
  return (
    <div className={styles.movieBox} key={id}>
      <nav>
        <Link to={`/movie/${id}`}>
          <img src={image} alt={title} width="230" height="345" />
        </Link>
      </nav>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Movie;
