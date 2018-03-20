const { expect } = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const Problem = db.model('problem')

describe('Training routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('api/training', () => {
    const problemPrompt = 'Create a function returnString that takes a string and returns the same string.'
    const problemTests = "returnString('hello world') === 'hello world'"

    beforeEach(() => {
      return Problem.create({
        prompt: problemPrompt,
        tests: problemTests
      })
    })

    it('GET apl/training', () => {
      return request(app)
      .get('/api/training')
      .expect(200)
      .then(res => {
        expect(res.body[0].prompt).to.equal(problemPrompt)
      })
    })

  })
})
