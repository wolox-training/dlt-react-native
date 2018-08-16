import { getByEmail } from '../../services/loginService';

export const actionTypes = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE'
};

export const loginActions = {
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

export default loginActions;
