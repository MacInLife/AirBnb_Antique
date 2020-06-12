//import {experiences} from '../data/listings';
import React, {Component} from 'react';
import {Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../styles/colors';
import color from '../styles/colors/index';

export default class Stars extends Component {
  constructor(props) {
    super(props);
  }
  get stars() {
    const {votes, size, color} = this.props;
    const starsNumber = parseFloat(votes);
    const starelement = [];

    for (let i = 0; i < 5; i++) {
      starelement.push(
        <Icon
          key={`star-${i}`}
          size={size}
          style={styles.icongo}
          name="star"
          color={starsNumber > i ? color : colors.gray02}></Icon>,
      );
    }
    return starelement;
  }
  render() {
    const {votes} = this.props;
    return <View style={styles.wrapper}>{votes ? this.stars : undefined}</View>;
  }
}
//export default experiences;
