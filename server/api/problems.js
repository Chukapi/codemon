const { Problem } = require('../db/models');
const router = require('express').Router();

module.exports = router;

router.get('/:id', (req, res, next) => {
  Problem.findById(req.params.id)
    .then(problem => res.json(problem))
    .catch(next);
});
