import { createReducer, completeState, completeReducer, onReadValue } from 'redux-recompose';
import Immutable from 'seamless-immutable';

import { actionTypes } from './action';

const initialState = completeState({ books: [] });

const reducerDescriptor = {
  primaryActions: [actionTypes.GET_ALL]
};

export default createReducer(Immutable(initialState), completeReducer(reducerDescriptor));
