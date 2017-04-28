import React from 'react';
import {Link} from 'react-router';
import {browserHistory} from 'react-router';

import { showDetail } from '../actions';

export default class GameCard extends React.Component {
  constructor(props) {
    super(props);
  }
  
  truncateText = text => {
   console.log(text);
   if (text.length > 25) {
     return text.substr(0, 25) + "...";
   }
   return text;
  }

  };
}