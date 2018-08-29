import React, { Component } from 'react';
import { View, Text } from 'react-native';

class BookList extends Component {
  state = {
    bookList: []
  };

  render() {
    return (
      <View>
        <Text>Book List!</Text>
      </View>
    );
  }
}

export default BookList;
