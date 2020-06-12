import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import { connect } from 'react-redux';
import Categories from '../components/categories';
import Experiences from '../components/Experiences';
import Homes from '../components/homes';
import Popular from '../components/popular';
import Icon from 'react-native-vector-icons/FontAwesome';
import { requestGetListings, Actions } from '../actions';
import { filterExperiences } from '../reducers/listings';

class ExploreContainer extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: props => (
      <View style={styles.containerConnect}>
        <Icon size={20} style={styles.iconclose} name="close"></Icon>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.connect}>Connexion</Text>
        </TouchableOpacity>
      </View>
    )
  });


  /**
   * Au componentDidMount() nous exécutions le side effect requestGetListings()
   */
  componentDidMount() {
    const { requestGetListings } = this.props;
    return requestGetListings()
  }


  render() {
    // isLoading est maintenant chargé depuis le reducer
    const { categories, experiences, homes, popular, filterExperiences, filter, navigation } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <TextInput placeholder={"What are you looking for"} defaultValue={filter} onChangeText={filterExperiences}></TextInput>
        <Button title={"Sort by title"} onPress={() => filterExperiences(filter, "title")}></Button>
        <Button title={"Sort by type"} onPress={() => filterExperiences(filter, "type")}></Button>
        <ScrollView>
          <View>
            <Text style={styles.titres}>Explore Airbnb</Text>
            <Categories categories={categories} />
          </View>
          <View>
            <Text style={styles.titresExp}>Experiences</Text>
            <Text style={[styles.textVoirPlus]}>Voir tous ></Text>
            <Experiences experiences={experiences} onPress={(experience) => navigation.navigate("ExperienceDetail", experience)} />
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
  experiences: filterExperiences(state),
  filter: state.listings.filter,
  homes: state.listings.homes,
  popular: state.listings.popular,
  isLoading: state.app.isLoading,
});

const mapDispatchToProps = dispatch => ({
  requestGetListings: () => dispatch(requestGetListings()),
  filterExperiences: (criteria, sort) => dispatch(Actions.filterExperiences(criteria, sort))
});
export default connect(mapStateToProps, mapDispatchToProps)(ExploreContainer);
