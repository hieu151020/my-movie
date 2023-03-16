import React, { useEffect, useRef, useState } from "react";
import "./Content.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { SmoothHorizontalScrolling } from "../../ultils";
import { useDispatch } from "react-redux";
import { setMovieDetail } from "../store/actions";

function MoivieRow(props) {
  const { movies, title, isNetflix, idSection } = props;

  const [drapDown, setDrapDown] = useState(0);
  const [drapMove, setDrapMove] = useState(0);
  const [isDrag, setIsDrag] = useState(false);

  const sliderRef = useRef();
  const movieRef = useRef();

  const dispatch = useDispatch();

  const handleScrollRight = () => {
    const maxScrollLeft =
      sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
    if (sliderRef.current.scrollLeft < maxScrollLeft) {
      SmoothHorizontalScrolling(
        sliderRef.current,
        250,
        movieRef.current.clientWidth,
        sliderRef.current.scrollLeft
      );
    }
  };

  const handleScrollLeft = () => {
    if (sliderRef.current.scrollLeft > 0) {
      SmoothHorizontalScrolling(
        sliderRef.current,
        250,
        -movieRef.current.clientWidth,
        sliderRef.current.scrollLeft
      );
    }
  };

  const handleSetMovie = (movie) => {
    dispatch(setMovieDetail(movie));
  };

  useEffect(() => {
    if (isDrag) {
      if (drapMove < drapDown) handleScrollRight();
      if (drapMove > drapDown) handleScrollLeft();
    }
  }, [drapDown, drapMove, isDrag]);

  const onDragStart = (e) => {
    setIsDrag(true);
    setDrapDown(e.screenX);
  };
  const onDragEnd = (e) => {
    setIsDrag(false);
  };
  const onDragEnter = (e) => {
    setDrapMove(e.screenX);
  };

  return (
    <div id={idSection} className="content-container">
      <h1 className="content-heading">{title}</h1>
      <div
        className="movie-slider"
        ref={sliderRef}
        draggable="true"
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        onDragEnter={onDragEnter}
        style={{ gridTemplateColumns: `repeat(${movies.length},300px)` }}
      >
        {movies &&
          movies.length > 0 &&
          // eslint-disable-next-line array-callback-return
          movies.map((movie, index) => {
            if (movie.poster_path && movie.backdrop_path !== null) {
              let imageUrl = isNetflix
                ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                : `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`;
              return (
                <div
                  key={index}
                  className="movie-item"
                  ref={movieRef}
                  onClick={() => handleSetMovie(movie)}
                >
                  {isNetflix ? (
                    <img
                      src={imageUrl}
                      alt=""
                      width={"300px"}
                      height={"450px"}
                    />
                  ) : (
                    <img
                      src={imageUrl}
                      alt=""
                      width={"300px"}
                      height={"170px"}
                    />
                  )}
                  <div className="movie-name">{movie.title || movie.name}</div>
                </div>
              );
            }
          })}
      </div>
      <div
        className={`btn-left ${isNetflix && "isNetflix"}`}
        onClick={handleScrollLeft}
      >
        <FiChevronLeft />
      </div>
      <div
        className={`btn-right ${isNetflix && "isNetflix"}`}
        onClick={handleScrollRight}
      >
        <FiChevronRight />
      </div>
    </div>
  );
}

export default MoivieRow;
