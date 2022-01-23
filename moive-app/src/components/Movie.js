import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./Movie.module.css";
import { useState } from "react";

function Movie({ id, image, title }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      className={styles.movieBox + " " + (hover ? "hover" : "")}
      key={id}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <nav>
        <Link to={process.env.PUBLIC_URL + `/movie/${id}`}>
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
