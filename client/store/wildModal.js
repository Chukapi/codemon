import axios from 'axios';

const initial = {
  showModal: false,
  wildProblem: {},
  wildPokemon: {}
}

const WILD_ATTACK = 'WILD_ATTACK';
const GET_PROBLEM = 'GET_PROBLEM';
const GET_POKEMON = 'GET_POKEMON';
const HIDE_MODAL = 'HIDE_MODAL';

export const wildAttack = () => ({ type: WILD_ATTACK });
export const getProblem = wildProblem => ({ type: GET_PROBLEM, wildProblem });
export const getPokemon = wildpokemon => ({ type: GET_POKEMON, wildpokemon });
export const hideModal = () => ({ type: HIDE_MODAL });

export const fetchWildProblem = solved => dispatch =>
  axios.get('/api/wildpokemon', solved)
    .then(problem => dispatch(getProblem(problem)))
    .catch(err => console.log('COULD NOT GET PROBLEM', err));

export const fetchWildPokemon = () => dispatch =>
  axios.get('/api')
    .then(pokemon => dispatch(getPokemon(pokemon)))
    .catch(err => console.log('COULD NOT GET POKEMON', err));


export default (state = initial, action) => {
  switch (action.type) {
    case WILD_ATTACK:
      return { ...state, showModal: true };
    case GET_POKEMON:
      return { ...state, wildPokemon: state.wildPokemon };
    case GET_PROBLEM:
      return { ...state, wildProblem: state.wildProblem };
    case HIDE_MODAL:
      return { ...state, showModal: false };
    default:
      return state;
  }
}

