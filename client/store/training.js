import axios from 'axios';

const currentProblem = {
  problem: {},
  inBattle: false,
  viewModal: false,
  resultMsg: ''
}

//action types
const GET_ONE_PROBLEM = 'GET_ONE_PROBLEM';
const IN_BATTLE = 'IN_BATTLE';
const END_BATTLE = 'END_BATTLE';
const CLOSE_END_MODAL = 'CLOSE_END_MODAL';

//action creators
export const oneProblem = problem => ({type: GET_ONE_PROBLEM, problem})
export const initBattle = () => ({type: IN_BATTLE})
export const openEndModal = (msg) => ({type: END_BATTLE, msg})
export const closeEndModal = () => ({type: CLOSE_END_MODAL})

//thunks

export function fetchOneProblem(userId) {
  return function thunk(dispatch) {
    return axios.get(`/api/training/${userId}`)
    .then(res => res.data)
    .then(problem => dispatch(oneProblem(problem)))
    .catch(err => console.log(err))
  }
}

//reducer
export default function reducer(state = currentProblem, action) {
  switch (action.type) {
    case GET_ONE_PROBLEM:
      return Object.assign({}, state, {problem: action.problem})
    case IN_BATTLE:
      return Object.assign({}, state, {inBattle: true})
    case END_BATTLE:
      return Object.assign({}, state, {viewModal: true, resultMsg: action.msg})
    case CLOSE_END_MODAL:
      return Object.assign({}, state, {viewModal: false})
    default:
      return state;
  }
}
