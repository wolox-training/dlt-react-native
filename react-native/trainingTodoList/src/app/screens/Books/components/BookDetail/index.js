import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Image } from 'react-native';

import booksActions from '../../../../../redux/books/action';

import styles from './styles';

class BookDetail extends Component {
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
    console.log('book detail', this.props);
    const {
      book: { author, title, genre, publisher, year, image_url }
    } = this.props;

    const imageSource = image_url ? { uri: image_url } : require('./assets/not_available.jpg');

    return (
      <View style={styles.container}>
        <Image source={imageSource} style={styles.bookImg} />
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
