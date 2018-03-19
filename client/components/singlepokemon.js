import React from 'react';

const SinglePokemon = props => {
  const { pokemon } = props;
  console.log(pokemon.experience)
  return (
    <div>
      <div>
        <img className="poke-images" src={pokemon.imageUrl} />
      </div>
      <div className="poke-stats">
        <h3>{pokemon.name}</h3>
        <p>Level: {Math.floor(pokemon.exp / 100) + 1}</p>
      </div>
    </div>
  )
}

export default SinglePokemon;
