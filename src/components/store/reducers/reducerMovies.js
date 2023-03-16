import {
  GET_ACTION_MOVIES,
  GET_COMEDY_MOVIES,
  GET_DOCUMENTARIES,
  GET_HORROR_MOVIES,
  GET_NETFLIX_ORIGINALS,
  GET_ROMANCE_MOVIES,
  GET_TOP_RATED_MOVIES,
  GET_TRENDING_MOVIES,
  SET_MOVIE_DETAIL,
  GET_SEARCH_MOVIES,
} from "../contants";

const reducerMoviesInitialState = {
  NetflixOriginals: [],
  TrendingMovies: [],
  TopRatedMovies: [],
  ActionMovies: [],
  ComedyMovies: [],
  HorrorMovies: [],
  RomanceMovies: [],
  Documentaries: [],
  MovieDetail: null,
  SearchMovies: null,
};
export const reducerMovies = (state = reducerMoviesInitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_NETFLIX_ORIGINALS:
      state.NetflixOriginals = payload;
      return { ...state };

    case GET_TRENDING_MOVIES:
      state.TrendingMovies = payload;
      return { ...state };

    case GET_TOP_RATED_MOVIES:
      state.TopRatedMovies = payload;
      return { ...state };

    case GET_ACTION_MOVIES:
      state.ActionMovies = payload;
      return { ...state };

    case GET_COMEDY_MOVIES:
      state.ComedyMovies = payload;
      return { ...state };

    case GET_HORROR_MOVIES:
      state.HorrorMovies = payload;
      return { ...state };

    case GET_ROMANCE_MOVIES:
      state.RomanceMovies = payload;
      return { ...state };

    case GET_DOCUMENTARIES:
      state.Documentaries = payload;
      return { ...state };

    case SET_MOVIE_DETAIL:
      return { ...state, MovieDetail: payload };
    case GET_SEARCH_MOVIES:
      return { ...state, SearchMovies: payload };
    default:
      return state;
  }
};
