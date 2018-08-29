import api from '../config/api';

const BOOKS_PATH = '/books';

export const getAll = () => api.get(BOOKS_PATH);
