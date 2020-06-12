//import {experiences} from '../data/listings';
import React, {Component} from 'react';
import {Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import styles from './styles';
import Card from '../components/Card';
import photos from '../data/photos/index';
import color from '../data/colors/index';

export default class Homes extends Component {
  render() {
    const {homes} = this.props;
    return (
      <ScrollView
        contentContainerStyle={styles.containerExp}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        {homes.map((home, index) => (
          <Card
            key={`home-item-${index}`}
            imageCard={photos[home.photo]}
            titreCard={home.type}
            colorTitleCard={color[home.color]}
            paragraphe={home.title}
            price={home.price}
            priceType={home.priceType}
            stars={home.stars}
            colors={'gray'}></Card>
        ))}
      </ScrollView>
    );
  }
}
