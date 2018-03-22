import io from 'socket.io-client'

const socket = io(window.location.origin)

socket.on('connect', () => {
  console.log('Connected!', socket.id)
})

socket.on('my message', (msg) => {
  console.log('Time to Battle!')
  alert(msg)
})

export default socket
