import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { showDetail, searchMovie } from '../actions';
import Rating from './Rating';

class MovieDetails extends React.Component {

componentDidMount() {
  this.props.showDetail(this.props.params.movieID);
}

  render() {
    if (!this.props.movie) {
      return <h1>Loading...</h1>
    }

    const { name, cover, id, img, summary, videos, esrb, aggregated_rating } = this.props.movie;
    const imageUrl = cover ? `http://images.igdb.com/igdb/image/upload/w_320/${cover.cloudinary_id}.png` : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png';
    const video = videos ? videos[0].video_id : 'dQw4w9WgXcQ';
    const youtubeLink = `https://www.youtube.com/embed/${video}`;
    const summaryText = summary ? summary : 'N/A';
    const rating = aggregated_rating ? Math.round(aggregated_rating / 10) + '/10' : 'Not Rated';
    return (
        <div className="movieDetails">
          <button className="button" id="homeButton" onClick={() => browserHistory.push('/home')}>Home</button>
          <h1 className="detailGameTitle">{name}</h1>
            <Rating /><h5 className="rating"> [{rating}]</h5> <br />
            <img className="image"
                src={imageUrl}
                alt="error, no img found" /><br /><br />
              <div className="summaryText">
                <h3 className="summary">
                <strong style={{float:'left'}}>Synopsis:</strong><br />
                  {summaryText}
                </h3>
              </div>
            <iframe className="iframe" src={youtubeLink} frameBorder="0" allowFullScreen></iframe>
        </div>
    )
  }
};

const mapStateToProps = state => ({
  movie: state.movie
})

export default connect(mapStateToProps, { showDetail, searchMovie })(MovieDetails);
