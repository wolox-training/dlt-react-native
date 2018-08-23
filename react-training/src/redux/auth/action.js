import { completeTypes, createTypes } from 'redux-recompose';

import { sessionExists, startSession, deleteSession } from '../../services/sessionStorageService';
import { getByEmail } from '../../services/loginService';

const actionsArr = ['LOG_OUT', 'SET_AUTHENTICATION'];
const completedActionsArr = ['LOGIN_REQUEST'];

export const actionTypes = createTypes(completeTypes(completedActionsArr, actionsArr), '@@AUTH');

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
