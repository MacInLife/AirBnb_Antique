import React, {Component} from 'react';
import styles from './styles';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Header extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.containerConnect}>
        <Icon size={40} style={styles.iconclose} name="close"></Icon>
        <Text style={styles.connect}>{navigation}</Text>
      </View>
    );
  }
}
