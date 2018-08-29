import { createReducer } from 'redux-recompose';
import Immutable from 'seamless-immutable';

import { actionTypes } from './action';

const initialState = { todos: [] };

const addTodo = (state, action) => {
  const { todos } = state;
  const { todo } = action;
  const id = todos.length + 1;
  return { ...state, todos: [...todos, { todo, id, completed: false }] };
};

const deleteTodos = (state, action) => {
  const { todos } = state;
  const { ids } = action;
  const filtered = todos.filter(item => !ids.includes(item.id));
  return { ...state, todos: filtered };
};

const toggleTodo = (state, action) => {
  const { todos } = state;
  const { id } = action;
  const toggled = todos.map(todo => {
    if (todo.id === id) todo.completed = !todo.completed;

    return todo;
  });

  return { ...state, todos: [...toggled] };
};

const reducerDescriptor = {
  [actionTypes.ADD_TODO]: addTodo,
  [actionTypes.DELETE_TODO]: deleteTodos,
  [actionTypes.TOGGLE_TODO]: toggleTodo
};

export default createReducer(Immutable(initialState), reducerDescriptor);
