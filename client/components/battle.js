import React, {Component} from 'react';
import Training from './training';
import { fetchOpponent } from '../store';
import { connect } from 'react-redux';
import socket from '../socket';

class Battle extends Component {


  render(){
    const {pokemons} = this.props;
    console.log(pokemons)
    // const battlePokemon = pokemons.find(poke => poke.id === currentPokemon);
    return (
      <div>
        {/* {battlePokemon && <img src={battlePokemon.imageUrl} />} */}
        {pokemons[0] && <img src={pokemons[0].imageUrl} />}
        <h1>VS.</h1>
        {pokemons[0] && <img src={pokemons[1].imageUrl} />}
        
        {/* <img src={challenger.imageUrl} /> */}
        <Training />
      </div>
    )
  }

}

const mapState = function (state){
  return {
    // opponent: state.fight,
    // userId: state.user.id,
    // userSocket: state.user.socketId,
    pokemons: state.fight.pokemon,
    // currentPokemon: state.currentPokemonId,
  }
}

// const mapDispatch = {fetchOpponentsPokemon}

export default connect(mapState)(Battle)
