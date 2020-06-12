//import {experiences} from '../data/listings';
import React, {Component} from 'react';
import {Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import styles from './styles';
import Card from '../components/Card';
import photos from '../data/photos/index';
import color from '../data/colors/index';

export default class Popular extends Component {
  render() {
    const {popular} = this.props;
    return (
      <ScrollView
        contentContainerStyle={styles.containerExp}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        {popular.map((populars, index) => (
          <Card
            key={`home-item-${index}`}
            imageCard={photos[populars.photo]}
            titreCard={populars.type}
            colorTitleCard={color[populars.color]}
            paragraphe={populars.title}
            price={populars.price}
            priceType={populars.priceType}
            stars={''}
            colors={'none'}></Card>
        ))}
      </ScrollView>
    );
  }
}
