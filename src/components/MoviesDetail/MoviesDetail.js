import React from "react";
import { useDispatch } from "react-redux";
import { setMovieDetail } from "../store/actions";
import "./MoviesDetail.css";

function MoviesDetail(props) {
  const { movie, showModal } = props;
  const dispatch = useDispatch();
  const handleCloseModal = () => {
    dispatch(setMovieDetail(null));
  };
  return (
    <div className="movie-detail-modal">
      <div
        className={`backdrop ${showModal ? "showBackdrop" : "hideBackdrop"}`}
        onClick={handleCloseModal}
      >
        <div
          className={`modal ${showModal ? "showModal" : "hideModal"}`}
          style={
            movie
              ? {
                  backgroundImage: `url(https://image.tmdb.org/t/p/original/${
                    movie.backdrop_path || movie.poster_path
                  })`,
                }
              : {}
          }
        >
          <div className="modal-container">
            <div className="movie-info">
              <h1 className="movie-title">
                {movie && (movie.title || movie.name)}
              </h1>
              <p className="statistical">
                <span className="rating">
                  Rating: {movie && movie.vote_average}
                </span>
                <span className="populatity">
                  Popularity: {movie && movie.popularity}
                </span>
              </p>
              <p className="release-date">
                Release date:{" "}
                {movie && (movie.first_air_date || movie.release_date)}
              </p>
              <p className="runtime">Info:</p>
              <p className="overview">{movie && movie.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoviesDetail;
