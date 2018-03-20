const router = require('express').Router()
const Sandbox = require('sandbox');
const Problem = require('../db/models/problem.js')
const { isAdmin } = require('./utils')
const assert = require('assert');
// const assert = require('chai').assert;


module.exports = router

router.get('/', isAdmin, (req, res, next) => {
  Problem.findAll({
    attributes: ['id', 'tests', 'prompt']
  })
    .then(problems => res.json(problems))
    .catch(next)
})


router.get('/test/:id', (req, res, next) => {
  Problem.findById(req.params.id)
    .then(problems => res.json(problems))
    .catch(next);
})


router.post('/test/:id', (req, res, next) => {
  Problem.findById(req.params.id)
    .then(problem => problem.tests)
    .then(test => {
      const s = new Sandbox();
      s.run(`${req.body.code}; ${test}`, function (output) {
        console.log('hey buddy', output)
        res.send(output.result)
      })
    })
})
