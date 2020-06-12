import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import componentsStyles from '../components/styles'; //Intégration du CSS du Bouton
import RoundedButton from '../components/RoundedButton'; //Intégration du composants Bouton
import FenetreModal from '../components/FenetreModal'; //Intégration du composants Fenêtre Modal

export default class LoggedOut extends Component {
  state = {
    displayModale: false,
  };
  static navigationOptions = ({navigation}) => ({
    header: props => (
      <View style={styles.containerConnect}>
        <Icon size={35} style={styles.iconclose} name="close"></Icon>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.connect}>Connexion</Text>
        </TouchableOpacity>
      </View>
    ),
  });
  render() {
    return (
      <View style={styles.structGlobal}>
        <View style={styles.containerLogo}>
          <Image
            style={styles.logo}
            source={require('./../../img/airbnb-logo.png')}
          />
        </View>
        <Text style={styles.titre}>Bienvenue sur AirBnb.</Text>
        <RoundedButton
          title={'Continuer sur Facebook'}
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
          title={'Créer un compte'}
          backgroundColor={'#008388'}
          textColor={'white'}
          onPress={this.onCreateAccountPress}
        />
        <FenetreModal
          display={this.state.displayModale}
          close={() => this.setState({displayModale: false})}
        />
        <View>
          <TouchableOpacity
            onPress={() => {
              this.setState({
                displayModale: true,
              });
            }}>
            <Text style={styles.textSavoirPlus}>Plus d'options</Text>
          </TouchableOpacity>
          <Text style={styles.textP}>
            En appuyant sur Continuer, Créer un compte ou Plus d'options,
            j'accepte les{' '}
            <Text style={styles.textSoulign}>Conditions générales</Text>
            <Text>les Conditions de service relatives aux paiements</Text>, la{' '}
            <Text style={styles.textSoulign}>Politique de Confidentialité</Text>
            et la{' '}
            <Text style={styles.textSoulign}>
              Politique de non-discrimination
            </Text>
            d'AirBnb.
          </Text>
        </View>
      </View>
    );
  }
}
