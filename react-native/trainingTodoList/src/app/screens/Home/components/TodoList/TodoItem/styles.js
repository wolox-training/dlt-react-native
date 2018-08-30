import { StyleSheet } from 'react-native';

import { silver } from '../../../../../../constants/colors';

export default StyleSheet.create({
  view: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 15
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  deleteButton: {
    color: 'red',
    fontSize: 10,
    fontWeight: 'bold'
  },
  selected: {
    backgroundColor: silver
  }
});
