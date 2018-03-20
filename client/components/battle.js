import React, {Component} from 'react';
import {render} from 'react-dom';
import Training from './training';
import socket from '../socket';
import { fetchOpponent } from '../store';
import { connect } from 'react-redux';

class Battle extends Component {
  constructor(){
    super();
  }

  componentDidMount(){
    let opponent = fetchOpponent(this.props.userId)
    console.log(this.props)
    socket.on('say to someone', function(id, msg){
      socket.broadcast.to(opponent).emit('my message', 'BATTLE!')
    })
  }

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

const mapDispatch = {fetchOpponent}

export default connect(mapState, mapDispatch)(Battle)