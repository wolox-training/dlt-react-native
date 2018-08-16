import { actionTypes } from './actions';

const initialState = {};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOGIN_REQUEST:
      return {
        ...state,
        loggingIn: true,
        loggedIn: false,
        loginError: false,
        user: action.payload
      };
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        loggingIn: false,
        loginError: false,
        user: action.payload
      };
    case actionTypes.LOGIN_FAILURE:
      return { ...state, loginError: true, loggingIn: false };
    default:
      return state;
  }
}
