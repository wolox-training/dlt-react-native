import { getByEmail } from '../../services/loginService';

export const actionTypes = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE'
};

export const loginActions = {
  requestLogin: login => {
    return async dispatch => {
      console.log('thunk');
      dispatch({type: actionTypes.LOGIN_REQUEST, login})
      const apiResponse = await getByEmail(login)
      console.log('api res', apiResponse)
      if(apiResponse.email && apiResponse.password) {
        dispatch(loginActions.loginSuccess({ type: actionTypes.LOGIN_SUCCESS, response }))
      }else {
        dispatch(loginActions.loginFailure({ type: actionTypes.LOGIN_FAILURE, response }))
      }
    }
  }
};

export default loginActions;
