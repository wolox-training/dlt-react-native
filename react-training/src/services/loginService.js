import api from '../config/api';

const LOGIN_PATH = '/users';

const handleResponse = response => response.data;

export const getAll = async () => {
  api.get(LOGIN_PATH).then(response => handleResponse(response));
};

export const getByEmail = async email => {
  api.get(`${LOGIN_PATH}?email=${email}`).then(response => handleResponse(response));
};
