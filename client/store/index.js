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


const reducer = combineReducers({ user, codeEntry, training, fight, currentPokemonId, allPokemon });

let wildPokemonMiddleware = store => next => action => {
  console.log('Middleware triggered:', action);
  let chance = Math.random();

  if (chance <= 1 && !store.getState().fight.opponentSocketId) {
    console.log(`we in hia boooooooiiiiiiii`, store.getState().fight);
    //DISPATCH AN ACTION THATLL TOGGLE WILD POKEMON ATTACK
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
