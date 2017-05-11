import React from 'react';
import SearchBar from './SearchBar';
import { browserHistory } from 'react-router';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const title = 'InstaMovie';
    return (
      <div>
        <h1 className="webTitle">
          <a href="/">{title}</a>
        </h1>
        <SearchBar />
        <div>
          {this.props.children}
        </div>
      </div>
    );
  };
};


export default App
