import axios from 'axios';

const problems = []

//action types
const ALL_PROBLEMS = 'ALL_PROBLEMS';

//action creators
const allProblems = problems => ({ type: ALL_PROBLEMS, problems })

//thunks

export function fetchAllProblems() {
  return function thunk(dispatch){
    return axios.get(`/api/training`)
    .then(res => res.data)
    .then(theProblems => {
      dispatch(allProblems(theProblems))})
    .catch(err => console.log(err))
  }
}

//reducer
export default function reducer(state = problems, action) {
  switch (action.type) {
    case ALL_PROBLEMS:
      return action.problems
    default:
      return state;
  }
}
