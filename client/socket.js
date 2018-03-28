import io from 'socket.io-client'
import store, {triggerModal, getFightAfterAccept, openEndModal} from './store'

const socket = io(window.location.origin)

socket.on('connect', () => {
  console.log('Connected!', socket.id)
})

socket.on('my message', (msg, poke) => {
  console.log('MY MESSAGE', msg, poke)
  store.dispatch(triggerModal(msg, poke))
})

socket.on('ready to fight', (id) => {
  store.dispatch(getFightAfterAccept(id))
})

socket.on('announce winner', (msg, fightId) => {
  store.dispatch(openEndModal(msg))
  store.dispatch(getFightAfterAccept(fightId))  
  // store.dispatch(updateFight(winnerId))
})

export default socket
 