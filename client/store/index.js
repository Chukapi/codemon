import { createStore, combineReducers, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import user from './user';
import codeEntry from './codeEntry';
import training from './training';
import fight from './fight';
import currentPokemonId from './currentPokemon';
import allPokemon from './pokemon';
import battleModal from './battleModal';
import wildModal, { wildAttack } from './wildModal';


const reducer = combineReducers({ user, battleModal, codeEntry, training, fight, currentPokemonId, allPokemon, wildModal });

let wildPokemonMiddleware = store => next => action => {
  let chance = Math.random();

  if (
    chance <= 0.01 &&
    !store.getState().fight.opponentSocketId &&
    action.type !== 'REMOVE_USER' &&
    action.type !== 'GET_USER' &&
    action.type !== 'GET_WILD_PROBLEM' &&
    action.type !== 'GET_WILD_POKEMON' &&
    action.type !== 'HIDE_MODAL' &&
    action.type !== 'CLEAR_RESULT'
  ) {
    store.dispatch(wildAttack());
  }
  next(action);
}
const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger({ collapsed: true }),
  wildPokemonMiddleware
));

const store = createStore(reducer, middleware);

export default store;
export * from './user';
export * from './codeEntry';
export * from './training';
export * from './fight';
export * from './pokemon';
export * from './currentPokemon';
export * from './battleModal';
export * from './wildModal';
