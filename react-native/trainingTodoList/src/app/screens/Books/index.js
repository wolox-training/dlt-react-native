import React, { Component } from 'react';

import BookList from './components/BookList';

class Books extends Component {
  navigateToDetail = (id, title) => {
    const { navigation } = this.props;
    navigation.navigate('bookDetail', { id, title });
  };

  render() {
    return <BookList navigateToDetail={this.navigateToDetail} />;
  }
}

export default Books;
