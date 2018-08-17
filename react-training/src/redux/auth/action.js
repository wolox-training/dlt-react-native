import { sessionExists } from '../../services/sessionStorageService';
import { getByEmail } from '../../services/loginService';

export const actionTypes = {
  SET_AUTHENTICATION: 'SET_AUTHENTICATION',
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE'
};

export const authActions = {
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
      const { email } = apiResponse;
      if (apiResponse.authenticated) {
        dispatch({ type: actionTypes.LOGIN_SUCCESS, payload: email });
      } else {
        dispatch({ type: actionTypes.LOGIN_FAILURE, payload: email });
      }
    }, 1500);
  }
};

export default authActions;
