//import {experiences} from '../data/listings';
import React, {Component} from 'react';
import {Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../styles/colors';
import color from '../styles/colors/index';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export default class Heart extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Icon
        name="heart-o"
        size={15}
        key={'heart-${i}'}
        style={styles.coeur}
        color={Colors.white}
      />
    );
  }
}
//export default experiences;
