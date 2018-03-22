import axios from 'axios';

const problems = []

//action types
const GET_PROBLEM = 'GET_PROBLEM';
const ALL_PROBLEMS = "ALL_PROBLEMS";

//action creators
const getProblem = problem => ({ type: GET_PROBLEM, problem });
const allProblems = problems => ({ type: ALL_PROBLEMS, problems })

//thunks
// export function fetchProblem() {
//   return function thunk(dispatch) {

//     return axios.get(`/api/training/${id}`)
//       .then(res => res.data)
//       .then(problem => dispatch(getProblem(problem)))
//       .catch(err => console.log(err));
//   }
// }

export function fetchAllProblems() {
  return function thunk(dispatch){
    return axios.get(`/api/training`)
    .then(res => res.data)
    .then(theProblems => {
      console.log("heProblems", theProblems)
      dispatch(allProblems(theProblems))})
    .catch(err => console.log(err))
  }
}

//reducer
export default function reducer(state = problems, action) {
  switch (action.type) {
    // case GET_PROBLEM:
    //   return action.problem;
    case ALL_PROBLEMS:
    console.log("aciton.problesm", action.problems)
      return action.problems
    default:
      return state;
  }
}
