import axios from 'axios';

//ACTION TYPES
const SET_POKEMON = 'SET_POKEMON';
const UPDATE_POKEMON = 'UPDATE_POKEMON';

//ACTION CREATORS
export const setPokemon = allPokemon => ({ type: SET_POKEMON, allPokemon });

export const updatePokemon = selectedPokemon => ({ type: UPDATE_POKEMON, selectedPokemon });


//THUNK CREATORS
export const fetchPokemon = id => dispatch =>
  axios.get(`/api/pokemon/${id}`)
    .then(pokemon => dispatch(setPokemon(pokemon.data)))
    .catch(err => console.error(`You got an error ${err}`));

export const revisePokemon = (id, info) => dispatch => {
  console.log("INFO", info)
  axios.put(`/api/pokemon/${id}`, info)
    .then(pokemon => dispatch(updatePokemon(pokemon.data)))
    .catch(err => console.error(`Failed to update ${err}`));
}
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
export default (allPokemon = [], action) => {
  switch (action.type) {

    case SET_POKEMON:
      return action.allPokemon;

    case UPDATE_POKEMON:
      return allPokemon.map(poke => (poke.id === action.selectedPokemon.id ? action.selectedPokemon : poke));

    default: return allPokemon;
  }
}

