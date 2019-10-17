import React from 'react';

// Import : React-Navigation
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {fromLeft, fromTop, zoomIn} from 'react-navigation-transitions';

// Import : Redux (Persist, Provider)
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {store, persistor} from '../public/redux/store';

// Import : Screen
import Home from './Screens/Home/Home';
import Login from './Screens/Login/Login';
import Search from './Screens/Search/Search';

const HomeScreen = props => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Home {...props} />
      </PersistGate>
    </Provider>
  );
};

const LoginScreen = props => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Login {...props} />
      </PersistGate>
    </Provider>
  );
};

const SearchScreen = props => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Search {...props} />
      </PersistGate>
    </Provider>
  );
};

const handleCustomTransition = ({scenes}) => {
  const prevScene = scenes[scenes.length - 2];
  const nextScene = scenes[scenes.length - 1];

  if (
    prevScene &&
    prevScene.route.routeName === 'LoginScreen' &&
    nextScene.route.routeName === 'HomeScreen'
  ) {
    return zoomIn();
  } else if (
    prevScene &&
    prevScene.route.routeName === 'HomeScreen' &&
    nextScene.route.routeName === 'SearchScreen'
  ) {
    return fromTop();
  }
  return fromLeft();
};

const MainNavigation = createStackNavigator(
  {
    LoginScreen,
    HomeScreen,
    SearchScreen,
  },
  {
    initialRouteName: 'LoginScreen',
    headerMode: 'none',
    transitionConfig: nav => handleCustomTransition(nav),
  },
);

export default createAppContainer(MainNavigation);
