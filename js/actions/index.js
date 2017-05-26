import axios from 'axios';
//axios.defaults.headers.common['X-Mashape-Key'] = 'JX0iguNUhfmsh56hr9JJEnbaKl7lp1PEXWZjsnHgdC9cdmNOB2';
const url = "https://api.themoviedb.org/3/search/movie?api_key=508b14c0d7be622882e5f6d6221dd78f&language=en-US&query=";

export const SEARCH_MOVIE = 'SEARCH_MOVIE';
export const searchMovie = query => async dispatch => {
  dispatch({ type: SEARCH_MOVIE })
  try {
    const res = await axios.get(`${url}${query}`)
    console.log(res);
    return dispatch(receivedMovie(res.data));

  } catch (e) {
    console.log(e);
  }
}

export const RECEIVED_MOVIE = 'RECEIVED_MOVIE';
const receivedMovie = movies => ({
  type: RECEIVED_MOVIE,
  movies
});

export const SHOW_DETAIL = 'SHOW_DETAIL';
export const showDetail = movieId => async dispatch => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=508b14c0d7be622882e5f6d6221dd78f&language=en-US`;

  dispatch ({ type: SHOW_DETAIL })
  try {
    const res = await axios.get(`${url}${movieId}`)
    console.log(res);
    return dispatch(receivedMovie(res.data))
  } catch (e) {
    console.log(e);
  }
}
