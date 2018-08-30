import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import booksActions from '../../../../../redux/books/action';

import BookItem from './BookItem';

class BookList extends Component {
  componentDidMount() {
    const { getAll } = this.props;
    getAll();
  }

  renderBooks = ({ item }) => <BookItem key={item.id} book={item} />;

  keyExtractor = (item, index) => item.id;

  render() {
    const { books } = this.props;
    return <FlatList data={books} renderItem={this.renderBooks} keyExtractor={this.keyExtractor} />;
  }
}

const mapStateToProps = ({ books }) => ({
  books: books.books
});

const mapDispatchToProps = dispatch => ({
  getAll: () => dispatch(booksActions.getAll())
});

BookList.propTypes = {
  getAll: PropTypes.func.isRequired,
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      author: PropTypes.string,
      title: PropTypes.string,
      genre: PropTypes.string,
      year: PropTypes.string,
      image_url: PropTypes.string
    })
  ).isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookList);
