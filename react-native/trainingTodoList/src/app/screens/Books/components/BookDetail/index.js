import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Image } from 'react-native';

import booksActions from '../../../../../redux/books/action';

import styles from './styles';
import imageNotAvailable from './assets/not_available.jpg';

class BookDetail extends Component {
  imageSource = this.props.book.image_url ? { uri: this.props.book.image_url } : imageNotAvailable;

  componentDidMount() {
    const {
      getById,
      navigation: {
        state: {
          params: { id }
        }
      }
    } = this.props;
    getById(id);
  }

  render() {
    const {
      book: { author, title, genre, publisher, year }
    } = this.props;

    return (
      <View style={styles.container}>
        <Image source={this.imageSource} style={styles.bookImg} />
        <Text style={[styles.bookTitle, styles.textContainer]}>{title}</Text>
        <Text style={styles.textContainer}>
          {author} - {genre}
        </Text>
        <Text style={styles.textContainer}>
          {publisher} - {year}
        </Text>
      </View>
    );
  }
}

const mapStateToProps = ({ books: { currentBook } }) => ({ book: currentBook });

const mapDispatchToProps = dispatch => ({
  getById: id => dispatch(booksActions.getById(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookDetail);
