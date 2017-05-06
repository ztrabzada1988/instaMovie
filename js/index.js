require('babel-polyfill');

import React from 'react';
import ReactDOM  from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import store from './store';

import App from './components/App';
import MovieCardList from './components/MovieCardList';
import MovieDetails from './components/MovieDetails';
