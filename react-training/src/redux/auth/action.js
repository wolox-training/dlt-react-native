import { sessionExists, startSession, deleteSession } from '../../services/sessionStorageService';
import { getByEmail } from '../../services/loginService';

export const actionTypes = {
  SET_AUTHENTICATION: 'SET_AUTHENTICATION',
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',
  LOG_OUT: 'LOG_OUT'
};

const authActions = {
  setAuthentication: authState => dispatch => {
    const sessionUser = sessionExists();
    const payload = {};
    if (sessionUser) {
      payload.user = sessionUser;
      payload.isAuth = true;
    }
    dispatch({ type: actionTypes.SET_AUTHENTICATION, payload });
  },
  requestLogin: login => async dispatch => {
    dispatch({ type: actionTypes.LOGIN_REQUEST, login });
    /* mock server latency */
    setTimeout(async () => {
      const apiResponse = await getByEmail(login);
      const authenticated = apiResponse && apiResponse.password === login.password;
      if (authenticated) {
        const { email } = apiResponse;
        startSession(email);
        dispatch({ type: actionTypes.LOGIN_SUCCESS, payload: email });
      } else {
        dispatch({ type: actionTypes.LOGIN_FAILURE, payload: email });
      }
    }, 1500);
  },
  logout: () => async dispatch => {
    deleteSession();
    dispatch({ type: actionTypes.LOG_OUT });
  }
};

export default authActions;
