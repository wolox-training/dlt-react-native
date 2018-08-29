import React, { Component } from 'react';
import { View } from 'react-native';

import BookList from './components/BookList';

class Books extends Component {
  navigateToDetail = (id, title) => {
    const { navigation } = this.props;
    navigation.navigate('bookDetail', { id, title });
  };

  render() {
    console.log('book props', this.props);
    return (
      <View>
        <BookList navigateToDetail={this.navigateToDetail} />
      </View>
    );
  }
}

export default Books;
