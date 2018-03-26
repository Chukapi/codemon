const router = require('express').Router();
const { Evolution, User, Problem } = require('../db/models');
const chance = require('chance').Chance();

module.exports = router;

router.get('/:id', (req, res, next) => {
  User.findById(req.params.id)
    .then(({ solvedProblems }) => {

      Problem.findAll({})
        .then(problems => {
          let rand = chance.integer({ min: 1, max: problems.length });

          while (solvedProblems.indexOf(rand) !== -1) {
            rand = chance.integer({ min: 1, max: problems.length });
          }
          return rand;
        })
        .then(rand => {
          Problem.findById(rand)
            .then(wildProblem => {
              Evolution.findAll({ where: { stage: '1' } })
                .then(wildPokemon => res.json({ wildPokemon: chance.pickone(wildPokemon), wildProblem }))
            })
        })
    })
    .catch(next);
});
