import React from 'react';
import { connect } from 'react-redux';

const SinglePokemon = props => {
  const { pokemonId, allPokemon } = props;
  console.log(props)

  return (
    <div>
      {!pokemonId ?
        (<img src="http://24.media.tumblr.com/5b94f3545e5e0afa339efe86b6f723f4/tumblr_mgxqxcFyJT1rmazn7o1_400.gif" />) :
        allPokemon.filter(poke => pokemonId === poke.id).map(pokemon =>
          (<div key={pokemon.id}>
            <div>
              <img className="poke-images" src={pokemon.imageUrl} />
            </div>
            <div className="poke-stats">
              <h3>{pokemon.name}</h3>
              <p>Level: {Math.floor(pokemon.exp / 100)}</p>
              <p>Pokemon is Copyright Gamefreak, Nintendo and The Pokémon Company 2001-2013</p>
            </div>
          </div>))
      }
    </div>
  )
}

const mapState = state => ({
  pokemonId: state.currentPokemonId,
  allPokemon: state.allPokemon
});

export default connect(mapState)(SinglePokemon);
