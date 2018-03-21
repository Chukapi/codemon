const router = require('express').Router();
const { Evolution } = require('../db/models');

module.exports = router;

router.get('/:name', (req, res, next) => {
  Evolution.findOne({ where: { previous: req.params.name } })
    .then(evolvedPokemon => res.json(evolvedPokemon))
    .catch(next);
});
