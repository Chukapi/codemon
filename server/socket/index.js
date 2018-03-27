module.exports = (io) => {
  io.on('connect', (socket) => {
    console.log(`A socket connection to the server has been made: ${socket.id}`)

    socket.on('disconnect', () => {
      console.log(`Connection ${socket.id} has left the building`)
    })
    socket.on('battle click', (opponentId, msg) => {
      console.log('hey', opponentId, msg)
      socket.broadcast.to(opponentId).emit('my message', msg)
    })
    // socket.on('pokemon select', (socketId, pokemonId) => {
    //   console.log('HI WE ARE HERE TO FIGHT')
    //   socket.broadcast.to(socketId).emit(console.log('CHOSE POKE', pokemonId, socketId))
    // })
  })
}
