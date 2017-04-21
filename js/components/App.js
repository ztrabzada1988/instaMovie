import React from 'react';



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

  render() {
    return (
      <div>
        <form class="form-inline">
          <input type="text" class="form-control" placeholder="Type a movie to search..." />
          <input type="submit" class
        </form>
      </div>
    )
  }

}
