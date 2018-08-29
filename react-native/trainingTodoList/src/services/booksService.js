import api from '../config/api';

const BOOKS_PATH = '/books';

export const getAll = () => api.get(BOOKS_PATH);

export const getById = id => api.get(`${BOOKS_PATH}/${id}`);
