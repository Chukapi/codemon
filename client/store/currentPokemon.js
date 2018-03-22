// import axios from 'axios';

const CURRENT_POKEMON = 'CURRENT_POKEMON';

export const setCurrentPokemon = currentPokemonId => ({ type: CURRENT_POKEMON, currentPokemonId });

export default (currentPokemonId = NaN, action) => {
  switch (action.type) {
    case CURRENT_POKEMON:
      return action.currentPokemonId;
    default: return currentPokemonId;
  }
}