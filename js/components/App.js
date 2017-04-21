import React from 'react';
import Request from 'superagent';


class App extends React.Component {
  constructor(){
    super();
    this.state = {};
  }

  componentWillMount() {
    // Called the first time the component is loaded right before the component is added to the page
    var url = "https://api.themoviedb.org/3/search/movie?api_key=508b14c0d7be622882e5f6d6221dd78f&language=en-US&query=star&page=10&include_adult=false";
    Request.get(url).then((response) =>{
      this.setState({
        movies: response.body.results,
        total: response.total_results
      })
    })
  }

  componentDidMount() {
    // called after the component has been rendered into the page
  }

  componentWillUnmount() {
    // called when the component is removed.
  }

  render() {
    return (
      <div className="container">
        <form className="form-inline">
          <input type="text" onChange={(e) => this.search()} className="form-control" placeholder="Type a movie to search..." />
          <input type="submit" className="btn btn-success" value="Search" />
        </form>
      </div>
    )
  }

}

export default App
