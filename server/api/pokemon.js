const router = require('express').Router();
const Pokemon = require('../db');

module.exports = router;

router.get('/:id', (req, res, next) => {
  Pokemon.findById(req.params.id)
    .then(pokemon => res.json(pokemon))
    .catch(next);
});

router.put('/:id', (req, res, next) => {
  return Pokemon.update(req.body, { where: { id: req.params.id } })
    .then(pokemon => res.json(pokemon))
    .catch(next);
});
