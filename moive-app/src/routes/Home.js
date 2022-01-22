import MovieList from "../components/MovieList";

function Home() {
  return (
    <div>
      <MovieList title="최신 영화" sortby="year" />
      <MovieList title="평점순" sortby="rating" />
    </div>
  );
}

export default Home;
