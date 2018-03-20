import axios from 'axios';

//action types
const SET_POKEMON = 'SET_POKEMON';
const UPDATE_POKEMON = 'UPDATE_POKEMON';

//action creators

export const setPokemon = pokemon => ({ type: SET_POKEMON, pokemon });
export const updatePokemon = pokemon => ({ type: UPDATE_POKEMON, pokemon });