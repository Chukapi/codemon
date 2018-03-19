const { Fight } = require('../db/models');
const router = require('express').Router();

module.exports = router;

router.post('/', (req, res, next) => {
  Fight.create(req.body)
    .then(fight => res.json(fight))
    .catch(next);
});
