import { createReducer, completeReducer, completeState } from 'redux-recompose';
import Immutable from 'seamless-immutable';

import { actions } from './actions';

const state = { user: null };

const initialState = completeState(state);

const reducerDescriptor = {
  primaryActions: [actions.GET_ACCOUNT_INFO]
};

export default createReducer(Immutable(initialState), completeReducer(reducerDescriptor));
