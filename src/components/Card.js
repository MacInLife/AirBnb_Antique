//import {experiences} from '../data/listings';
import React, { Component } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../styles/colors';
import color from '../styles/colors/index';
import Stars from '../components/Stars';
import Heart from '../components/Heart';

export default class Card extends Component {
  render() {
    const {
      imageCard,
      titreCard,
      paragraphe,
      price,
      priceType,
      stars,
      color,
      size,
      onPress,
      colorTitleCard
    } = this.props;
    return (
      <TouchableOpacity style={styles.cardExp} onPress={onPress}>
        <Image source={imageCard} style={styles.imageExp} />
        <Heart></Heart>
        <Text style={{ color: colorTitleCard, marginBottom: 5 }}>
          {titreCard}
        </Text>
        <Text style={styles.paragrapheExp}>{paragraphe}</Text>
        <Text style={styles.prixExp}>{price + '$ ' + priceType}</Text>
        <View style={styles.starsPerson}>
          <Stars votes={stars} size={size} color={colors.green01} />
          <Text style={styles.prixExp}>{' ' + stars}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
