import React, { Component } from 'react';
import { connect } from 'react-redux';
import { closeModal, putSelectedPokemon, getFightAfterAccept } from '../store';
import { Link } from 'react-router-dom';
import socket from '../socket'

class BattleModalPokemon extends Component {

  handleClick = (evt, pokeId, mySocketId) => {
    this.props.setCurrent(pokeId, mySocketId)
  }

  onClick = () => {
    socket.emit('fetch fight', this.props.challengerId, this.props.fightId, this.props.currentPokemon);
    this.props.close()
    this.props.getFightAfterAccept(this.props.fightId)
  }

  render() {
    const { pokemons, user, socketId, close, challengerId, fightId } = this.props
    return (
      <div>
        <p>Select one of your Pokemon and click "Battle!" to accept your opponent's challenge</p>
        <div className="battle-own-poke">
          {pokemons && pokemons.map(pokemon => {
            return (
              <div className="battle-own-poke-img" key={pokemon.id}>
                <img onClick={(evt) => this.handleClick(evt, pokemon.id, socketId)} src={pokemon.imageUrl} />
                <p>{pokemon.exp} EXP</p>
              </div>
            )
          })}
        </div>
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
  close: () => dispatch(closeModal()),
  getFightAfterAccept: (fightId) => dispatch(getFightAfterAccept(fightId))
})

export default connect(mapState, mapDispatch)(BattleModalPokemon)