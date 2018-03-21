import React, {Component} from 'react';
import Training from './training';
import socket from '../socket';
import { fetchOpponent } from '../store';
import { connect } from 'react-redux';

class Battle extends Component {

  componentDidMount(){
    let opponent = fetchOpponent(this.props.userId)
    console.log('THIS>PROPS', this.props)
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

export default connect(mapState, null)(Battle)
