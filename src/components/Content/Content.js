import React, { useEffect } from "react";
import MoivieRow from "./MovieRow";
import { useDispatch, useSelector } from "react-redux";
import {
  getComedyMovies,
  getDocumentaries,
  getHorrorMovies,
  getNetflixOriginals,
  getRomanceMovies,
  getTopRatedMovies,
  getTrendingMovies,
} from "../store/actions";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import { useScrollY } from "../hooks";

const ScrollToTop = () => {
  scroll.scrollToTop();
};
function Content(props) {
  const [scrollY] = useScrollY();

  const dispatch = useDispatch();
  const {
    NetflixOriginals,
    TrendingMovies,
    TopRatedMovies,
    ActionMovies,
    ComedyMovies,
    HorrorMovies,
    RomanceMovies,
    Documentaries,
  } = useSelector((state) => state.infoMovies);

  useEffect(() => {
    dispatch(getNetflixOriginals());
    dispatch(getTrendingMovies());
    dispatch(getTopRatedMovies());
    dispatch(getComedyMovies());
    dispatch(getHorrorMovies());
    dispatch(getRomanceMovies());
    dispatch(getDocumentaries());
  }, [dispatch]);
  return (
    <div>
      <MoivieRow
        movies={NetflixOriginals}
        title="Netflix Originals"
        isNetflix={true}
        idSection="netflix"
      />
      <MoivieRow
        movies={TrendingMovies}
        title="Trending Movies"
        idSection="trendingMovies"
      />
      <MoivieRow
        movies={TopRatedMovies}
        title="Top rated Movies"
        idSection="topRatedMovies"
      />
      <MoivieRow
        movies={ActionMovies}
        title="Action Movies"
        idSection="actionMovies"
      />
      <MoivieRow
        movies={ComedyMovies}
        title="Comedy Movies"
        idSection="comedyMovies"
      />
      <MoivieRow
        movies={HorrorMovies}
        title="Horror Movies"
        idSection="horrorMovies"
      />
      <MoivieRow
        movies={RomanceMovies}
        title="Romance Movies"
        idSection="romanceMovies"
      />
      <MoivieRow
        movies={Documentaries}
        title="Documentaries"
        idSection="documentaries"
      />
      <div
        className="gototop"
        onClick={() => ScrollToTop()}
        style={{ visibility: `${scrollY > 600 ? "visible" : "hidden"}` }}
      >
        <FaArrowAltCircleUp />
      </div>
    </div>
  );
}

export default Content;
