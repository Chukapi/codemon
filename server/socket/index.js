module.exports = (io) => {
  io.on('connect', (socket) => {
    console.log(`A socket connection to the server has been made: ${socket.id}`)

    socket.on('disconnect', () => {
      console.log(`Connection ${socket.id} has left the building`)
    })
    socket.on('battle click', (opponentId, msg, poke) => {
      socket.broadcast.to(opponentId).emit('my message', msg, poke)
    })
    socket.on('fetch fight', (socketId, fightId, pokeId) => {
      socket.broadcast.to(socketId).emit('ready to fight', fightId, pokeId)
    })
    socket.on('correct answer', (socketId, winner) => {
      socket.broadcast.to(socketId).emit('announce winner', winner)
    })
    socket.on('correct answer 2', (socketId, winner) => {     
      socket.broadcast.to(socketId).emit('announce winner', winner)
    })
  })
}
