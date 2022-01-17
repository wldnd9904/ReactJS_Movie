function Movie({ movie }) {
  return (
    <div key={movie.id}>
      <img src={movie.medium_cover_image} alt="img" />
      <h2>{movie.title}</h2>
      <p>{movie.summary}</p>
      {movie.hasOwnProperty("genres") ? (
        <ul>
          {movie.genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default Movie;
