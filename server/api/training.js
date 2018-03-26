const router = require('express').Router()
const Sandbox = require('sandbox');
const Problem = require('../db/models/problem.js')
const { isAdmin } = require('./utils')
const User = require('../db/models/user.js')
const Sequelize = require('sequelize')
const Op = Sequelize.Op;



module.exports = router


router.get('/:userId', (req, res, next) => {
  User.findById(req.params.userId)
  .then(user => user.solvedProblems)
  .then(solvedProblems =>
    Problem.findAll()
  .then(allProblems => allProblems.filter(prob => !solvedProblems.includes(prob.id)))
  .then(problems => {
    const getRandomIndex = Math.floor(Math.random() * Math.floor(problems.length))
    res.send(problems[getRandomIndex])
  })
  .catch(next)
  )})


router.put('/:problemId', (req, res, next) => {
  User.findOne( {
    where: {
      username: req.user.dataValues.username
    }
  })
  .then(foundUser => {
    let updatedSolved = foundUser.solvedProblems.concat([req.params.problemId])
    return foundUser.update({ solvedProblems: updatedSolved })
  })
  .then(updatedUser => res.json(updatedUser))
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
