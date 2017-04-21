import React from 'react';
//import Request from 'superagent';


class App extends React.Component {
  constructor(){
    super();
    this.state = {};
  }

  componentWillMount() {
    // Called the first time the component is loaded right before the component is added to the page
  }

  componentDidMount() {
    // called after the component has been rendered into the page
  }

  componentWillUnmount() {
    // called when the component is removed.
  }

  search(e) {
    console.log("onChange search function is connected");
  }

  submitSearch(e) {
    console.log("button is connected");
  }

  render() {
    return (
      <div className="container">
        <form className="form-inline">
          <input type="text" onChange={(e) => this.search()} className="form-control" placeholder="Type a movie to search..." />
          <input type="submit" onSubmit={(e) => this.submitSearch()} className="btn btn-success" value="Search" />
        </form>
      </div>
    )
  }

}

export default App
