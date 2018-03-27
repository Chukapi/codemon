import axios from 'axios';

const currentProblem = {}

//action types
const GET_ONE_PROBLEM = 'GET_ONE_PROBLEM'

//action creators
const oneProblem = problem => ({type: GET_ONE_PROBLEM, problem})

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
      return action.problem
    default:
      return state;
  }
}
