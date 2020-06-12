import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../screens/styles';
import componentsStyles from '../components/styles.js';
import RoundedButton from './RoundedButton'; //Intégration du composants Bouton

export default class FenetreModal extends Component {
  // state = {
  //   displayModale: false,
  // };
  render() {
    const {display} = this.props;
    const {close} = this.props;
    return (
      <View style={styles.plusOptionsBtn}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={display}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={styles.structGlobal}>
            <TouchableHighlight
              onPress={() => {
                close();
              }}>
              <Text style={styles.croix}>&#xD7;</Text>
            </TouchableHighlight>
            <View style={componentsStyles.plusOptionsBtn}>
              <RoundedButton
                title={'Facebook'}
                backgroundColor={'white'}
                textColor={'#008388'}
                icone={
                  <View style={componentsStyles.iconeFb}>
                    <Icon
                      name="facebook"
                      size={20}
                      style={componentsStyles.facebookButtonIcon}
                    />
                  </View>
                }
                handleOnPress={this.onFacebookPress}
              />
              <RoundedButton
                title={'Google'}
                backgroundColor={'white'}
                textColor={'#008388'}
                icone={
                  <View style={componentsStyles.iconeFb}>
                    <Icon
                      name="google"
                      size={20}
                      style={componentsStyles.facebookButtonIcon}
                    />
                  </View>
                }
                handleOnPress={this.onGooglePress}
              />
              <RoundedButton
                title={'Créer un compte'}
                backgroundColor={'#008388'}
                textColor={'white'}
              />
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
