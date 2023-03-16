/* eslint-disable array-callback-return */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getSearchMovies, setMovieDetail } from "../store/actions";

import "./SearchMovie.css";

const useQuery = () => new URLSearchParams(useLocation().search);
function SearchMovie(props) {
  const dispatch = useDispatch();
  const { SearchMovies } = useSelector((state) => state.infoMovies);
  const keywords = useQuery().get("keywords");

  useEffect(() => {
    if (keywords) dispatch(getSearchMovies(keywords));
  }, [keywords, dispatch]);

  return (
    <div className="search-container">
      {SearchMovies && SearchMovies.length > 0 ? (
        <div className="search-content">
          {SearchMovies.map((movie, index) => {
            if (movie.backdrop_path !== null && movie.media_type !== "person") {
              const imgUrl = `https://image.tmdb.org/t/p/w500/${
                movie.backdrop_path || movie.poster_path
              }`;
              return (
                <div
                  key={index}
                  className="moive-items"
                  onClick={() => dispatch(setMovieDetail(movie))}
                >
                  <img src={imgUrl} alt={movie.title || movie.name} />
                  <span>{movie.title || movie.name}</span>
                </div>
              );
            }
          })}
        </div>
      ) : (
        <div className="not-found">
          <h1>Your search for "{keywords}" did not have any matches</h1>
        </div>
      )}
    </div>
  );
}

export default SearchMovie;
