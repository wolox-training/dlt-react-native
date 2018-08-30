import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import CustomTextInput from '../../../../components/CustomTextInput';
import CustomButton from '../../../../components/CustomButton';
import { strings } from '../../../../i18n';

import styles from './styles';

class TodoInput extends Component {
  state = {
    currentTodo: ''
  };

  onInputChange = currentTodo => {
    this.setState({ currentTodo });
  };

  onPress = () => {
    const { onAddItem } = this.props;
    const { currentTodo } = this.state;
    onAddItem(currentTodo);
    this.setState({ currentTodo: '' });
  };

  render() {
    const { currentTodo } = this.state;
    return (
      <View style={styles.input}>
        <CustomTextInput
          textStyles={styles.inputTextStyles}
          placeholder={strings.ADD_SOME_TASKS()}
          style={styles.textInput}
          onChange={this.onInputChange}
          value={currentTodo}
        />
        <CustomButton title="+" textStyle={styles.addButton} onPress={this.onPress} />
      </View>
    );
  }
}

TodoInput.propTypes = {
  onAddItem: PropTypes.func
};

export default TodoInput;
