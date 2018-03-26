import axios from 'axios';
import history from '../history';

/**
 * ACTION TYPES
 */
const GET_USER = 'GET_USER';
const REMOVE_USER = 'REMOVE_USER';
const POST_SOCKET = 'POST_SOCKET';
const UPDATE_SOLVED = 'UPDATE_SOLVED';
/**
 * INITIAL STATE
 */
const defaultUser = {}

/**
 * ACTION CREATORS
 */
const getUser = user => ({ type: GET_USER, user });
const removeUser = () => ({ type: REMOVE_USER });
const postSocket = socketId => ({ type: POST_SOCKET, socketId });
const updateSolved = newProb => ({type: UPDATE_SOLVED, newProb});

/**
 * THUNK CREATORS
 */
export const me = (socketId) =>
  dispatch =>
    axios.get('/auth/me')
      .then(res => {
        dispatch(getUser(res.data || defaultUser))
        return res.data
      })
      .then(user => {
        //bug: does not post socket ID on first login, must hard refresh
        if(user.id){
          dispatch(postSocketId(user.id, socketId))
        }
      })
      .catch(err => console.log(err));

export const auth = (email, password, method, socketId) =>
  dispatch =>
    axios.post(`/auth/${method}`, { email, password })
      .then(res => {
        dispatch(getUser(res.data))
        history.push('/home')
      }, authError => { // rare example: a good use case for parallel (non-catch) error handler
        dispatch(getUser({ error: authError }))
      })
      .then(() => dispatch(me(socketId)))
      .catch(dispatchOrHistoryErr => console.error(dispatchOrHistoryErr));

export const postSocketId = (userId, socketId) =>
  dispatch =>
    axios.put(`/api/users/${userId}`, socketId)
      .then(res => res.data)
      .then(_ => {
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

export const putSolvedProbs = (problemId) => {
  return dispatch =>
    axios.put(`/api/training/${problemId}`)
    .then(res => res.data)
    .then(_ => dispatch(updateSolved([problemId])))
    .catch(err => console.log(err));
}


/**
 * REDUCER
 */
export default function (state = defaultUser, action) {
  switch (action.type) {
    case GET_USER:
      return action.user
    case REMOVE_USER:
      return defaultUser
    case POST_SOCKET:
      return Object.assign({}, state, { socketId: action.socketId })
    case UPDATE_SOLVED:
      return Object.assign({}, state, {solvedProblems: state.solvedProblems.concat(action.newProb)})
    default:
      return state
  }
}
