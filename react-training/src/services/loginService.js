import api from '../config/api';

const LOGIN_PATH = '/users';

const handleResponse = ({ data }, login) => {
  const authenticated = data.length > 0 && data[0].password === login.password;
  return { ...login, authenticated };
};

export const getAll = async () => {
  api.get(LOGIN_PATH).then(response => handleResponse(response));
};

export const getByEmail = async login =>
  api.get(`${LOGIN_PATH}?email=${login.email}`).then(response => handleResponse(response, login));
