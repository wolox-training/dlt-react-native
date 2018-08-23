import api from '../config/api';
import { startSession } from '../services/sessionStorageService';

const LOGIN_PATH = '/users';

export const getAll = () => api.get(LOGIN_PATH);

export const getByEmail = email => api.get(`${LOGIN_PATH}?email=${email}`);

export const getByEmailWithAuth = login => {
  const { email, password } = login;
  return getByEmail(email).then(response => {
    const data = response.data[0];
    if (data && data.password === password) {
      startSession(data.email);
      return response;
    }

    return { ...response, ok: false, problem: 'Invalid Credentials' };
  });
};
