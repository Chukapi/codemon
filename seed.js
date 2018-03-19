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
    tests: "returnString('hello world') === 'hello world'"
  },
  {
    id: 2,
    prompt: 'Write a function doubleNum that takes an integer and returns double that integer',
    tests: "doubleNum(4) === 8"
  }
]

function buildingUsers(){
  return Promise.all(users.map(user => User.create(user)));
}

function buildingProblems(){
  return Promise.all(problems.map(problem => Problem.create(problem)))
}

function seed(){
  return buildingUsers()
  .then(() => buildingProblems())
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
