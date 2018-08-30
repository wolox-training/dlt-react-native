import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import TodoItem from './TodoItem';

class TodoList extends Component {
  renderTodos = ({ item }) => {
    const { todo, completed, id } = item;
    const { onDeleteItem, toggleTodoItem, selectMultiple } = this.props;
    return (
      <TodoItem
        key={id}
        todo={todo}
        completed={completed}
        id={id}
        onPress={this.onPress}
        onDeleteItem={onDeleteItem}
        toggleTodoItem={toggleTodoItem}
        selectMultiple={selectMultiple}
      />
    );
  };

  render() {
    const { todos } = this.props;
    return (
      <View>
        <FlatList data={todos} renderItem={this.renderTodos} />
      </View>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      todo: PropTypes.string,
      completed: PropTypes.bool
    })
  ),
  toggleTodoItem: PropTypes.func.isRequired,
  onDeleteItem: PropTypes.func.isRequired,
  selectMultiple: PropTypes.func.isRequired
};

const mapStateToProps = ({ todos }) => ({
  todos: todos.todos
});

export default connect(mapStateToProps)(TodoList);
