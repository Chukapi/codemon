const router = require('express').Router();
module.exports = router;

router.use('/users', require('./users'))
router.use('/fights', require('./fights'));
router.use('/training', require('./training'));
router.use('/pokemon', require('./pokemon'));
router.use('/evolution', require('./evolution'));
router.use('/wildpokemon', require('./wildpokemon'));


router.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});


