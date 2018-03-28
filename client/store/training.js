import axios from 'axios';

const currentProblem = {
  problem: {},
  inBattle: false
}

//action types
const GET_ONE_PROBLEM = 'GET_ONE_PROBLEM';
const IN_BATTLE = 'IN_BATTLE'

//action creators
const oneProblem = problem => ({type: GET_ONE_PROBLEM, problem})
export const initBattle = () => ({type: IN_BATTLE})

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
    default:
      return state;
  }
}
