import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import Reactotron from 'reactotron-react-native';
import thunk from 'redux-thunk';
import {
  createReactNavigationReduxMiddleware,
  createNavigationReducer
} from 'react-navigation-redux-helpers';
import { fetchMiddleware } from 'redux-recompose';

import { ROOT } from '../constants/platform';
import Navigator from '../app/screens';

import todoReducer from './todo/reducer';
import booksReducer from './books/reducer';

const nav = createNavigationReducer(Navigator);

const reducers = combineReducers({
  nav,
  todos: todoReducer,
  books: booksReducer
});

const middlewares = [];
const enhancers = [];

/* ------------- React Navigation Middleware ------------- */
middlewares.push(createReactNavigationReduxMiddleware(ROOT, state => state.nav));

/* ------------- Thunk Middleware ------------- */
middlewares.push(thunk);

/* ------------- Redux-Recompose Middleware ------------- */
middlewares.push(fetchMiddleware);

/* ------------- Assemble Middleware ------------- */
enhancers.push(applyMiddleware(...middlewares));

// in dev mode, we'll create the store through Reactotron
const createAppropriateStore = __DEV__ ? Reactotron.createStore : createStore;
const store = createAppropriateStore(reducers, compose(...enhancers));

export default store;
