import axios from 'axios';
import history from '../history';
import socket from '../socket';
// import socket from '../socket';

/**
 * ACTION TYPES
 */
const GET_USER = 'GET_USER';
const REMOVE_USER = 'REMOVE_USER';
const POST_SOCKET = 'POST_SOCKET';

/**
 * INITIAL STATE
 */
const defaultUser = {}

/**
 * ACTION CREATORS
 */
const getUser = user => ({ type: GET_USER, user });
const removeUser = () => ({ type: REMOVE_USER });
const postSocket = socketId => ({type: POST_SOCKET, socketId});


/**
 * THUNK CREATORS
 */
export const me = (socketId) =>
  dispatch =>
    axios.get('/auth/me')
      .then(res =>
        dispatch(getUser(res.data || defaultUser)))
      .then(res => {
        if(res.user.id){
          dispatch(postSocketId(res.user.id, socketId))
        }
      })
      .catch(err => console.log(err));

export const auth = (email, password, method) =>
  dispatch =>
    axios.post(`/auth/${method}`, { email, password })
      .then(res => {
        dispatch(getUser(res.data))
        history.push('/home')
      }, authError => { // rare example: a good use case for parallel (non-catch) error handler
        dispatch(getUser({ error: authError }))
      })
      .catch(dispatchOrHistoryErr => console.error(dispatchOrHistoryErr));

export const postSocketId = (userId, socketId) =>
  dispatch =>
    axios.put(`/api/users/${userId}`, socketId)
      .then(res => res.data)
      .then(userData => {
        dispatch(postSocket(socketId))
      })
      .catch(err => console.log(err))

export const logout = () =>
  dispatch =>
    axios.post('/auth/logout')
      .then(_ => {
        dispatch(removeUser())
        history.push('/login')
      })
      .catch(err => console.log(err));

/**
 * REDUCER
 */
export default function (state = defaultUser, action) {
  console.log('STATE', state)
  switch (action.type) {
    case GET_USER:
      return action.user
    case REMOVE_USER:
      return defaultUser
    case POST_SOCKET:
      return Object.assign({}, state, {socketId: action.socketId})
    default:
      return state
  }
}
