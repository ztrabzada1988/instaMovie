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
        // let posterIMG =  `https://image.tmdb.org/t/p/w500${data.poster}`,
        //     production = data.production,
        //     genres = data.genre,
        //     totalRevenue = data.revenue,
        //     noData = '-',
        //     backdropIMG = `https://image.tmdb.org/t/p/original${data.backdrop}`

            // if no data is found :
            if (data.vote === 'undefined' || data.vote === 0) {
                data.vote = noData
            } else {
                data.vote = data.vote + '/10'
            };

            // if revenue is not found :
            if (totalRevenue === 'undefined' || totalRevenue === 0) {
                totalRevenue = noData
            } else {
                totalRevenue = numeral(data.revenue).format('($0,0)');
            };

            return (
                <div className="col-xs-12 cardcont nopadding">

                    <div className="meta-data-container col-xs-12 col-md-8 push-md-4 col-lg-7 push-lg-5"> 
                        <h1>{data.original_title}</h1>
                        <span className="tagline">{data.tagline}</span>
                        <p>{data.overview}</p>

                        <div className="additional-details">
                            <span className="genre-list">{genres}</span>
                            <span className="production-list">{productionList}</span>
                            <div className="row nopadding release-details">
                                <div className="col-xs-6"> Original Release: <span className="meta-data">{data.release}</span></div>
                                <div className="col-xs-6"> Running Time: <span className="meta-data">{data.runtime}</span></div>
                                <div className="col-xs-6"> Box Office: <span className="meta-data">{data.totalRevenue}</span></div>
                                <div className="col-xs-6"> Vote Average: <span className="meta-data">{data.vote}</span></div>
                        </div>    
                    </div>
                </div>

                <div className="poster-container nopadding col-xs-12 col-md-4 pull-md-8 col-lg-5 pull-lg-7">  
                    <img id="postertest" className="poster" src={posterIMG}/>
                </div>
            </div>    
        )
    }
    
    componentDidUpdate() {
        document.body.style.backgroundImage = `url${backdropIMG}`;
    }
}

export default MovieDetails