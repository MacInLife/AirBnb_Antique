import { createBottomTabNavigator } from 'react-navigation-tabs';
import ExploreContainer from '../screens/ExploreContainer';
import TripsContainer from '../screens/TripsContainer';
import SavedContainer from '../screens/SavedContainer';
import ProfileContainer from '../screens/ProfileContainer';
import InboxContainer from '../screens/InboxContainer';
import ExperienceDetailContainer from '../screens/ExperienceDetail';
import { View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react'

import { createStackNavigator } from 'react-navigation-stack';



const HomeTabNavigator = createBottomTabNavigator(
  {
    Explore: {
      screen: ExploreContainer,
      navigationOptions: {
        tabBarLabel: 'EXPLORE',
        tabBarIcon: (
          <View>
            <Icon name="search" size={20} />
          </View>
        )

      },
    },
    Saved: {
      screen: SavedContainer,
      navigationOptions: {
        tabBarLabel: 'SAVED'
      },
    },
    Trips: {
      screen: TripsContainer,
      navigationOptions: {
        tabBarLabel: 'TRIPS',
      },
    },
    Inbox: {
      screen: InboxContainer,
      navigationOptions: {
        tabBarLabel: 'INBOX',
      },
    },
    Profile: {
      screen: ProfileContainer,
      navigationOptions: {
        tabBarLabel: 'PROFILE',
      },
    },
  },
  {
    tabBarOptions: {
      labelStyle: {
        fontWeight: '600',
        marginBottom: 5,
      },
      activeTintColor: Colors.pink,
    },
    tabBarPosition: 'bottom', // Permet de contrôler la position de la tab bar

  },
);


export default createStackNavigator({
  Explore: {
    screen: HomeTabNavigator,
    navigationOptions: { headerShown: false }
  },
  ExperienceDetail: {
    screen: ExperienceDetailContainer,
    navigationOptions: { headerShown: true }
  }
}, {
  headerMode: 'screen'
})