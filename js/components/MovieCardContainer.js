import React from 'react';

import MovieCard from './MovieCard';

export default class MovieCardContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {

    return (
      <MovieCard img={this.props.img} id={this.props.id} title={this.props.title} videoId={this.props.videoId} summary={this.props.summary} />
    );
  }
}
