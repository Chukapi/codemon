import React, { Component } from 'react';
// import SinglePokemon from './singlepokemon';
import { connect } from 'react-redux';
import { setCurrentPokemon } from '../store';

class PokemonParty extends Component {
  // state = {
  //   pokemon: {}
  // }

  handleClick = (evt, pokeId) => {
    this.props.setCurrent(pokeId);
  }

  // componentDidUpdate() {
  //   this.props.setCurrent(this.state.pokemon)
  // }

  render() {
    const { pokemon } = this.props;

    return (
      <div>
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
        {
          // this.state.pokemon.id ?
          // <SinglePokemon pokemon={this.state.pokemon} /> :
          // <img src="http://24.media.tumblr.com/5b94f3545e5e0afa339efe86b6f723f4/tumblr_mgxqxcFyJT1rmazn7o1_400.gif" />
        }
      </div>
    )
  }
}

const mapState = state => ({
  pokemon: state.allPokemon
})

const mapDispatch = dispatch => ({
  setCurrent: (poke) => dispatch(setCurrentPokemon(poke))
});

export default connect(mapState, mapDispatch)(PokemonParty);
