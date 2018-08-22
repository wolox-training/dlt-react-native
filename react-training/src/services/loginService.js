import api from '../config/api';

const LOGIN_PATH = '/users';

export const getAll = () => api.get(LOGIN_PATH);

export const getByEmail = email =>
  api.get(`${LOGIN_PATH}?email=${email}`).then(response => {
    console.log(response);
    return { ...response.data[0] };
  });
