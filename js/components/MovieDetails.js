import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { showDetail, searchGame } from '../actions';
let numeral = require('numeral');

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

            // if not data is found :
            if (data.vote === 'undefined' || data.vote === 0) {
                data.vote = noData
            } else {
                data.vote = data.vote + '/10'
            };

            // if revenue is not found :
            if (totalRevenue === 'undefined' || totalRevenue === 0) {
                totalRevenue = noData
            } else {
                totalRevenue = num
            }

    }
}

export default MovieDetails