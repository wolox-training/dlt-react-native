import { getByEmail } from '../../services/loginService';
import { sessionExists } from '../../services/sessionStorageService';

export const actionTypes = {
  GET_ACCOUNT_INFO: 'GET_ACCOUNT_INFO'
};

export const userActions = {
  getAccountInfo: () => async dispatch => {
    const user = sessionExists();
    const apiResponse = await getByEmail(user);
    dispatch({ type: actionTypes.GET_ACCOUNT_INFO, payload: apiResponse, target: 'user' });
  }
};

export default userActions;
