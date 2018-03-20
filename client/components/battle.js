import React, {Component} from 'react';
import {render} from 'react-dom';
import Training from './training';

export default class Battle extends Component {
  constructor(){
    super();
  }

  render(){
    return (
      <div>
        <Training />
      </div>
    )
  }
}
