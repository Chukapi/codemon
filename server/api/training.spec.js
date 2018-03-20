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

    const answer = `function returnString(s){s}`

    beforeEach(() => {
      return Problem.create({
        id: 1,
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

  //   it('POST apl/training/test/1', () => {
  //     return request(app)
  //   .post('/api/training/test/1', answer)
  //   .expect(200)
  //     .then(res => {
  //       expect(res.body).to.equal(answer)
  //     })
  //  })

  })
})
