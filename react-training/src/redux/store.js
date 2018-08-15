import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as loginFormReducer } from 'redux-form';
import thunk from 'redux-thunk';

import gameReducer from './game/reducer';
import loginReducer from './login/reducer';

const reducers = {
  game: gameReducer,
  login: loginReducer,
  form: loginFormReducer
};

const reducer = combineReducers(reducers);
export default createStore(
  reducer,
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
