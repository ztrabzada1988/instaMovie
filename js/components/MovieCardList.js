import React from 'react';
import MovieCardContainer from './MovieCardContainer';
import { connect } from 'react-redux';
import _ from 'lodash';

class MovieCardList extends React.Component {

  render() {

    const movies = _movies((movie, index) => {
      const imageUrl = movie.poster ? 'https://image.tmdb.org/t/p/w500' + movie.poster_path : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png';
      const video = movie.videos ? movie.videos[0].video_id : 'dQw4w9WgXcQ';

      return (
          <li key={index}>
             <MovieCardContainer img={imageUrl} id={movie.id} title={movie.name}  summary={movie.summary}/>
          </li>
      );
    });

    return (
        <ul>
            {movies}
        </ul>
    );
  }
};

const mapStateToProps = state => ({
  movies: state.movies
})

export default connect(mapStateToProps)(MovieCardList);
