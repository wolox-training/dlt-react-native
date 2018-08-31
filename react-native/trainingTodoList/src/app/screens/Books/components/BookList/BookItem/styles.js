import { StyleSheet } from 'react-native';

import { silver } from '../../../../../../constants/colors';

export default StyleSheet.create({
  bookContainer: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 20
  },
  bookAuthor: {
    fontSize: 10
  },
  bookInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  bookImg: {
    borderRadius: 50,
    height: 100,
    width: 100
  },
  bookTitle: {
    marginLeft: 20,
    fontSize: 15,
    fontWeight: 'bold'
  },
  textContainer: {
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    height: '100%',
    justifyContent: 'space-around',
    borderBottomColor: silver,
    borderBottomWidth: 1
  }
});
