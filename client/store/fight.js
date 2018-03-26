import axios from 'axios';

//initial state
const fight = {opponentSocketId: '', showBattleModal: false};

//action types
const GET_OPPONENT = 'GET_OPPONENT';

//action creators
const getOpponent = opponent => ({type: GET_OPPONENT, opponent});

//thunks
export function fetchOpponent(id){
  return function thunk(dispatch){
    return axios.get(`/api/fights/${id}`)
    .then(res => res.data)
    .then(opponent => dispatch(getOpponent(opponent)))
    .catch(err => console.log(err));
  }
}

//reducer
export default function reducer(state = fight, action){
  switch (action.type) {
    case GET_OPPONENT:
      return Object.assign({}, state, {opponentSocketId: action.opponent.socketId} )
    default:
      return state
  }
}
