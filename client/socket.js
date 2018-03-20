import io from 'socket.io-client'

const socket = io(window.location.origin)

socket.on('connect', () => {
  console.log('Connected!', socket)
})

//look up! emit the event on the battle component on click. GOES in nav bar. AJAX request instead of socket?
//socker broadcast to certain socket ID.
// socket.on('say to someone', (payload) => {
//   console.log('Connected!', socket)
// })

export default socket
