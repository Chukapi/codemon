import io from 'socket.io-client'
import store, {triggerModal, getFightAfterAccept} from './store'

const socket = io(window.location.origin)

socket.on('connect', () => {
  console.log('Connected!', socket.id)
})

socket.on('my message', (msg, poke) => {
  store.dispatch(triggerModal(msg, poke))
})

socket.on('fetch fight', (id) => {
  store.dispatch(getFightAfterAccept(id))
})

export default socket
 