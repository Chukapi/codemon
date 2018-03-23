import { createStore, combineReducers, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import user from './user';
import codeEntry from './codeEntry';
import training from './training';
import fight from './fight';
import currentPokemonId from './currentPokemon';
import allPokemon from './pokemon';


<<<<<<< HEAD
const reducer = combineReducers({ user, codeEntry, training, fight, currentPokemonId, userStats, allPokemon })

let wildPokemonMiddleware = store => next => action => {
  console.log('Middleware triggered:', action);
  next(action);
}
=======
const reducer = combineReducers({ user, codeEntry, training, fight, currentPokemonId, allPokemon })
>>>>>>> master
const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger({ collapsed: true }),
  wildPokemonMiddleware
))
const store = createStore(reducer, middleware)

export default store;
export * from './user';
export * from './codeEntry';
export * from './training';
export * from './fight';
export * from './pokemon';
export * from './currentPokemon';
