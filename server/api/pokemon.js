const router = require('express').Router();
const { Pokemon } = require('../db/models');

module.exports = router;

router.get('/:id', (req, res, next) => {
  return Pokemon.findAll({ where: { userId: req.params.id } })
    .then(allpokes => res.json(allpokes))
    .catch(next);
});

// router.get('/:id', (req, res, next) => {
//   Pokemon.findById(req.params.id)
//     .then(pokemon => res.json(pokemon))
//     .catch(next);
// });

// router.post('/:id', (req, res, next) => {
//   Pokemon.create(req.body)
//   // here set userId by req.params.id
// });

router.put('/:id', (req, res, next) => {
  Pokemon.update(req.body, { where: { id: req.params.id }, returning: true })
    .then(([row, [pokemon]]) => res.json(pokemon))
    .catch(next);
});
