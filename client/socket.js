import io from 'socket.io-client'
import store, {triggerModal, getFightAfterAccept} from './store'

const socket = io(window.location.origin)

socket.on('connect', () => {
  console.log('Connected!', socket.id)
})

socket.on('my message', (msg, poke) => {
  console.log('MY MESSAGE', msg, poke)
  store.dispatch(triggerModal(msg, poke))
})

socket.on('ready to fight', (id, pokeId) => {
  store.dispatch(getFightAfterAccept(id, pokeId))
})

socket.on('announce winner', (winner) => {
  alert(`${winner} won the battle!`)
})

export default socket
 