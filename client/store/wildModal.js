import axios from 'axios';

const initial = {
  showModal: false,
  wildProblem: {},
  wildPokemon: {}
}

const WILD_ATTACK = 'WILD_ATTACK';
const GET_WILD_PROBLEM = 'GET_WILD_PROBLEM';
const GET_WILD_POKEMON = 'GET_WILD_POKEMON';
const HIDE_MODAL = 'HIDE_MODAL';

export const wildAttack = () => ({ type: WILD_ATTACK });
export const getProblem = wildProblem => ({ type: GET_WILD_PROBLEM, wildProblem });
export const getPokemon = wildPokemon => ({ type: GET_WILD_POKEMON, wildPokemon });
export const hideModal = () => ({ type: HIDE_MODAL });

export const fetchWildInfo = id => dispatch =>
  axios.get(`/api/wildpokemon/${id}`)
    .then(({ data }) => {
      console.log('DATA.WILDPROBLEM', data.wildProblem);
      console.log('DATA.WILDPOKEMON', data.wildPokemon);
      dispatch(getProblem(data.wildProblem))
      dispatch(getPokemon(data.wildPokemon))
    })
    .then()
    .catch(err => console.log('COULD NOT GET INFO', err));


export default (state = initial, action) => {
  switch (action.type) {
    case WILD_ATTACK:
      return { ...state, showModal: true };
    case GET_WILD_POKEMON:
      return { ...state, wildPokemon: state.wildPokemon };
    case GET_WILD_PROBLEM:
      return { ...state, wildProblem: state.wildProblem };
    case HIDE_MODAL:
      return { ...state, showModal: false };
    default:
      return state;
  }
}

