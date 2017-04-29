import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { showDetail, searchGame } from '../actions';
import Rating from './Rating';

class MovieDetails extends React.Component {

    componentDidMount() {
        this.props.showDetail(this.props.params.movieID);
    }

    render() {
        if(!this.props.movie) {
            return <h1>Loading...</h1>
        }

        let data = this.props.data
        // if movie ID is found :
        let posterIMG =  `https://image.tmdb.org/t/p/w500${data.poster}`,
            production = data.production,
            genres = data.genre,
            totalRevenue = data.revenue,
            noData = '-',
            backdropIMG = `https://image.tmdb.org/t/p/original${data.backdrop}`

    }
}

export default MovieDetails