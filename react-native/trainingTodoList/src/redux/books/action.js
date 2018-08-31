import { completeTypes, createTypes } from 'redux-recompose';

import { getAll } from '../../services/booksService';

const completedActions = ['GET_ALL'];

export const actionTypes = createTypes(completeTypes(completedActions), '@@BOOKS');

const TARGET = 'books';

const booksActions = {
  getAll: () => ({
    type: actionTypes.GET_ALL,
    target: TARGET,
    service: getAll
  })
};

export default booksActions;
