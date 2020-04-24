import { createBottomTabNavigator } from 'react-navigation-tabs';
import ExploreContainer from '../screens/ExploreContainer';
import TripsContainer from '../screens/TripsContainer';
import SavedContainer from '../screens/SavedContainer';
import ProfileContainer from '../screens/ProfileContainer';
import InboxContainer from '../screens/InboxContainer';
import { StyleSheet, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react'


export default createBottomTabNavigator(
  {
    Explore: {
      screen: ExploreContainer,
      navigationOptions: {
        // A compléter
        tabBarLabel: 'EXPLORE',
        tabBarIcon: (
          <View>
            <Icon name="search" size={20} />
          </View>
        ),
        //tabBarIcon: SearchIcon, // On peut mettre ici une icone

      },
    },
    Saved: {
      screen: SavedContainer,
      navigationOptions: {
        tabBarLabel: 'SAVED',
        tabBarIcon: (
          <View>
            <Icon name="star" size={20} />
          </View>
        ),
        //tabBarIcon: SearchIcon, // On peut mettre ici une icone
      },
    },
    Trips: {
      screen: TripsContainer,
      navigationOptions: {
        tabBarLabel: 'TRIPS',
        tabBarIcon: (
          <View>
            <Icon name="plane" size={20} />
          </View>
        ),
        //tabBarIcon: SearchIcon, // On peut mettre ici une icone
      },
    },
    Inbox: {
      screen: InboxContainer,
      navigationOptions: {
        tabBarLabel: 'INBOX',
        tabBarIcon: (
          <View>
            <Icon name="inbox" size={20} />
          </View>
        ),
        //tabBarIcon: SearchIcon, // On peut mettre ici une icone
      },
    },
    Profile: {
      screen: ProfileContainer,
      navigationOptions: {
        tabBarLabel: 'PROFILE',
        tabBarIcon: (
          <View>
            <Icon name="user" size={20} />
          </View>
        ),
        //tabBarIcon: SearchIcon, // On peut mettre ici une icone
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
