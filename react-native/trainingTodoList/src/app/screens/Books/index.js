import React, { Component } from 'react';

import { BookDetail } from '../../../constants/routes';

import BookList from './components/BookList';

class Books extends Component {
  navigateToDetail = (id, title) => {
    const { navigation } = this.props;
    navigation.navigate(BookDetail, { id, title });
  };

  render() {
    return <BookList navigateToDetail={this.navigateToDetail} />;
  }
}

export default Books;
