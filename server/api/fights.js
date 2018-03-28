const { Fight, User, Pokemon } = require('../db/models');
const router = require('express').Router();
const Sequelize = require('sequelize')
const Op = Sequelize.Op;

module.exports = router;

router.post('/', (req, res, next) => {
  Fight.create(req.body)
    .then(fight => res.json(fight))
    .catch(next);
});

router.put('/:socketId', (req, res, next) => {
  Fight.findOne({
    where: {
      opponentSocket: req.params.socketId
    }
  })
  .then(fight => fight.update({opponentPokemonId: +Object.keys(req.body)[0]}))
  .then(updated => res.json(updated))
  .catch(next)
})

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

router.get('/find/:fightId', (req, res, next) => {
  Fight.findById(req.params.fightId)
  .then(fight => {
    let pokemon = [fight]
    Pokemon.findAll({
      where: {
        [Op.or]: [{id: fight.challengerPokemonId}, {id: fight.opponentPokemonId}]
      }
    })
    .then(result => pokemon.concat(result))
    .then(final => res.json(final))
  })
  .catch(next)
})

router.put('/find/:fightId', (req, res, next) => {
  Fight.findById(req.params.fightId)
  .then(fight => fight.update({winnerId: +Object.keys(req.body)[0]}))
  .then(updated => res.json(updated))
  .catch(next)
})
