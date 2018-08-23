import { createReducer, onReadValue } from 'redux-recompose';
import Immutable from 'seamless-immutable';

import { actions } from './actions';

const initialState = { user: null };
// completeState

const reducerDescriptor = {
  [actions.GET_ACCOUNT_INFO]: onReadValue()
};

export default createReducer(Immutable(initialState), reducerDescriptor);
