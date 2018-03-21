const router = require('express').Router();
const { User, Pokemon, Fight } = require('../db/models');
const { isAdmin, isLoggedIn } = require('./utils');

module.exports = router;

router.get('/', (req, res, next) => {
  User.findAll({
    // explicitly select only the id and email fields - even though
    // users' passwords are encrypted, it won't help if we just
    // send everything to anyone who asks!
    attributes: ['id', 'email', 'username', 'solvedProblems']
  })
    .then(users => res.json(users))
    .catch(next);
});

router.get('/:id', (req, res, next) => {
  User.findById(req.params.id, {
    include: [Pokemon]
  })
    .then(user => res.json(user))
    .catch(next);
});

router.post('/', (req, res, next) => {
  User.create(req.body)
    .then(user => res.status(201).json(user))
    .catch(next);
});

router.put('/:id', (req, res, next) => {
  User.findById(req.params.id)
  .then(foundUser => foundUser.update({socketId: Object.keys(req.body)[0]}))
  .then(updatedUser => res.json(updatedUser))
  .catch(next)
});

