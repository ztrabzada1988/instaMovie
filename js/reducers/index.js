import { SEARCH_MOVIE, RECEIVED_MOVIE, SHOW_DETAIL } from '../actions/index.js';

const initialState = {
  loading: false,
  movies: []
}

export default (state=initialState, action) => {
  switch(action.type) {
    case SEARCH_MOVIE:

    return {
      ...state,
      loading: true
    }

    case RECEIVED_MOVIE:

    return {
      movies: action.movies,
      loading: false
    }

    case SHOW_DETAIL:

      return {
        ...state,
        movie: state.movies.filter(i => i.id.toString() === action.movieId)[0]
      }

    default:
      return state;
  }

}
