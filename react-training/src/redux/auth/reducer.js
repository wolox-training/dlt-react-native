import { createReducer, onLoading, onSuccess, onFailure, onReadValue } from 'redux-recompose';
import Immutable from 'seamless-immutable';

import { actionTypes } from '../auth/action';

const initialState = Immutable({ auth: null });

const reducerDescriptor = {
  [actionTypes.LOGIN_REQUEST]: onLoading(),
  [actionTypes.LOGIN_REQUEST_SUCCESS]: onSuccess(),
  [actionTypes.LOGIN_REQUEST_FAILURE]: onFailure(),
  [actionTypes.SET_AUTHENTICATION]: onReadValue(),
  [actionTypes.LOG_OUT]: onReadValue()
};

export default createReducer(initialState, reducerDescriptor);
