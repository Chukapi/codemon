import React, {Component} from 'react';
import Training from './training';
import { fetchOpponent } from '../store';
import { connect } from 'react-redux';

class Battle extends Component {

  render(){
    return (
      <div>
        <Training />
      </div>
    )
  }

}

const mapState = function (state){
  return {
    opponent: state.fight,
    userId: state.user.id
  }
}

export default connect(mapState)(Battle)
