import axios from 'axios';
import { revisePokemon, triggerEvolution, postPokemon } from './pokemon';
import { putSolvedProbs } from './user';


//ACTION TYPE
const TEST_CODE = 'TEST_CODE';
const CLEAR_RESULT = 'CLEAR_RESULT';

//ACTION CREATOR
const testUserCode = result => ({ type: TEST_CODE, result });
export const clearResult = () => ({ type: CLEAR_RESULT });

//THUNKS


export const testCode = (userCode, id, pokemon, exp) => dispatch =>
  axios.post(`/api/training/${id}`, userCode)
    .then(res => res.data)
    .then(result => {
      // console.log('RESULT ', typeof result, result)
      if (result === true) {
        if (pokemon.id) {
          let totalExp = pokemon.exp + exp;
          if (totalExp >= 1600 && pokemon.evolutionLevel === 1) {
            dispatch(triggerEvolution(pokemon.id, pokemon.name));
          }
          if (totalExp >= 3600 && pokemon.evolutionLevel === 2) {
            dispatch(triggerEvolution(pokemon.id, pokemon.name));
          }
          dispatch(revisePokemon(pokemon.id, { exp: totalExp }));
        } else {
          dispatch(postPokemon(pokemon))
        }
        dispatch(putSolvedProbs(id))
      }
      dispatch(testUserCode(result));
    })
    .catch(err => console.log(err));



//REDUCER
export default function reducer(state = '', action) {

  switch (action.type) {
    case TEST_CODE:
      return action.result;
    case CLEAR_RESULT:
      return null;
    default:
      return state
  }
}
