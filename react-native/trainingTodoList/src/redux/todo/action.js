import { createTypes } from 'redux-recompose';

export const actionTypes = createTypes(['GET_TODOS', 'ADD_TODO', 'DELETE_TODO', 'TOGGLE_TODO'], '@@TODOS');

const todosActions = {
  getAllTodos: () => ({
    type: actionTypes.GET_TODOS,
    target: 'todos'
  }),
  addTodoItem: todo => ({
    type: actionTypes.ADD_TODO,
    target: 'todos',
    todo
  }),
  deleteTodos: (id, args) => ({
    type: actionTypes.DELETE_TODO,
    target: 'todos',
    ids: [id, ...args]
  }),
  toggleTodoItem: id => ({
    type: actionTypes.TOGGLE_TODO,
    target: 'todos',
    id
  })
};

export default todosActions;
