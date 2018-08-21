import { getByEmail } from '../../services/loginService';

export const actionTypes = {
  GET_ACCOUNT_INFO: 'GET_ACCOUNT_INFO'
};

export const userActions = {
  getAccountInfo: userState => async dispatch => {
    const apiResponse = await getByEmail(userState);
    dispatch({ type: actionTypes.GET_ACCOUNT_INFO, payload: apiResponse });
  }
};
export default userActions;
