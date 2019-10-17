import React from 'react';
import {Text} from 'react-native';

// Import : React-Navigation
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

// Import : Screen
import Home from './Screens/Home/Home';

const HomeScreen = () => <Home />;

const MainNavigation = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null,
    },
  },
});

export default createAppContainer(MainNavigation);
