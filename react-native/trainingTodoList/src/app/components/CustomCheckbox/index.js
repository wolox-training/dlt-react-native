import React from 'react';
import { View, TouchableOpacity } from 'react-native';

import styles from './styles';

const CustomCheckbox = props => {
  const { onPress, checked } = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.checkbox, checked ? styles.checked : styles.unchecked]} />
    </TouchableOpacity>
  );
};

export default CustomCheckbox;
