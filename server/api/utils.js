const makeError = (status, message) => {
  const err = new Error(message);
  err.status = status;
  return err;
}
const isAdmin = (req, res, next) => {
  if (!isAdmin) return next(makeError(403, 'Forbidden'));
  next();
};

const isLoggedIn = (req, res, next) => {
  if (!req.user) return next(makeError(401, 'Login'));
  next();
};

// const hello = (req, res, next) => {
//   let chance = Math.random();
//   if (chance <= 0.5 && req.originalUrl.indexOf('fights') === -1 && req.user) console.log(`RES`, res.body);

//   next();
// }

module.exports = {
  isAdmin,
  isLoggedIn,
  makeError,
  // hello
}
