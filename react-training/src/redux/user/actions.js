import { createTypes } from 'redux-recompose';

import { getByEmail } from '../../services/loginService';
import { sessionExists } from '../../services/sessionStorageService';

export const actions = createTypes(['GET_ACCOUNT_INFO'], '@@USER');

export const userActions = {
  getAccountInfo: () => async dispatch => {
    const user = sessionExists();
    const apiResponse = await getByEmail(user);
    dispatch({ type: actions.GET_ACCOUNT_INFO, payload: apiResponse, target: 'user' });
  }
};

export default userActions;
