import {
  SEARCH_MOVIE,
  FETCH_MOVIES,
  FETCH_MOVIE,
  LOADING,
} from "./actionTypes";
import axios from "axios";

export const searchMovie = (text) => {
  return function (dispatch) {
    dispatch({
      type: SEARCH_MOVIE,
      payload: text,
    });
  };
};

export const fetchMovies = (text) => {
  return function (dispatch) {
    axios
      .get(`http://www.omdbapi.com/?apikey=8672d3b9&s=${text}`)
      .then((response) => {
        dispatch({
          type: FETCH_MOVIES,
          payload: response.data.Search,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const fetchMovie = (id) => {
  return function (dispatch) {
    axios
      .get(`http://www.omdbapi.com/?apikey=8672d3b9&i=${id}`)
      .then((response) => {
        dispatch({
          type: FETCH_MOVIE,
          payload: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const setLoading = () => {
  return {
    type: LOADING,
  };
};
