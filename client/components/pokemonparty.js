import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCurrentPokemon } from '../store';

class PokemonParty extends Component {

  handleClick = (evt, pokeId) => {
    this.props.setCurrent(pokeId);
  }

  render() {
    const { pokemon } = this.props;

    return (
      <div className="pokemon-nav">
        {
          pokemon && pokemon.map(pokeball => {
            return (
              <div key={pokeball.id}>
                <img onClick={(evt) => this.handleClick(evt, pokeball.id)} src="https://upload.wikimedia.org/wikipedia/en/3/39/Pokeball.PNG" />
              </div>
            )
          })
        }
      </div>
    )
  }
}

const mapState = state => ({
  pokemon: state.allPokemon
});

const mapDispatch = dispatch => ({
  setCurrent: (poke) => dispatch(setCurrentPokemon(poke))
});

export default connect(mapState, mapDispatch)(PokemonParty);
