import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { reducer as loginFormReducer } from 'redux-form';
import thunk from 'redux-thunk';

import gameReducer from './game/reducer';
import authReducer from './auth/reducer';
import userReducer from './user/reducer';

const reducers = {
  game: gameReducer,
  form: loginFormReducer,
  auth: authReducer,
  user: userReducer
};

const reducer = combineReducers(reducers);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(applyMiddleware(thunk)));

export default store;
