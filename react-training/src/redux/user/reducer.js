import { createReducer } from 'redux-recompose';

import { actionTypes } from './actions';

const initialState = { user: { email: null, position: null, name: null, about: null } };

const getAccountInfo = (state, action) => ({ ...state, [action.target]: action.payload });

// reducer without switch

const reducerDescriptor = {
  [actionTypes.GET_ACCOUNT_INFO]: getAccountInfo
};

export default createReducer(initialState, reducerDescriptor);
