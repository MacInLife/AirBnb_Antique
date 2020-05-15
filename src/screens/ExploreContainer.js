import React, {Component} from 'react';
import {Text, View, ScrollView, TouchableOpacity} from 'react-native';
import styles from './styles';
import {connect} from 'react-redux';
import Categories from '../components/categories'; //Intégration du composants Catégories
import Experiences from '../components/experiences';
import Homes from '../components/homes';
import Popular from '../components/popular';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Actions, requestGetListings} from '../actions';

class ExploreContainer extends Component {
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

  /**
   * Nous n'avons plus besoin d'initialiser un state local au component.
   * isLoading erst
   */

  componentDidMount() {
    const {requestGetListings} = this.props;
    return requestGetListings();
  }

  render() {
    // isLoading est maintenant chargé depuis le reducer
    const {categories, experiences, homes, popular, isLoading} = this.props;
    return (
      <View style={{flex: 1}}>
        <ScrollView>
          <View>
            <Text style={styles.titres}>Explore Airbnb</Text>
            <Categories categories={categories} />
          </View>
          <View>
            <Text style={styles.titresExp}>Experiences</Text>
            <Text style={[styles.textVoirPlus]}>Voir tous ></Text>
            <Experiences experiences={experiences} />
          </View>
          <View>
            <Text style={styles.titresExp}>Homes</Text>
            <Text style={[styles.textVoirPlus]}>Voir tous ></Text>
            <Homes homes={homes} />
          </View>
          <View>
            <Text style={styles.titresExp}>Popular Reservations</Text>
            <Text style={[styles.textVoirPlus]}>Voir tous ></Text>
            <Popular popular={popular} />
          </View>
        </ScrollView>
      </View>
    );
  }
}
const mapStateToProps = state => ({
  categories: state.listings.categories,
  experiences: state.listings.experiences,
  homes: state.listings.homes,
  popular: state.listings.popular,
  isLoading: state.app.isLoading,
});

const mapDispatchToProps = dispatch => ({
  requestGetListings: () => dispatch(requestGetListings()),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ExploreContainer);
