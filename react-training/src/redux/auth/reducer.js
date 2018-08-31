import { createReducer, completeState, completeReducer, onReadValue } from 'redux-recompose';
import Immutable from 'seamless-immutable';

import { actionTypes } from '../auth/action';

const initialState = completeState({ auth: null });

const reducerDescriptor = {
  primaryActions: [actionTypes.LOGIN_REQUEST],
  [actionTypes.SET_AUTHENTICATION]: onReadValue(),
  [actionTypes.LOG_OUT]: onReadValue()
};

export default createReducer(Immutable(initialState), completeReducer(reducerDescriptor));
