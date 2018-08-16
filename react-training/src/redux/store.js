import { createStore, combineReducers } from 'redux';
import { reducer as loginReducer } from 'redux-form';

import gameReducer from './game/reducer';

const reducers = {
  game: gameReducer,
  form: loginReducer
};

const reducer = combineReducers(reducers);
export default createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
