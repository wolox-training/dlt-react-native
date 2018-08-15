import { actionTypes } from './actions';

const initialState = {};

export default function reducer(state = initialState, action) {
  /*
  switch (action.type) {
    case actionTypes.LOGIN_REQUEST:
      return {
        ...state,
        loggingIn: true
      };
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true
      };
    case actionTypes.LOGIN_FAILURE:
      return { ...state };
    default:
      return state;
  } */
  return state;
}
