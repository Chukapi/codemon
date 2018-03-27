import React, {Component} from 'react';
import Training from './training';
import { fetchOpponent } from '../store';
import { connect } from 'react-redux';

class Battle extends Component {

  render(){
    const {pokemons, currentPokemon} = this.props;
    const battlePokemon = pokemons.find(poke => poke.id === currentPokemon);
    console.log(battlePokemon)
    return (
      <div>
        {battlePokemon && <img src={battlePokemon.imageUrl} />}
        <h1>VS.</h1>
        
        <Training />
      </div>
    )
  }

}

const mapState = function (state){
  return {
    opponent: state.fight,
    userId: state.user.id,
    pokemons: state.user.pokemons,
    currentPokemon: state.currentPokemonId
  }
}

export default connect(mapState)(Battle)
