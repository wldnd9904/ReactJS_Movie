import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Detail() {
  const [isLoading, setIsLoading] = useState(true);
  const [detail, setDetail] = useState({});

  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setDetail(json.data.movie);
    setIsLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return isLoading ? null : (
    <div
      style={{
        backgroundImage: `url(${detail.background_image})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <img src={detail.large_cover_image} /> {detail.title}
    </div>
  );
}

export default Detail;
