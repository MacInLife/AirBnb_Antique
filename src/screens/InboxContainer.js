import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import styles from './styles';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Actions} from '../actions';

class InboxContainer extends Component {
  static navigationOptions = ({navigation}) => ({
    header: props => (
      <View style={styles.containerConnect}>
        <Icon size={20} style={styles.iconclose} name="close"></Icon>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.connect}>Connexion</Text>
        </TouchableOpacity>
      </View>
    ),
  });

  render() {
    return (
      <ScrollView>
        <View>
          <Text style={styles.titres}>Inbox container</Text>
        </View>
      </ScrollView>
    );
  }
}

export default InboxContainer;
