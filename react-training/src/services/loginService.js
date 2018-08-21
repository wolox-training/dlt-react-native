import api from '../config/api';

import { startSession } from './sessionStorageService';

const LOGIN_PATH = '/users';

const handleLogin = ({ data }, login) => {
  const authenticated = data.length > 0 && data[0].password === login.password;
  if (authenticated) startSession(login.email);
  return { ...login, authenticated };
};

export const getAll = () => api.get(LOGIN_PATH);

export const getByEmail = login =>
  api.get(`${LOGIN_PATH}?email=${login.email}`).then(response => handleLogin(response, login));
