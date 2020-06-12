//import categories from '../data/categories';
import React, {Component} from 'react';
import {Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import styles from './styles';
import photos from '../data/photos/index';

export default class Categories extends Component {
  render() {
    const {categories} = this.props;
    return (
      <ScrollView
        contentContainerStyle={styles.container}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        {categories.map((category, index) => (
          <View style={styles.card} key={`category-item-${index}`}>
            <Image source={photos[category.photo]} style={styles.image} />
          </View>
        ))}
      </ScrollView>
    );
  }
}
