import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';

import CustomCheckbox from '../../../../../components/CustomCheckbox';
import CustomButton from '../../../../../components/CustomButton';
import { silver } from '../../../../../../constants/colors';

import styles from './styles';

class TodoItem extends Component {
  state = {
    selected: false
  };

  onDeleteItem = () => {
    const { onDeleteItem, id } = this.props;
    onDeleteItem(id);
  };

  onCheckItem = () => {
    const { toggleTodoItem, id } = this.props;
    toggleTodoItem(id);
  };

  selectMultiple = () => {
    const { selected } = this.state;
    const { selectMultiple, id } = this.props;
    const newSelected = !selected;
    this.setState({ selected: newSelected });
    selectMultiple(id, newSelected);
  };

  render() {
    const { todo, completed } = this.props;
    const { selected } = this.state;
    return (
      <TouchableHighlight
        style={selected && styles.selected}
        underlayColor={silver}
        onLongPress={this.selectMultiple}
      >
        <View style={styles.view}>
          <CustomCheckbox checked={completed} onPress={this.onCheckItem} />
          <Text style={styles.text}>{todo}</Text>
          <CustomButton title="X" onPress={this.onDeleteItem} textStyle={styles.deleteButton} />
        </View>
      </TouchableHighlight>
    );
  }
}

TodoItem.propTypes = {
  completed: PropTypes.bool,
  id: PropTypes.number,
  todo: PropTypes.string,
  toggleTodoItem: PropTypes.func.isRequired,
  onDeleteItem: PropTypes.func.isRequired,
  selectMultiple: PropTypes.func.isRequired
};

export default TodoItem;
