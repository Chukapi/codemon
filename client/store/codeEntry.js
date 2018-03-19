import axios from "axios";

//initial state
const code = '';

//action types
const GET_CODE = 'GET_CODE';

//action creators
const getCode = code => ({type: GET_CODE, code});

//thunks
export function testCode(code, id){
  return function thunk(dispatch){
    return axios.post(`/api/training/test/${id}`, code)
    .then(res => res.data)
    .then(code => dispatch(getCode(code)))
    .catch(err => console.log(err));
  }
}

//reducer
export default function reducer(state = code, action){
  switch (action.type) {
    case GET_CODE:
      return action.code;
    default: 
      return state
  }
}