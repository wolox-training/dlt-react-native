import { createReducer } from 'redux-recompose';

import { actions } from './actions';

const initialState = { user: { email: null, position: null, name: null, about: null } };

const getAccountInfo = (state, action) => ({ ...state, [action.target]: action.payload });

// reducer without switch

const reducerDescriptor = {
  [actions.GET_ACCOUNT_INFO]: getAccountInfo
};

export default createReducer(initialState, reducerDescriptor);
