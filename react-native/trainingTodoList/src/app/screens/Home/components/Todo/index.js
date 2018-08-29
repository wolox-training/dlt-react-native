import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import todosActions from '../../../../../redux/todo/action';
import TodoList from '../TodoList';
import TodoInput from '../TodoInput';
import CustomButton from '../../../../components/CustomButton';

import styles from './styles';

class Todo extends Component {
  state = {
    itemsSelected: []
  };

  onAddItem = item => {
    const { addTodoItem } = this.props;
    addTodoItem(item);
  };

  onDeleteItem = id => {
    const { deleteTodos } = this.props;
    deleteTodos(id);
  };

  toggleTodoItem = id => {
    const { toggleTodoItem } = this.props;
    toggleTodoItem(id);
  };

  deleteMultiple = () => {
    const { deleteTodos } = this.props;
    const { itemsSelected } = this.state;

    deleteTodos(...itemsSelected);
  };

  selectMultiple = (id, selected) => {
    const { itemsSelected } = this.state;
    const newItemsSelected = selected ? [...itemsSelected, id] : itemsSelected.filter(items => items !== id);
    this.setState({ itemsSelected: newItemsSelected });
  };

  render() {
    const { itemsSelected } = this.state;
    return (
      <View style={styles.todo}>
        <TodoInput onAddItem={this.onAddItem} />
        {itemsSelected.length > 0 && (
          <CustomButton
            title="Delete Selected"
            onPress={this.deleteMultiple}
            textStyle={styles.deleteMultipleBtn}
          />
        )}
        <TodoList
          onDeleteItem={this.onDeleteItem}
          toggleTodoItem={this.toggleTodoItem}
          selectMultiple={this.selectMultiple}
        />
      </View>
    );
  }
}

Todo.propTypes = {
  addTodoItem: PropTypes.func,
  deleteTodos: PropTypes.func,
  toggleTodoItem: PropTypes.func
};

const mapDispatchToProps = dispatch => ({
  addTodoItem: item => {
    dispatch(todosActions.addTodoItem(item));
  },
  deleteTodos: (id, ...args) => {
    dispatch(todosActions.deleteTodos(id, args));
  },
  toggleTodoItem: id => {
    dispatch(todosActions.toggleTodoItem(id));
  }
});

const mapStateToProps = ({ todos }) => ({
  todos: todos.todos
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);
