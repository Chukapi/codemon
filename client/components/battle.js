import React, {Component} from 'react';
import Training from './training';
import { fetchOpponent } from '../store';
import { connect } from 'react-redux';
import socket from '../socket';

class Battle extends Component {
  
  render(){
    const {pokemons, currentPokemon, challenger, userSocket} = this.props;
    const battlePokemon = pokemons.find(poke => poke.id === currentPokemon);
    return (
      <div>
        {battlePokemon && <img src={battlePokemon.imageUrl} />}
        <h1>VS.</h1>
        <img src={challenger.imageUrl} />
        <Training />
      </div>
    )
  }

}

const mapState = function (state){
  return {
    opponent: state.fight,
    userId: state.user.id,
    userSocket: state.user.socketId,
    pokemons: state.user.pokemons,
    currentPokemon: state.currentPokemonId,
    challenger: state.battleModal.pokemon,
    // opponentPoke: state.fight.fightInfo.opponentPokemonId
  }
}

export default connect(mapState)(Battle)
