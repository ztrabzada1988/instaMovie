/*import React from 'react';
import { connect } from 'react-redux';

function Rating(props) {
    const stars = [];
    for (let i=0; i < 10; i++) {
        let className;
        if (i < Math.floor(props.movie.aggregated_rating) / 10) {
            className = 'fa fa-star';
        }
        else {
            className = 'fa fa-star-o';
        }
        const star = (
            <i className={className} key={i} />
        );
        stars.push(star);
    }

    return (
        <span className="star-rater">
            {stars}
        </span>
    );
}

const mapStateToProps = state => ({
  movie: state.movie
})

export default connect(mapStateToProps)(Rating);*/
