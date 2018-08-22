import { createReducer, onLoading, onSuccess, onFailure } from 'redux-recompose';
import Immutable from 'seamless-immutable';

import { actionTypes } from '../auth/action';

const initialState = Immutable({ auth: null });

const setAuthentication = (state, action) => state.merge({ ...state, [action.target]: action.payload });

const logout = (state, action) => state.merge({ ...state, [action.target]: action.payload });

const reducerDescriptor = {
  [actionTypes.LOGIN_REQUEST]: onLoading(),
  [actionTypes.LOGIN_REQUEST_SUCCESS]: onSuccess(),
  [actionTypes.LOGIN_REQUEST_FAILURE]: onFailure(),
  [actionTypes.SET_AUTHENTICATION]: setAuthentication,
  [actionTypes.LOG_OUT]: logout
};

export default createReducer(initialState, reducerDescriptor);
