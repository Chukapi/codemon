const {Fight, Pokemon, Problem, User} = require('./server/db/models');
const db = require('./server/db/db');

const users = [{
  id: 1,
  username: 'Heather',
  email: 'heatherkop320@gmail.com',
  password: 'themyscira',
},
{
  id: 2,
  username: 'Johanna',
  email: 'johanna@fullstack.com',
  password: 'starwars',
},
{
  id: 3,
  username: 'Daymis',
  email: 'daymis@fullstack.com',
  password: 'seedy123',
},
{
  id: 4,
  username: 'Veronica',
  email: 'veronica@fullstack.com',
  password: 'password',
}]

const problems = [
  {
    id: 1,
    prompt: 'Create a function returnString that takes a string and returns the same string.',
    // tests: "const assert = require('chai').assert; assert.equal(returnString('jo'), 'jo')"
    // tests: "assert.deepEqual(returnString('jo'), 'jo')"
    tests: "returnString('hello world') === 'hello world'"
  },
  {
    id: 2,
    prompt: 'Write a function doubleNum that takes an integer and returns double that integer',
    tests: "doubleNum(4) === 8"
  },
  {
    id: 3,
    prompt: 'Write a function tripleNum that takes an integer and returns double that integer',
    tests: "assert.deepEqual(tripleNum(4), 12)"
  }
]

const pokemon = [
  {
    id: 1,
    userId: 2,
    name: 'Pikachu',
    exp: 10,
    imageUrl: '/images/pikachu.gif'
  },
  {
    id: 2, 
    name: 'Charmander',
    exp: 10,
    imageUrl: '/images/charmander.gif'
  },
  {
    id: 3, 
    name: 'Squirtle',
    exp: 10,
    imageUrl: '/images/squirtle.gif'
  }
]

function buildingUsers(){
  return Promise.all(users.map(user => User.create(user)));
}

function buildingProblems(){
  return Promise.all(problems.map(problem => Problem.create(problem)))
}

function buildingPokemon(){
  return Promise.all(pokemon.map(poke => Pokemon.create(poke)))
}

function seed(){
  return buildingUsers()
  .then(() => buildingProblems())
  .then(() => buildingPokemon())
}

console.log('Syncing Database')

db.sync({force: true})
.then(() => {
  console.log('Seeding database');
  return seed();
})
.then(() => console.log('Seeding Successful'))
.catch(err => {
  console.error('Error while seeding');
  console.error(err.stack)
})
.finally(() => {
  db.close();
  return null;
})
