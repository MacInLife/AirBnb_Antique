import React, {Component} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles.js';
import stylesCo from '../screens/stylesCo';

export default class RoundedButton extends Component {
  render() {
    const {backgroundColor, textColor, icone} = this.props;
    return (
      <TouchableOpacity
        style={[styles.decoBouton, {backgroundColor: backgroundColor}]}>
        {icone}
        <Text style={[styles.textBouton, {color: textColor}]}>
          {this.props.title}
        </Text>
      </TouchableOpacity>
    );
  }
}
