const router = require('express').Router();
const Pokemon = require('../db');

module.exports = router;

router.put('/:id', (req, res, next) => {
  Pokemon.update(req.body)
})