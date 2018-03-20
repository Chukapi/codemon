import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user';
import codeEntry from './codeEntry';
import training from './training';
import fight from './fight';


const reducer = combineReducers({user, codeEntry, training, fight})
const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger({collapsed: true})
))
const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './codeEntry'
export * from './training'
export * from './fight'