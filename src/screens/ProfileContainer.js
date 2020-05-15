import React, {Component} from 'react';
import {Text, View, ScrollView, TouchableOpacity} from 'react-native';
import styles from './styles';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Actions} from '../actions';

class ProfileContainer extends Component {
  static navigationOptions = ({navigation}) => ({
    header: props => (
      <View style={styles.containerConnect}>
        <Icon size={20} style={styles.iconclose} name="close" />
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.connect}>Connexion</Text>
        </TouchableOpacity>
      </View>
    ),
  });

  doLogout = () => {
    const {logout, navigation} = this.props;
    logout();
    navigation.navigate('Login');
  };

  render() {
    return (
      <ScrollView>
        <View>
          <Text style={styles.titres}>Profile container</Text>
          <TouchableOpacity onPress={this.doLogout}>
            <Text>Déconnexion</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  token: state.user.token,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(Actions.logout()),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileContainer);
