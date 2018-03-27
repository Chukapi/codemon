const { Fight, Pokemon, Problem, User, Evolution } = require('./server/db/models');
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
}];

const problems = [
  {
    id: 1,
    prompt: 'Create a function returnString that takes a string and returns the same string.',
    tests: ["returnString('hello world') === 'hello world'", "returnString('howdy') === 'howdy'"]
  },
  {
    id: 2,
    prompt: 'Write a function doubleNum that takes an integer and returns double that integer',
    tests: ['doubleNum(4) === 8']
  },
  {
    id: 3,
    prompt: 'Write a function tripleNum that takes an integer and returns triple that integer',
    tests: ['tripleNum(4) === 12)']
  },
  {
    id: 4,
    category: 'recursion',
    difficulty: 'easy',
    prompt: 'Write a recursive function factorialRecursive that takes a number as an input and return the factorial of that number',
    tests: ['factorialNum(5) === 120']
  },
  {
    id: 5,
    category: 'recursion',
    difficulty: 'easy',
    prompt: 'Write a recursive function gcdRecursive that takes two numbers as an input and returns  the greatest common divisor of two positive numbers.',
    tests: ['gcdRecursive(9,3) === 3']
  },
  {
    id: 6,
    category: 'recursion',
    difficulty: 'easy',
    prompt: 'Write a recursive function rangeRecursive that take two numbers as input and returns an array of the exclusive range of those numbers. Example: rangeRecursive(2, 9) === [3, 4, 5, 6, 7, 8]',
    tests: ['rangeRecursive(2,9) === [3,4,5,6,7,8]']
  },
  {
    id: 7,
    category: 'recursion',
    difficulty: 'easy',
    prompt: 'Write a recursive function sumRecursive that takes an array of intergers as input and returns the sum of the integers. Example: sumRecursive([3, 4, 5, 6, 7, 8]) === 21.',
    tests: ['sumRecursive([3, 4, 5, 6, 7, 8]) === 21']
  },
  {
    id: 8,
    category: 'recursion',
    difficulty: 'easy',
    prompt: 'Write a recursive function exponentRecursive to compute the exponent of a number. Example: exponentRecursive(4,2) === 16.',
    tests: ['exponentRecursive(4,2) === 16']
  },
  {
    id: 9,
    category: 'recursion',
    difficulty: 'medium',
    prompt: 'Write a recursive function fibRecursive to compute the first n Fibonacci numbers. Note: The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34. . . Each subsequent number is the sum of the previous two. Example: fibRecursive(8) === [ 0, 1, 1, 2, 3, 5, 8, 13, 21 ]',
    tests: ['fibRecursive(8) === [ 0, 1, 1, 2, 3, 5, 8, 13, 21 ]']
  },
  {
    id: 10,
    category: 'recursion',
    difficulty: 'medium',
    prompt: 'Write a recursive function bsearchRecursive for binary search that takes a target number and a sorted array of numbers as input and returns the index of the target number. Example: bsearchRecursive(5, [3,4,5,6,7,8,9,10]) === 2',
    tests: ['bsearchRecursive(5, [3,4,5,6,7,8,9,10]) === 2']
  }
]

const pokemon = [
  {
    userId: 1,
    name: 'Igglybuff',
    exp: 1590,
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/igglybuff.gif'
  },
  {
    userId: 1,
    name: 'Horsea',
    exp: 1590,
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/horsea.gif'
  },
  {
    userId: 1,
    name: 'Torchic',
    exp: 1590,
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/torchic.gif'
  },
  {
    userId: 2,
    name: 'Pichu',
    exp: 1590,
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/pichu.gif'
  },
  {
    userId: 2,
    name: 'Bulbasaur',
    exp: 1590,
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/bulbasaur.gif'
  },
  {
    userId: 2,
    name: 'Geodude',
    exp: 1590,
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/geodude.gif'
  },
  {
    userId: 3,
    name: 'Budew',
    exp: 1590,
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/budew.gif'
  },
  {
    userId: 3,
    name: 'Dratini',
    exp: 1590,
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/dratini.gif'
  },
  {
    userId: 3,
    name: 'Bagon',
    exp: 1590,
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/bagon.gif'
  },
  {
    userId: 4,
    name: 'Charmander',
    exp: 1590,
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/charmander.gif'
  },
  {
    userId: 4,
    name: 'Abra',
    exp: 1590,
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/abra.gif'
  },
  {
    userId: 4,
    name: 'Gastly',
    exp: 1590,
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/gastly.gif'
  },
]

const evolutions = [
  {
    id: 1,
    name: 'Pichu',
    stage: '1',
    previous: null,
    next: 'Pikachu',
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/pichu.gif'
  },
  {
    id: 2,
    name: 'Pikachu',
    stage: '2',
    previous: 'Pichu',
    next: 'Raichu',
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/pikachu.gif'
  },
  {
    id: 3,
    name: 'Raichu',
    stage: '3',
    previous: 'Pikachu',
    next: null,
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/raichu.gif'
  },
  {
    id: 4,
    name: 'Charmander',
    stage: '1',
    previous: null,
    next: 'Charmeleon',
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/charmander.gif'
  },
  {
    id: 5,
    name: 'Charmeleon',
    stage: '2',
    previous: 'Charmander',
    next: 'Charizard',
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/charmeleon.gif'
  },
  {
    id: 6,
    name: 'Charizard',
    stage: '3',
    previous: 'Charmeleon',
    next: null,
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/charizard.gif'
  },
  {
    id: 7,
    name: 'Squirtle',
    stage: '1',
    previous: null,
    next: 'Wartortle',
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/squirtle.gif'
  },
  {
    id: 8,
    name: 'Wartortle',
    stage: '2',
    previous: 'Squirtle',
    next: 'Blastoise',
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/wartortle.gif'
  },
  {
    id: 9,
    name: 'Blastoise',
    stage: '3',
    previous: 'Wartortle',
    next: null,
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/blastoise.gif'
  },
  {
    id: 10,
    name: 'Bulbasaur',
    stage: '1',
    previous: null,
    next: 'Ivysaur',
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/bulbasaur.gif'
  },
  {
    id: 11,
    name: 'Ivysaur',
    stage: '2',
    previous: 'Bulbasaur',
    next: 'Venusaur',
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/ivysaur.gif'
  },
  {
    id: 12,
    name: 'Venusaur',
    stage: '3',
    previous: 'Ivysaur',
    next: null,
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/venusaur.gif'
  },
  {
    id: 13,
    name: 'Pidgey',
    stage: '1',
    previous: null,
    next: 'Pidgeotto',
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/pidgey.gif'
  },
  {
    id: 14,
    name: 'Pidgeotto',
    stage: '2',
    previous: 'Pidgey',
    next: 'Pidgeot',
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/pidgeotto.gif'
  },
  {
    id: 15,
    name: 'Pidgeot',
    stage: '3',
    previous: 'Pidgeotto',
    next: null,
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/pidgeot.gif'
  },
  {
    id: 16,
    name: 'Igglybuff',
    stage: '1',
    previous: null,
    next: 'Jigglypuff',
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/igglybuff.gif'
  },
  {
    id: 17,
    name: 'Jigglypuff',
    stage: '2',
    previous: 'Igglybuff',
    next: 'Wigglytuff',
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/jigglypuff.gif'
  },
  {
    id: 18,
    name: 'Wigglytuff',
    stage: '3',
    previous: 'Jigglypuff',
    next: null,
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/wigglytuff.gif'
  },
  {
    id: 19,
    name: 'Abra',
    stage: '1',
    previous: null,
    next: 'Kadabra',
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/abra.gif'
  },
  {
    id: 20,
    name: 'Kadabra',
    stage: '2',
    previous: 'Abra',
    next: 'Alakazam',
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/kadabra.gif'
  },
  {
    id: 21,
    name: 'Alakazam',
    stage: '3',
    previous: 'Kadabra',
    next: null,
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/alakazam.gif'
  },
  {
    id: 22,
    name: 'Horsea',
    stage: '1',
    previous: null,
    next: 'Seadra',
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/horsea.gif'
  },
  {
    id: 23,
    name: 'Seadra',
    stage: '2',
    previous: 'Horsea',
    next: 'Kingdra',
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/seadra.gif'
  },
  {
    id: 24,
    name: 'Kingdra',
    stage: '3',
    previous: 'Seadra',
    next: null,
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/kindra.gif'
  },
  {
    id: 25,
    name: 'Dratini',
    stage: '1',
    previous: null,
    next: 'Dragonair',
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/dratini.gif'
  },
  {
    id: 26,
    name: 'Dragonair',
    stage: '2',
    previous: 'Dratini',
    next: 'Dragonite',
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/dragonair.gif'
  },
  {
    id: 27,
    name: 'Dragonite',
    stage: '3',
    previous: 'Dragonair',
    next: null,
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/dragonite.gif'
  },
  {
    id: 28,
    name: 'Togepi',
    stage: '1',
    previous: null,
    next: 'Togetic',
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/togepi.gif'
  },
  {
    id: 29,
    name: 'Togetic',
    stage: '2',
    previous: 'Togepi',
    next: 'Togekiss',
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/togetic.gif'
  },
  {
    id: 30,
    name: 'Togekiss',
    stage: '3',
    previous: 'Togetic',
    next: null,
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/togekiss.gif'
  },
  {
    id: 31,
    name: 'Machop',
    stage: '1',
    previous: null,
    next: 'Machoke',
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/machop.gif'
  },
  {
    id: 32,
    name: 'Machoke',
    stage: '2',
    previous: 'Machop',
    next: 'Machamp',
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/machoke.gif'
  },
  {
    id: 33,
    name: 'Machamp',
    stage: '3',
    previous: 'Machoke',
    next: null,
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/machamp.gif'
  },
  {
    id: 34,
    name: 'Bellsprout',
    stage: '1',
    previous: null,
    next: 'Weepinbell',
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/bellsprout.gif'
  },
  {
    id: 35,
    name: 'Weepinbell',
    stage: '2',
    previous: 'Bellsprout',
    next: 'Victreebel',
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/weepinbell.gif'
  },
  {
    id: 36,
    name: 'Victreebel',
    stage: '3',
    previous: 'Weepinbell',
    next: null,
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/victreebel.gif'
  },
  {
    id: 37,
    name: 'Geodude',
    stage: '1',
    previous: null,
    next: 'Graveler',
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/geodude.gif'
  },
  {
    id: 38,
    name: 'Graveler',
    stage: '2',
    previous: 'Geodude',
    next: 'Golem',
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/graveler.gif'
  },
  {
    id: 39,
    name: 'Golem',
    stage: '3',
    previous: 'Graveler',
    next: null,
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/golem.gif'
  },
  {
    id: 40,
    name: 'Magnemite',
    stage: '1',
    previous: null,
    next: 'Magneton',
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/magnemite.gif'
  },
  {
    id: 41,
    name: 'Magneton',
    stage: '2',
    previous: 'Magnemite',
    next: 'Magnezone',
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/magneton.gif'
  },
  {
    id: 42,
    name: 'Magnezone',
    stage: '3',
    previous: 'Magneton',
    next: null,
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/magnezone.gif'
  },
  {
    id: 43,
    name: 'Gastly',
    stage: '1',
    previous: null,
    next: 'Haunter',
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/gastly.gif'
  },
  {
    id: 44,
    name: 'Haunter',
    stage: '2',
    previous: 'Gastly',
    next: 'Gengar',
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/haunter.gif'
  },
  {
    id: 45,
    name: 'Gengar',
    stage: '3',
    previous: 'Haunter',
    next: null,
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/gengar.gif'
  },
  {
    id: 46,
    name: 'Rhyhorn',
    stage: '1',
    previous: null,
    next: 'Rhydon',
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/rhyhorn.gif'
  },
  {
    id: 47,
    name: 'Rhydon',
    stage: '2',
    previous: 'Rhyhorn',
    next: 'Rhyperior',
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/rhydon.gif'
  },
  {
    id: 48,
    name: 'Rhyperior',
    stage: '3',
    previous: 'Rhydon',
    next: null,
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/rhyperior.gif'
  },
  {
    id: 49,
    name: 'Magby',
    stage: '1',
    previous: null,
    next: 'Magmar',
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/magby.gif'
  },
  {
    id: 50,
    name: 'Magmar',
    stage: '2',
    previous: 'Magby',
    next: 'Magmortar',
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/magmar.gif'
  },
  {
    id: 51,
    name: 'Magmortar',
    stage: '3',
    previous: 'Magmar',
    next: null,
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/magmortar.gif'
  },
  {
    id: 52,
    name: 'Porygon',
    stage: '1',
    previous: null,
    next: 'Porygon2',
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/porygon.gif'
  },
  {
    id: 53,
    name: 'Porygon2',
    stage: '2',
    previous: 'Porygon',
    next: 'Porygon-Z',
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/porygon2.gif'
  },
  {
    id: 54,
    name: 'Porygon-Z',
    stage: '3',
    previous: 'Porygon2',
    next: null,
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/porygon-z.gif'
  },
  {
    id: 55,
    name: 'Chikorita',
    stage: '1',
    previous: null,
    next: 'Bayleef',
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/chikorita.gif'
  },
  {
    id: 56,
    name: 'Bayleef',
    stage: '2',
    previous: 'Chikorita',
    next: 'Meganium',
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/bayleef.gif'
  },
  {
    id: 57,
    name: 'Meganium',
    stage: '3',
    previous: 'Bayleef',
    next: null,
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/meganium.gif'
  },
  {
    id: 58,
    name: 'Cyndaquil',
    stage: '1',
    previous: null,
    next: 'Quilava',
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/cyndaquil.gif'
  },
  {
    id: 59,
    name: 'Quilava',
    stage: '2',
    previous: 'Cyndaquil',
    next: 'Typhlosion',
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/quilava.gif'
  },
  {
    id: 60,
    name: 'Typhlosion',
    stage: '3',
    previous: 'Quilava',
    next: null,
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/typhlosion.gif'
  },
  {
    id: 61,
    name: 'Totodile',
    stage: '1',
    previous: null,
    next: 'Croconaw',
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/totodile.gif'
  },
  {
    id: 62,
    name: 'Croconaw',
    stage: '2',
    previous: 'Totodile',
    next: 'Feraligatr',
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/croconaw.gif'
  },
  {
    id: 63,
    name: 'Feraligatr',
    stage: '3',
    previous: 'Croconaw',
    next: null,
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/feraligatr.gif'
  },
  {
    id: 64,
    name: 'Larvitar',
    stage: '1',
    previous: null,
    next: 'Pupitar',
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/larvitar.gif'
  },
  {
    id: 65,
    name: 'Pupitar',
    stage: '2',
    previous: 'Larvitar',
    next: 'Tyranitar',
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/pupitar.gif'
  },
  {
    id: 66,
    name: 'Tyranitar',
    stage: '3',
    previous: 'Pupitar',
    next: null,
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/tyranitar.gif'
  },
  {
    id: 67,
    name: 'Treecko',
    stage: '1',
    previous: null,
    next: 'Grovyle',
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/treecko.gif'
  },
  {
    id: 68,
    name: 'Grovyle',
    stage: '2',
    previous: 'Treecko',
    next: 'Sceptile',
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/grovyle.gif'
  },
  {
    id: 69,
    name: 'Sceptile',
    stage: '3',
    previous: 'Grovyle',
    next: null,
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/sceptile.gif'
  },
  {
    id: 70,
    name: 'Torchic',
    stage: '1',
    previous: null,
    next: 'Combusken',
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/torchic.gif'
  },
  {
    id: 71,
    name: 'Combusken',
    stage: '2',
    previous: 'Torchic',
    next: 'Blaziken',
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/combusken.gif'
  },
  {
    id: 72,
    name: 'Blaziken',
    stage: '3',
    previous: 'Combusken',
    next: null,
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/blaziken.gif'
  },
  {
    id: 73,
    name: 'Mudkip',
    stage: '1',
    previous: null,
    next: 'Marshtomp',
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/mudkip.gif'
  },
  {
    id: 74,
    name: 'Marshtomp',
    stage: '2',
    previous: 'Mudkip',
    next: 'Swampert',
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/marshtomp.gif'
  },
  {
    id: 75,
    name: 'Swampert',
    stage: '3',
    previous: 'Marshtomp',
    next: null,
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/swampert.gif'
  },
  {
    id: 76,
    name: 'Budew',
    stage: '1',
    previous: null,
    next: 'Roselia',
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/budew.gif'
  },
  {
    id: 77,
    name: 'Roselia',
    stage: '2',
    previous: 'Budew',
    next: 'Roserade',
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/roselia.gif'
  },
  {
    id: 78,
    name: 'Roserade',
    stage: '3',
    previous: 'Roselia',
    next: null,
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/roserade.gif'
  },
  {
    id: 79,
    name: 'Trapinch',
    stage: '1',
    previous: null,
    next: 'Vibrava',
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/trapinch.gif'
  },
  {
    id: 80,
    name: 'Vibrava',
    stage: '2',
    previous: 'Trapinch',
    next: 'Flygon',
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/vibrava.gif'
  },
  {
    id: 81,
    name: 'Flygon',
    stage: '3',
    previous: 'Vibrava',
    next: null,
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/flygon.gif'
  },
  {
    id: 82,
    name: 'Spheal',
    stage: '1',
    previous: null,
    next: 'Sealeo',
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/spheal.gif'
  },
  {
    id: 83,
    name: 'Sealeo',
    stage: '2',
    previous: 'Spheal',
    next: 'Walrein',
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/sealeo.gif'
  },
  {
    id: 84,
    name: 'Walrein',
    stage: '3',
    previous: 'Sealeo',
    next: null,
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/walrein.gif'
  },
  {
    id: 85,
    name: 'Bagon',
    stage: '1',
    previous: null,
    next: 'Shelgon',
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/bagon.gif'
  },
  {
    id: 86,
    name: 'Shelgon',
    stage: '2',
    previous: 'Bagon',
    next: 'Salamence',
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/shelgon.gif'
  },
  {
    id: 87,
    name: 'Salamence',
    stage: '3',
    previous: 'Shelgon',
    next: null,
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/salamence.gif'
  },
  {
    id: 88,
    name: 'Shinx',
    stage: '1',
    previous: null,
    next: 'Luxio',
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/shinx.gif'
  },
  {
    id: 89,
    name: 'Luxio',
    stage: '2',
    previous: 'Shinx',
    next: 'Luxray',
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/luxio.gif'
  },
  {
    id: 90,
    name: 'Luxray',
    stage: '3',
    previous: 'Luxio',
    next: null,
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/luxray.gif'
  },
  {
    id: 91,
    name: 'Turtwig',
    stage: '1',
    previous: null,
    next: 'Grotle',
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/turtwig.gif'
  },
  {
    id: 92,
    name: 'Grotle',
    stage: '2',
    previous: 'Turtwig',
    next: 'Torterra',
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/grotle.gif'
  },
  {
    id: 93,
    name: 'Torterra',
    stage: '3',
    previous: 'Grotle',
    next: null,
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/torterra.gif'
  },
  {
    id: 94,
    name: 'Chimchar',
    stage: '1',
    previous: null,
    next: 'Monferno',
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/chimchar.gif'
  },
  {
    id: 95,
    name: 'Monferno',
    stage: '2',
    previous: 'Chimchar',
    next: 'Infernape',
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/monferno.gif'
  },
  {
    id: 96,
    name: 'Infernape',
    stage: '3',
    previous: 'Monferno',
    next: null,
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/infernape.gif'
  },
  {
    id: 97,
    name: 'Piplup',
    stage: '1',
    previous: null,
    next: 'Prinplup',
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/piplup.gif'
  },
  {
    id: 98,
    name: 'Prinplup',
    stage: '2',
    previous: 'Piplup',
    next: 'Empoleon',
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/prinplup.gif'
  },
  {
    id: 99,
    name: 'Empoleon',
    stage: '3',
    previous: 'Prinplup',
    next: null,
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/empoleon.gif'
  },
]

function buildingUsers() {
  return Promise.all(users.map(user => User.create(user)));
}

function buildingProblems() {
  return Promise.all(problems.map(problem => Problem.create(problem)))
}

function buildingPokemon() {
  return Promise.all(pokemon.map(poke => Pokemon.create(poke)))
}

function buildingEvolutions() {
  return Promise.all(evolutions.map(mon => Evolution.create(mon)));
}

function seed() {
  return buildingUsers()
    .then(() => buildingProblems())
    .then(() => buildingPokemon())
    .then(() => buildingEvolutions())
    .catch(error => console.error('Failed to map data ', error));
}

console.log('Syncing Database')

db.sync({ force: true })
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
