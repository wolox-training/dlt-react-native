import React from 'react';
import { View } from 'react-native';

import Todo from './components/Todo';
import styles from './styles';

export default function Home() {
  return (
    <View style={styles.container}>
      <Todo />
    </View>
  );
}
