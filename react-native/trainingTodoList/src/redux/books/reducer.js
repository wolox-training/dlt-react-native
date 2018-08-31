import { createReducer, completeState, completeReducer } from 'redux-recompose';
import Immutable from 'seamless-immutable';

import { actionTypes } from './action';

const initialState = completeState({
  books: [],
  currentBook: {
    id: null,
    author: null,
    title: null,
    genre: null,
    publisher: null,
    year: null,
    image_url: null
  }
});

const reducerDescriptor = {
  primaryActions: [actionTypes.GET_ALL]
};

export default createReducer(Immutable(initialState), completeReducer(reducerDescriptor));
