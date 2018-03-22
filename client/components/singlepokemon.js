import React from 'react';
import { connect } from 'react-redux';

const SinglePokemon = props => {
  const { pokemon } = props;
  return (
    <div>
      <div>
        <img className="poke-images" src={pokemon.imageUrl} />
      </div>
      <div className="poke-stats">
        <h3>{pokemon.name}</h3>
        <p>Level: {Math.floor(pokemon.exp / 100)}</p>
        <p>Pokemon is Copyright Gamefreak, Nintendo and The Pokémon Company 2001-2013</p>
      </div>
    </div>
  )
}

const mapState = state => ({ pokemon: state.currentPokemon });

export default connect(mapState)(SinglePokemon);
