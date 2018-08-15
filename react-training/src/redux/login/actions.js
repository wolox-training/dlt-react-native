export const actionTypes = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE'
};

export const loginActions = {
  requestLogin: login => ({ type: actionTypes.LOGIN_REQUEST, login }),
  loginSuccess: squareNum => ({ type: actionTypes.LOGIN_SUCCESS, squareNum }),
  loginFailure: () => ({ type: actionTypes.LOGIN_FAILURE })
};

export default loginActions;
