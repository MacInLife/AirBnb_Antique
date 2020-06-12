import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import stylesCo from './stylesCo';
import Input from '../components/Input'; //Intégration du composants Input
import Error from '../components/Error'; //Intégration du composants Input
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions, requestLogin } from "../actions"
import { connect } from 'react-redux';

import { login } from "../services"

const MAIL_REGEXP = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const ERR_EMAIL_INVALID = 'ERR_EMAIL_INVALID'
const ERR_LOGIN_INVALID = 'ERR_LOGIN_INVALID'
const NO_ERROR = ''
const ErrorMessages = {
  [ERR_EMAIL_INVALID]: 'Email non valide !',
  [ERR_LOGIN_INVALID]: 'Identification impossible : le couple email/mot de passe est introuvable.'
}
class Login extends Component {
  state = {
    email: '',
    password: '',
    error: null
  };

  static navigationOptions = ({ navigation }) => ({
    header: () => (
      <View style={stylesCo.containerConnect}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon size={20} style={stylesCo.iconclose} name="arrow-left"></Icon>
        </TouchableOpacity>
        <Text style={stylesCo.connect}>Mot de passe oublié ?</Text>
      </View>
    ),
  });
  onChangeEmail = (email) => {
    this.setState({
      email
    })
  }
  onChangePassword = (password) => {
    this.setState({
      password
    })
  }
  validateAndFocus = () => {
    const { email } = this.state
    console.log('email', email)
    if (!MAIL_REGEXP.test(email)) {
      console.log('email invalide')
      this.setState({ error: ERR_EMAIL_INVALID });
    } else {
      console.log('email valide')
      this.setState({ error: NO_ERROR });
      this.refPassword.focus()
    }
  };
  login = () => {
    const { requestLogin } = this.props
    const { password, email } = this.state

    return requestLogin(email, password)
      .then(() => {
        // On efface les erreurs
        this.setState({
          error: NO_ERROR
        })
        // On navigue vers la home
        this.props.navigation.navigate('ExploreContainer')
      })
      .catch(() => {
        // On stocke d'erreur
        this.setState({
          error: ERR_LOGIN_INVALID
        })
        // Message d'erreur
        alert(ErrorMessages[ERR_LOGIN_INVALID])
      })
  }
  render() {
    const { error } = this.state
    const isValidEmail = error == NO_ERROR

    return (
      <View style={stylesCo.structGlobal} >
        <Text style={stylesCo.titre}>Connexion</Text>
        <Input
          ref={ref => { this.refEmail = ref }}
          onSubmitEditing={this.validateAndFocus}
          onBlur={this.validateAndFocus}
          title={'Adresse e-mail'}
          textContentType={'emailAddress'}
          onChangeText={this.onChangeEmail}
          placeholder={"Saisissez un e-mail"} />
        <Error message={error ? ErrorMessages[error] : null} />
        <Input
          ref={ref => { this.refPassword = ref }}
          title={'Mot de passe'}
          textContentType={'password'}
          onChangeText={this.onChangePassword}
          placeholder={"Saisissez un mot de passe"} />

        <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end' }}>
          <TouchableOpacity
            disabled={!isValidEmail}
            onPress={this.login}>
            <Icon size={35} style={isValidEmail ? stylesCo.icongo : { color: 'gray' }} name="angle-right"></Icon>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}
const mapStateToProps = state => ({
  isLoading: state.app.isLoading,
});

const mapDispatchToProps = dispatch => ({
  loading: (isLoading) => dispatch(Actions.loading(isLoading)),
  setToken: (token) => dispatch(Actions.login(token)),
  requestLogin: (email, password) => dispatch(requestLogin(email, password)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);
