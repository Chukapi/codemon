import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setCurrentPokemon, closeModal} from '../store';
import { Link } from 'react-router-dom';

class BattleModalPokemon extends Component {

    
  handleClick = (evt, pokeId) => {
    this.props.setCurrent(pokeId)
  }

  render(){
    const {pokemons, user, decline} = this.props
    return (
      <div>
        <p>Select one of your Pokemon and click "Battle!" to accept your opponent's challenge</p>
        {pokemons && pokemons.map(pokemon => {
          return (
            <div key={pokemon.id}>
              <img onClick={(evt) => this.handleClick(evt, pokemon.id)} src={pokemon.imageUrl} />
              <p>{pokemon.exp} EXP</p>
            </div>
          )
        })}
        <div>
          <button><Link to={`/fights/${user.id}`}>Battle!</Link></button>
          <button onClick={decline}>Decline</button>
        </div>
      </div>
    )
  }
}

const mapState = (state) => ({
  user: state.user,
  pokemons: state.user.pokemons,
})

const mapDispatch = (dispatch) => ({
  setCurrent: (poke) => dispatch(setCurrentPokemon(poke)),
  decline: () => dispatch(closeModal())
})

export default connect(mapState, mapDispatch)(BattleModalPokemon)