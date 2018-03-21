import axios from 'axios';

//ACTION TYPES
const SET_POKEMON = 'SET_POKEMON';
const UPDATE_POKEMON = 'UPDATE_POKEMON';
// const TRIGGER_EVOLUTION = 'TRIGGER_EVOLUTION';

//ACTION CREATORS
export const setPokemon = currentPokemon => ({ type: SET_POKEMON, currentPokemon });

export const updatePokemon = currentPokemon => ({ type: UPDATE_POKEMON, currentPokemon });


//THUNK CREATORS
export const fetchPokemon = id => dispatch =>
  axios.get(`/api/pokemon/${id}`)
    .then(pokemon => dispatch(setPokemon(pokemon.data)))
    .catch(err => console.error(`You got an error ${err}`));

export const revisePokemon = (id, info) => dispatch =>
  axios.put(`/api/pokemon/${id}`, info)
    .then(pokemon => dispatch(updatePokemon(pokemon.data)))
    .catch(err => console.error(`Failed to update ${err}`));

export const triggerEvolution = (id, pokeName) => dispatch =>
  axios.get(`/api/evolution/${pokeName}`)
    .then(pokemon => {
      const { name, imageUrl, stage } = pokemon.data;
      const updatedInfo = {
        name: name,
        imageUrl: imageUrl,
        evolutionLevel: stage
      }

      dispatch(revisePokemon(id, updatedInfo))
    })
    .catch(err => console.error('Could not trigger evolution', err));


//REDUCER
export default (currentPokemon = {}, action) => {
  switch (action.type) {

    case SET_POKEMON:
      return action.currentPokemon;

    case UPDATE_POKEMON:
      return action.currentPokemon;

    default: return currentPokemon;
  }
}

