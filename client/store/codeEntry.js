import axios from "axios";

//initial state
const code = '';

//action types
const TEST_CODE = 'TEST_CODE';

//action creators
const testUserCode = result => ({type: TEST_CODE, result});

//thunks
export function testCode(code, id){
  return function thunk(dispatch){
    return axios.post(`/api/training/${id}`, code)
    .then(res => {console.log(res.data); return res.data})
    .then(bool => dispatch(testUserCode(bool)))
    .catch(err => console.log(err));
  }
}

//reducer
export default function reducer(state = code, action){
  switch (action.type) {
    case TEST_CODE:
      return action.result;
    default: 
      return state
  }
}