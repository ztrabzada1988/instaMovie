import React from 'react';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';

import { showDetail } from '../actions';

class MovieCard extends React.Component {
  constructor(props) {
    super(props);
  }

  // if name exceeds 25 char put ... at the end
  // truncateText = text => {
  //  console.log(text);
  //  if (text.length > 25) {
  //    return text.substr(0, 25) + "...";
  //  }
  //  return text;
  // }

  render() {
    //props here is a single movie object
    const youtubeLink = `https://www.youtube.com/embed/${this.props.videoId}`;

    // pass the following props to movieCardList
    const {title, img, id, summary} = this.props;
    return (
        <div className="movieCard">
        {/* when you click on a movie take me to the page with that movie id */}
        <Link to={`/home/movies/${id}`}>
          <img
              onClick={() => browserHistory.push(`/movies/${id}`)}
              src={img}
              alt="Error: could not find Image" /><br /><br />
        </Link>
        </div>
    );
  };
}

export default MovieCard
