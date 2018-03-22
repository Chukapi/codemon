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
    res.json(users[getRandomIndex])
  })
  .catch(next)
})
