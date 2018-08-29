import React from 'react';
import { View, Text, Image } from 'react-native';

import CustomButton from '../../../../../components/CustomButton';

import styles from './styles';

const BookItem = props => {
  const {
    book: { author, title, image_url }
  } = props;

  const imageSource = image_url ? { uri: image_url } : require('./assets/not_available.jpg');
  return (
    <View style={styles.bookContainer}>
      <Image source={imageSource} style={styles.bookImg} />
      <View style={styles.textContainer}>
        <View style={styles.bookInfo}>
          <Text style={styles.bookTitle}>{title}</Text>
          <Text style={styles.bookAuthor}>{author}</Text>
        </View>
        <CustomButton icon={require('./assets/arrow.png')} />
      </View>
    </View>
  );
};

export default BookItem;
