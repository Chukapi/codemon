import React, {Component} from 'react';
import {connect} from 'react-redux';
import {closeModal, putSelectedPokemon} from '../store';
import { Link } from 'react-router-dom';
import socket from '../socket'

class BattleModalPokemon extends Component {
    
  handleClick = (evt, pokeId, mySocketId) => {
    this.props.setCurrent(pokeId, mySocketId)
  }

  onClick = () => {
    this.tellChallengerToFetch(this.props.challengerId, this.props.fightId);
    this.props.close()
  }

  acceptChallenge = (socketId, fightId) => {
    socket.emit('accept', socketId, fightId)
  }

  tellChallengerToFetch = (socketId, fightId) => {
    socket.on('accept', this.acceptChallenge(socketId, fightId))
  }

  render(){
    const {pokemons, user, socketId, close, challengerId, fightId} = this.props
    return (
      <div>
        <p>Select one of your Pokemon and click "Battle!" to accept your opponent's challenge</p>
        {pokemons && pokemons.map(pokemon => {
          return (
            <div key={pokemon.id}>
              <img onClick={(evt) => this.handleClick(evt, pokemon.id, socketId)} src={pokemon.imageUrl} />
              <p>{pokemon.exp} EXP</p>
            </div>
          )
        })}
        <div>
          <button onClick={this.onClick}><Link to={`/fights/${user.id}`}>Battle!</Link></button>
          <button onClick={close}>Decline</button>
        </div>
      </div>
    )
  }
}

const mapState = (state) => ({
  user: state.user,
  pokemons: state.user.pokemons,
  socketId: state.user.socketId,
  currentPokemon: state.currentPokemonId,
  challengerId: state.fight.fightInfo.challengerSocket, 
  fightId: state.fight.fightInfo.id
})

const mapDispatch = (dispatch) => ({
  setCurrent: (pokeId, socketId) => dispatch(putSelectedPokemon(pokeId, socketId)),
  close: () => dispatch(closeModal())
})

export default connect(mapState, mapDispatch)(BattleModalPokemon)