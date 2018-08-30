import { completeTypes, createTypes } from 'redux-recompose';

import { sessionExists, deleteSession } from '../../services/sessionStorageService';
import { getByEmailWithAuth } from '../../services/loginService';

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
  requestLogin: login => ({
    type: actionTypes.LOGIN_REQUEST,
    target: TARGET,
    service: getByEmailWithAuth,
    payload: login,
    successSelector: response => response.data[0]
  }),
  logout: () => {
    deleteSession();
    return { type: actionTypes.LOG_OUT, payload: false, target: TARGET };
  }
};

export default authActions;
