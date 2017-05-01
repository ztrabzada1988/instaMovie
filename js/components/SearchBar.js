import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import { searchGame } from '../actions';
import { browserHistory } from 'react-router';

class SearchBar extends React.Component {
    
    // set initial state to query value empty
    state = {
        query: ''
    }

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

    onSearchAPI = async (event) => {
        event.preventDefault();
        browserHistory.push('/games')
        this.props.searchGame(this.state.query)
    }

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

const mapStateToProps = state => ({
    loading: state.loading
});

