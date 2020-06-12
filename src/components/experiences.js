//import {experiences} from '../data/listings';
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import styles from './styles';
import Card from '../components/Card';
import photos from '../data/photos/index';
import color from '../data/colors/index';

export default class Experiences extends Component {
  render() {
    const { experiences, onPress } = this.props;
    return (
      <ScrollView
        contentContainerStyle={styles.containerExp}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        {experiences.map((experience, index) => (
          <Card
            onPress={() => onPress(experience)}
            key={`experiency-item-${index}`}
            imageCard={photos[experience.photo]}
            titreCard={experience.type}
            colorTitleCard={color[experience.color]}
            paragraphe={experience.title}
            price={experience.price}
            priceType={experience.priceType}
            stars={experience.stars}
            colors={'gray'}></Card>
        ))}
      </ScrollView>
    );
  }
}
