const { Fight, User } = require('../db/models');
const router = require('express').Router();
const Sequelize = require('sequelize')
const Op = Sequelize.Op;

module.exports = router;

router.post('/', (req, res, next) => {
  Fight.create(req.body)
    .then(fight => res.json(fight))
    .catch(next);
});

router.get('/:id', (req, res, next) => {
  User.findAll({where: {
    socketId: {
      [Op.ne]: 'none' 
    },
    id: {
      [Op.ne]: req.params.id
    }
  }})
  .then(users => {
    let getRandomIndex = Math.floor(Math.random() * Math.floor(users.length))
    return users[getRandomIndex].socketId
  })
  // .then(res => res.data)
  .then(opponentId => {
    // console.log('HI THERE', Object.keys(req.socket), 'OPPONENT', opponentId)
    req.socket.on('battle click', () => {
      console.log('here')
      req.socket.broadcast.to(opponentId).emit('my message', 'BATTLE!')
    })
    // let socketId = opponent.socketId;
    // req.app.io.sockets.socket[req.session.socketID].emit('battle')
    // , console.log("You've been challenged to a battle!"))
    res.json(opponentId)
  })
})
