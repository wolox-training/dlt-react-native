import React, { Component } from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';

import CustomButton from '../../../../../components/CustomButton';
import { silver } from '../../../../../../constants/colors';

import imageNotAvailable from './assets/not_available.jpg';
import icon from './assets/arrow.png';
import styles from './styles';

class BookItem extends Component {
  imageUri = this.props.book.image_url ? { uri: this.props.book.image_url } : imageNotAvailable;

  navigateToDetail = () => {
    const {
      navigateToDetail,
      book: { id, title }
    } = this.props;
    navigateToDetail(id, title);
  };

  render() {
    const {
      book: { author, title }
    } = this.props;

    return (
      <TouchableHighlight underlayColor={silver} onPress={this.navigateToDetail}>
        <View style={styles.bookContainer}>
          <Image source={this.imageUri} style={styles.bookImg} />
          <View style={styles.textContainer}>
            <View style={styles.bookInfo}>
              <Text style={styles.bookTitle}>{title}</Text>
              <Text style={styles.bookAuthor}>{author}</Text>
            </View>
            <CustomButton icon={icon} onPress={this.navigateToDetail} />
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

export default BookItem;
