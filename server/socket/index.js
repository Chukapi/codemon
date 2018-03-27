module.exports = (io) => {
  io.on('connect', (socket) => {
    console.log(`A socket connection to the server has been made: ${socket.id}`)

    socket.on('disconnect', () => {
      console.log(`Connection ${socket.id} has left the building`)
    })
    socket.on('battle click', (opponentId, msg, poke) => {
      socket.broadcast.to(opponentId).emit('my message', msg, poke)
    })
    socket.on('accept', (socketId, fightId) => {
      socket.broadcast.to(socketId).emit('fetch fight', fightId)
    })
  })
}
