import { actionTypes } from '../auth/action';

const initialState = {
  isAuth: false,
  user: null,
  loggingIn: false,
  currentLocation: '/',
  previousLocation: null
}

export default function reducer(state = {}, action) {
  const { payload } = action;
  switch (action.type) {
    case actionTypes.SET_AUTHENTICATION:
      return { ...state, isAuth: payload.isAuth, user: payload.user, currentLocation: '/game' };
    case actionTypes.LOGIN_REQUEST:
      return {
        ...state,
        loggingIn: true,
        isAuth: false,
        authError: false,
        user: action.payload
      };
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isAuth: true,
        loggingIn: false,
        authError: false,
        user: action.payload,
        previousLocation: '/login',
        currentLocation: '/game'
      };
    case actionTypes.LOGIN_FAILURE:
      return { ...state, authError: true, loggingIn: false };
    default:
      return state;
  }
}
