import io from 'socket.io-client'
import store, {triggerModal, getOpponent} from './store'

const socket = io(window.location.origin)

socket.on('connect', () => {
  console.log('Connected!', socket.id)
})

socket.on('my message', (msg, socketId) => {
  console.log('Time to Battle!', socketId)
  store.dispatch(triggerModal(msg))
  // store.dispatch(getOpponent(socketId))
  
  // socket.emit('accept', socketId)
})

// socket.on('accept', (socketId) => {
//   console.log('IN HERE NOw', socketId)
//   store.dispatch(getOpponent(socketId))
// })

// socket.on('chose pokemon', () => {
//   console.log('Opponent chose a pokemon')
// })

export default socket
 