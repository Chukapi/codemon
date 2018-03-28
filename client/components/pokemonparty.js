import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCurrentPokemon, postPokemon } from '../store';

class PokemonParty extends Component {

  handleClick = (evt, pokeId) => {
    this.props.setCurrent(pokeId);
  }

  handleFirstPoke = (evt, firstPoke) => {
    this.props.postFirst(firstPoke);
  }

  render() {
    const { pokemon, firstPokeInfo, userId } = this.props;

    const firstPokemon = {
      name: firstPokeInfo.name,
      exp: 100,
      evolutionLevel: '1',
      imageUrl: firstPokeInfo.imageUrl,
      userId
    };

    return (
      <div className="pokemon-nav">
        {
          pokemon.length ?
            pokemon.map(pokeball => {
              return (
                <div key={pokeball.id}>
                  <img onClick={evt => this.handleClick(evt, pokeball.id)} src="https://upload.wikimedia.org/wikipedia/en/3/39/Pokeball.PNG" />
                </div>
              )
            }) :
            <div>
              <button className="animated bounce" onClick={evt => this.handleFirstPoke(event, firstPokemon)}>Click here to receive your first Pokémon!</button>
            </div>
        }
      </div>
    )
  }
}

const mapState = state => ({
  pokemon: state.allPokemon,
  firstPokeInfo: state.wildModal.wildPokemon,
  userId: state.user.id
});

const mapDispatch = dispatch => ({
  setCurrent: poke => dispatch(setCurrentPokemon(poke)),
  postFirst: firstPoke => dispatch(postPokemon(firstPoke))
});

export default connect(mapState, mapDispatch)(PokemonParty);
