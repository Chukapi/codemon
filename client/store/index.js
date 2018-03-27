import { createStore, combineReducers, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
// import router from 'redux-router';
import user from './user';
import codeEntry from './codeEntry';
import training from './training';
import fight from './fight';
import currentPokemonId from './currentPokemon';
import allPokemon from './pokemon';
import battleModal from './battleModal';
import wildModal, { wildAttack } from './wildModal';


const reducer = combineReducers({ user, battleModal, codeEntry, training, fight, currentPokemonId, allPokemon, wildModal })

let wildPokemonMiddleware = store => next => action => {
  let chance = Math.random();

  if (chance <= 0.50 && !store.getState().fight.opponentSocketId) {
    console.log(`we in hia boooooooiiiiiiii`, store.getState().fight);
    store.dispatch(wildAttack());
  }
  next(action);
}
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
export * from './battleModal';
export * from './wildModal';
