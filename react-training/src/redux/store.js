import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
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

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(applyMiddleware(thunk)));

export default store;
