import { actionTypes } from './actions';

const initialState = { email: null, name: null, position: null, about: null };

export default function reducer(state = initialState, action) {
  const { payload } = action;
  switch (action.type) {
    case actionTypes.GET_ACCOUNT_INFO:
      return { ...state, ...payload };
    default:
      return state;
  }
}
