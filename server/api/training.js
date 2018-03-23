const router = require('express').Router()
const Sandbox = require('sandbox');
const Problem = require('../db/models/problem.js')
const { isAdmin } = require('./utils')
const assert = require('assert');
// const assert = require('chai').assert;


module.exports = router

router.get('/', isAdmin, (req, res, next) => {
  Problem.findAll()
    .then(problems => res.json(problems))
    .catch(next)
})


router.get('/:id', (req, res, next) => {
  Problem.findById(req.params.id)
    .then(problems => res.json(problems))
    .catch(next);
})


router.post('/:id', (req, res, next) => {
  Problem.findById(req.params.id)
    .then(problem => problem.tests)
    .then(tests => {
      const sandBox = new Sandbox();
      sandBox.run(`${req.body.code}; ${tests}`, function (output) {
        res.send(output.result)
      })
    })
 })
