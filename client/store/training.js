import axios from 'axios';

const currentProblem = {}

//action types
// const ALL_PROBLEMS = 'ALL_PROBLEMS';
const GET_ONE_PROBLEM = 'GET_ONE_PROBLEM'

//action creators
// const allProblems = problems => ({ type: ALL_PROBLEMS, problems })
const oneProblem = problem => ({type: GET_ONE_PROBLEM, problem})

//thunks

export function fetchOneProblem(id) {
  return function thunk(dispatch){
    return axios.get(`/api/training/${id}`)
    .then(res => res.data)
    .then(problem => {
      dispatch(oneProblem(problem))})
    .catch(err => console.log(err))
  }
}

// export function fetchAllProblems() {
//   return function thunk(dispatch){
//     return axios.get(`/api/training`)
//     .then(res => res.data)
//     .then(theProblems => {
//       dispatch(allProblems(theProblems))})
//     .catch(err => console.log(err))
//   }
// }



//reducer
export default function reducer(state = currentProblem, action) {
  switch (action.type) {
    // case ALL_PROBLEMS:
    //   return action.problems
    case GET_ONE_PROBLEM:
      return action.problem
    default:
      return state;
  }
}
