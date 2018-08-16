import api from '../config/api';

const LOGIN_PATH = '/users';

const handleResponse = ({ data }, login) => {
  const authenticated = data.length > 0 && data[0].password === login.password;
  return { ...login, authenticated };
};

export const getAll = () => api.get(LOGIN_PATH);

export const getByEmail = login =>
  api.get(`${LOGIN_PATH}?email=${login.email}`).then(response => handleResponse(response, login));
