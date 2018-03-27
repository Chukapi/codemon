import axios from 'axios';

//initial state
const fight = {
  opponentSocketId: '',
  fightInfo: {}
};

//action types
const GET_OPPONENT = 'GET_OPPONENT';
const NEW_FIGHT = 'NEW_FIGHT';
const SET_FIGHT = 'SET_FIGHT';
const GET_UPDATED_FIGHT = 'GET_UPDATED_FIGHT';

//action creators
export const getOpponent = opponent => ({type: GET_OPPONENT, opponent});
export const newFight = fight => ({type: NEW_FIGHT, fight})
export const setFight = fight => ({type: SET_FIGHT, fight})
export const getUpdatedFight = fight => ({type: GET_UPDATED_FIGHT, fight})

//thunks
export function startFight(body){
  return function thunk(dispatch){
    return axios.post("/api/fights", body)
    .then(res => res.data)
    .then(fight => dispatch(newFight(fight)))
    .catch(err => console.log(err))
  }
}

export function fetchOpponent(id){
  return function thunk(dispatch){
    return axios.get(`/api/fights/${id}`)
    .then(res => res.data)
    .then(opponent => dispatch(getOpponent(opponent)))
    .catch(err => console.log(err));
  }
}

export function getFightAfterAccept(fightId){
  return function thunk(dispatch){
    return axios.get(`/api/fights/find/${fightId}`)
    .then(res => res.data)
    .then(fight => dispatch(getUpdatedFight(fight)))
    .catch(err => console.log(err));
  }
}

//reducer
export default function reducer(state = fight, action){
  switch (action.type) {
    case GET_OPPONENT:
      return Object.assign({}, state, {opponentSocketId: action.opponent.socketId})
    case NEW_FIGHT:
      return Object.assign({}, state, {fightInfo: action.fight})
    case SET_FIGHT:
      return Object.assign({}, state, {fightInfo: action.fight})
    case GET_UPDATED_FIGHT:
      return Object.assign({}, state, {fightInfo: action.fight})      
    default:
      return state
  }
}
