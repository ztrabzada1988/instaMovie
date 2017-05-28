import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import { searchMovie } from '../actions';
import { browserHistory } from 'react-router';
class SearchBar extends React.Component {
  state = {
    query: ''
  }

  Loading = () => { return <h5>Loading...</h5> }
  NotLoading = () => { return; }
  isLoading = () => {
    const loading = this.props.loading;
    if (loading) {
      return <Loading />
    } else {
      return <NotLoading />
    }
  };

  onSearchAPI = async (event) => {
    event.preventDefault();
    browserHistory.push('/movies')
    this.props.searchMovie(this.state.query)
  }

  _onChangeTerm = e => this.setState({ query: e.target.value })

  render() {
      return (
          <div className="formDiv">
            <form className="form" onSubmit={this.onSearchAPI}>
              <input className="inputBox" type="text" placeholder="Enter movie title" value={this.state.query} onChange={this._onChangeTerm} />
              <button className="button" type="button" onClick={this.onSearchAPI}>
                  Search
              </button>
            </form>
            <isLoading />
          </div>
      )
  }
}

const mapStateToProps = state => ({
  loading: state.loading
});

export default connect(mapStateToProps, { searchMovie })(SearchBar);
