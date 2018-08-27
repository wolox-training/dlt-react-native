import { createTypes, completeTypes } from 'redux-recompose';

import { getByEmail } from '../../services/loginService';
import { sessionExists } from '../../services/sessionStorageService';

export const actions = createTypes(completeTypes(['GET_ACCOUNT_INFO']), '@@USER');

export const userActions = {
  getAccountInfo: () => {
    const user = sessionExists();
    return {
      type: actions.GET_ACCOUNT_INFO,
      target: 'user',
      service: getByEmail,
      payload: user,
      successSelector: response => response.data[0]
    };
  }
};

export default userActions;
