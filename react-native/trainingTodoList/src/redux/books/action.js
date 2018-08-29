import { completeTypes, createTypes } from 'redux-recompose';

import { getAll } from '../../services/booksService';

const completedActions = ['GET_ALL', 'GET_BY_ID'];

export const actionTypes = createTypes(completeTypes(completedActions), '@@BOOKS');

const TARGET = 'books';

const booksActions = {
  getAll: () => ({
    type: actionTypes.GET_ALL,
    target: TARGET,
    service: getAll,
    successSelector: response => response.data
  })
};

export default booksActions;
