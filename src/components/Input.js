import React, { Component } from 'react';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import styles from './styles.js';

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secureTextEntry: true,
      email: '',
      validated: false,
      pressValid: false,
    };
  }

  emailValid = () => {
    this.setState({
      pressValid: !this.state.pressValid,
    });
  };
  toggleSecureTextEntry = () => {
    this.setState({
      secureTextEntry: !this.state.secureTextEntry
    });
  }
  focus = () => {
    this.refInput.focus()
  }

  render() {
    const { textContentType, onChangeText, placeholder, onSubmitEditing, onBlur } = this.props;
    const { secureTextEntry } = this.state;
    return (
      <View style={[styles.champ]}>
        <View style={[styles.flex]}>
          <Text style={[styles.textLabel]}>{this.props.title}</Text>

          {textContentType === 'password' && (
            <TouchableOpacity
              onPress={this.toggleSecureTextEntry}>
              <Text style={styles.textShowPassword}>{secureTextEntry ? 'Afficher' : 'Masquer'}</Text>
            </TouchableOpacity>
          )}
        </View>
        <TextInput
          ref={(ref) => {
            this.refInput = ref
          }}
          onBlur={onBlur}
          onSubmitEditing={onSubmitEditing}
          style={[styles.textInput]}
          textContentType={textContentType}
          placeholder={placeholder}
          secureTextEntry={textContentType === 'password' ? secureTextEntry : false}
          onChangeText={onChangeText}
        />

        {this.state.pressValid && (
          <Text onPress={this.emailValid} style={[styles.textValid]}>
            {this.state.email}
          </Text>
        )}

      </View>
    );
  }
}
