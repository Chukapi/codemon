import axios from "axios";

//initial state
const code = '';

//action types
const GET_CODE = 'GET_CODE';

//action creators
const getCode = code => ({type: GET_CODE, code});

//thunks
export function testCode(code){
  console.log('hello',code)
  return function thunk(dispatch){
    return axios.post(`/api/training/test`, code)
    .then(res => {console.log('hiiiii',res); return res.data})
    .then(code => {console.log(code); dispatch(getCode(code))})
    .catch(err => console.log(err));
  }
}

//reducer
export default function reducer(state = code, action){
  switch (action.type) {
    case GET_CODE:
      console.log('hi', action.code)
      return action.code;
    default: 
      return state
  }
}