import React from 'react';
import MovieCard from './MovieCard'

class MovieCardContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // container will include all the props from MovieCard
    return ( <
      MovieCard img = {
        this.props.img
      }
      id = {
        this.props.id
      }
      title = {
        this.props.title
      }
      videoId = {
        this.props.videoId
      }
      overview = {
        this.props.overview
      }
      />
    );
  }
}

export default MovieCardContainer