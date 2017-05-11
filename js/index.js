require('babel-polyfill');

import React from 'react';
import ReactDOM  from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import store from './store';

import App from './components/App';
import MovieCardList from './components/MovieCardList';
import MovieDetails from './components/MovieDetails';

const routes = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={LandingPage} />
      <Route path="/home" component={App}>
        <IndexRoute component={MovieCardList} />
        <Route path="/home/movies/:movieID" component={MovieDetails} />
      </Route>
    </Router>
  </Provider>
)

ReactDOM.render(routes, document.getElementById('app'));
