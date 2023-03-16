import React, { useEffect, useState } from "react";
import MoviesDetail from "../MoviesDetail/MoviesDetail";
import Content from "../Content/Content";
import Intro from "../Intro/Intro";
import Menu from "../Menu/Menu";
import { useSelector } from "react-redux";

function Home(props) {
  const { MovieDetail } = useSelector((state) => state.infoMovies);
  const [isShowMovieDetail, setIsShowMovieDetail] = useState(false);

  useEffect(() => {
    setIsShowMovieDetail(MovieDetail ? true : false);
  }, [MovieDetail]);
  return (
    <div>
      <Intro />
      <Content />
      <Menu />
      <MoviesDetail movie={MovieDetail} showModal={isShowMovieDetail} />{" "}
    </div>
  );
}

export default Home;
