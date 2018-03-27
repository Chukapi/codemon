import axios from 'axios';
import {setFight} from "./fight"

const CURRENT_POKEMON = 'CURRENT_POKEMON';

export const setCurrentPokemon = currentPokemonId => ({ type: CURRENT_POKEMON, currentPokemonId });

export function putSelectedPokemon(pokemonId, socketId){
  return function thunk(dispatch){
    return axios.put(`/api/fights/${socketId}`, pokemonId)
    .then(res => res.data)
    .then(fight => {
      dispatch(setCurrentPokemon(pokemonId))
      dispatch(setFight(fight))
    })
    .catch(err => console.log(err))
  }
}

export default (currentPokemonId = NaN, action) => {
  switch (action.type) {
    case CURRENT_POKEMON:
      return action.currentPokemonId;
    default: return currentPokemonId;
  }
}