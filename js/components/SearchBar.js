import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import { searchMovie } from '../actions';
import { browserHistory } from 'react-router';

class SearchBar extends React.Component {
    
    // set initial state to query value empty
    state = {
        query: ''
    }

    // while data is being fetched from API request run the loading... function
    Loading = () => { return <h5>Context Loading...</h5> }
    NotLoading = () => { return; }
    isLoading = () => {
        const loading = this.props.loading;
        if (loading) {
            return <Loading />
        } else {
            return <NotLoading />
        }
    }

    // onsearchapi first preventdefault, go to /games page, and run the searchMovie function imported from actions with value entered by user (query.value)
    onSearchAPI = async (event) => {
        event.preventDefault();
        browserHistory.push('/games')
        this.props.searchMovie(this.state.query)
    }

    // set the value of user input as the query value
    onChangeTerm = e => this.setState({ query: e.target.value })

    render() {
        return (
            <div className="formDiv">
                <form className="form" onSubmit={this.onSearchAPI}>
                    <input className="inputBox" type="text" placeholder="Search Movie Titles..." value={this.state.query} onChange={this.onChangeTerm} />
                    <button className="button" type="button" onClick={this.onSearchAPI}>Search</button>
                </form>
                <isLoading />    
            </div>    
        )
    }
}

// link the component to certain parts of the store
const mapStateToProps = state => ({
    loading: state.loading
});

