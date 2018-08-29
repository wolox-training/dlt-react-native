import React, { Component } from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';

import CustomButton from '../../../../../components/CustomButton';
import { silver } from '../../../../../../constants/colors';

import styles from './styles';

class BookItem extends Component {
  navigateToDetail = () => {
    const {
      navigateToDetail,
      book: { id, title }
    } = this.props;
    navigateToDetail(id, title);
  };

  render() {
    const {
      book: { author, title, image_url }
    } = this.props;

    const imageSource = image_url ? { uri: image_url } : require('./assets/not_available.jpg');
    return (
      <TouchableHighlight underlayColor={silver} onPress={this.navigateToDetail}>
        <View style={styles.bookContainer}>
          <Image source={imageSource} style={styles.bookImg} />
          <View style={styles.textContainer}>
            <View style={styles.bookInfo}>
              <Text style={styles.bookTitle}>{title}</Text>
              <Text style={styles.bookAuthor}>{author}</Text>
            </View>
            <CustomButton icon={require('./assets/arrow.png')} onPress={this.navigateToDetail} />
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

export default BookItem;
