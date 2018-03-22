import axios from 'axios';
import { revisePokemon, triggerEvolution } from './pokemon';

//ACTION TYPE
const TEST_CODE = 'TEST_CODE';

//ACTION CREATOR
const testUserCode = result => ({ type: TEST_CODE, result });

//THUNKS
export const testCode = (userCode, id, pokemon, exp) => dispatch =>
  axios.post(`/api/training/test/${id}`, userCode)
    .then(res => res.data)
    .then(bool => {
      if (bool) {
        let totalExp = pokemon.exp + exp;
        if (totalExp >= 1600 && pokemon.evolutionLevel === 1) {
          dispatch(triggerEvolution(pokemon.id, pokemon.name));
        }
        if (totalExp >= 3600 && pokemon.evolutionLevel === 2) {
          dispatch(triggerEvolution(pokemon.id, pokemon.name));
        }
        dispatch(revisePokemon(pokemon.id, { exp: totalExp }));
      }
      dispatch(testUserCode(bool));
    })
    .catch(err => console.log(err));

//REDUCER
export default function reducer(result = '', action) {
  switch (action.type) {
    case TEST_CODE:
      return action.result;
    default:
      return result;
  }
}