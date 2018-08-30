import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

import CustomButton from '../../../../../components/CustomButton';

import imageNotAvailable from './assets/not_available.jpg';
import icon from './assets/arrow.png';
import styles from './styles';

class BookItem extends Component {
  imageUri = () => {
    const {
      book: { image_url }
    } = this.props;
    return image_url ? { uri: image_url } : imageNotAvailable;
  };

  render() {
    const {
      book: { author, title }
    } = this.props;
    return (
      <View style={styles.bookContainer}>
        <View style={styles.textContainer}>
          <Image source={this.imageUri()} style={styles.bookImg} />
          <View style={styles.bookInfo}>
            <Text style={styles.bookTitle}>{title}</Text>
            <Text style={styles.bookAuthor}>{author}</Text>
          </View>
          <CustomButton icon={icon} />
        </View>
      </View>
    );
  }
}

export default BookItem;
