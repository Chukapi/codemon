import axios from 'axios';

//action types
const GET_PROBLEM = 'GET_PROBLEM';

//action creators
const getProblem = problem => ({ type: GET_PROBLEM, problem });

//thunks
export function fetchProblem(id) {
  return function thunk(dispatch) {
    return axios.get(`/api/training/test/${id}`)
      .then(res => res.data)
      .then(problem => dispatch(getProblem(problem)))
      .catch(err => console.log(err));
  }
}

//reducer
export default function reducer(problem = '', action) {
  switch (action.type) {
    case GET_PROBLEM:
      return action.problem;
    default:
      return problem;
  }
}
