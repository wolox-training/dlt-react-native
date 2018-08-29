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
    return todos ? (
      <View>
        <FlatList data={todos} renderItem={this.renderTodos} />
      </View>
    ) : null;
  }
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      todo: PropTypes.string,
      completed: PropTypes.bool
    })
  ),
  toggleTodoItem: PropTypes.func,
  onDeleteItem: PropTypes.func,
  selectMultiple: PropTypes.func
};

const mapStateToProps = ({ todos }) => ({
  todos: todos.todos
});

export default connect(mapStateToProps)(TodoList);
