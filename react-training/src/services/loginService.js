import api from '../config/api';

const LOGIN_PATH = '/users';

export const getAll = () => api.get(LOGIN_PATH);

export const getByEmail = login =>
  api.get(`${LOGIN_PATH}?email=${login.email}`).then(response => ({ ...response.data[0] }));
