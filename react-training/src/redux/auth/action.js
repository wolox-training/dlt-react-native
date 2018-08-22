import { sessionExists, startSession, deleteSession } from '../../services/sessionStorageService';
import { getByEmail } from '../../services/loginService';

export const actionTypes = {
  SET_AUTHENTICATION: 'SET_AUTHENTICATION',
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_REQUEST_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_REQUEST_FAILURE: 'LOGIN_FAILURE',
  LOG_OUT: 'LOG_OUT'
};

const TARGET = 'auth';

const authActions = {
  setAuthentication: () => {
    const sessionUser = sessionExists();
    let payload = null;
    if (sessionUser) {
      payload = true;
    }
    return { type: actionTypes.SET_AUTHENTICATION, payload, target: TARGET };
  },
  requestLogin: login => async dispatch => {
    dispatch({
      type: actionTypes.LOGIN_REQUEST,
      target: TARGET
    });

    setTimeout(async () => {
      const apiResponse = await getByEmail(login.email);
      const authenticated = apiResponse && apiResponse.password === login.password;
      if (authenticated) {
        const { email } = apiResponse;
        startSession(email);
        dispatch({ type: actionTypes.LOGIN_REQUEST_SUCCESS, payload: authenticated, target: TARGET });
      } else {
        dispatch({ type: actionTypes.LOGIN_REQUEST_FAILURE, target: TARGET });
      }
    }, 1500);
  },
  logout: () => {
    deleteSession();
    return { type: actionTypes.LOG_OUT, payload: false, target: TARGET };
  }
};

export default authActions;
