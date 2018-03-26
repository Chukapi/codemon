const router = require('express').Router();
const { Evolution, User, Problems } = require('../db/models');
const Sequelize = require('sequelize');

module.exports = router;

router.get('/problem', (req, res, next) => {
  console.log(req.body.solved);
  // Problems.findAll({})
  //   .then(problems => {
  //     let rand = Math.floor(Math.random() * problems.length);

  //     while ()
  //   })
});

