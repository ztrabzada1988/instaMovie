import React from 'react';
import Request from 'superagent';
import _ from 'lodash';

class App extends React.Component {
  constructor(){
    super();
    this.state = {};
  }

  componentWillMount() {
    // Called the first time the component is loaded right before the component is added to the page
    this.search();
  }

  componentDidMount() {
    // called after the component has been rendered into the page
  }

  componentWillUnmount() {
    // called when the component is removed.
  }

  updateSearch() {
    this.search(this.refs.query.value);
  }

  // search method will take as a default for query "star"
  search(query = "star") {
    var url = `https://api.themoviedb.org/3/search/movie?api_key=508b14c0d7be622882e5f6d6221dd78f&language=en-US&query=${query}&page=10&include_adult=false`;
    Request.get(url).then((response) => {
      this.setState({
        movies: response.body.results,
        total: response.total_results,
      })
    })
  }

  render() {
    // iterate over movies api and return poster of each movie
    var movies = _.map(this.state.movies, (movie) => {
      // put a key as the id of api result to avoid react child warning
      return <li key={movie.id}>{movie.title}</li>
    });

    // just to see my api response
    console.log(this.state.movies);

    return (
      <div className="container">
        <form className="form-inline">
          <input type="text" ref="query" onChange={(e) => this.updateSearch()} className="form-control" placeholder="Type a movie to search..." />
          <input type="submit" className="btn btn-success" value="Search" />
        </form>
        <br/>
        <ul>{movies}</ul>
      </div>
    )
  }

}

export default App
