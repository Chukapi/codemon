import axios from 'axios';

const currentProblem = {}

//action types
const GET_ONE_PROBLEM = 'GET_ONE_PROBLEM'

//action creators
<<<<<<< HEAD
const oneProblem = problem => ({type: GET_ONE_PROBLEM, problem})
=======
// const allProblems = problems => ({ type: ALL_PROBLEMS, problems })
const oneProblem = problem => ({ type: GET_ONE_PROBLEM, problem })
>>>>>>> master

//thunks

export function fetchOneProblem(userId) {
  return function thunk(dispatch) {
    return axios.get(`/api/training/${userId}`)
<<<<<<< HEAD
    .then(res => res.data)
    .then(problem => dispatch(oneProblem(problem)))
    .catch(err => console.log(err))
=======
      .then(res => res.data)
      .then(problem => {
        dispatch(oneProblem(problem))
      })
      .catch(err => console.log(err))
>>>>>>> master
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
