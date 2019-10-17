import React, {useEffect} from 'react';

// Import : React-Navigation
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

// Import : Redux (Persist, Provider)
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {store, persistor} from '../public/redux/store';

// Import : Screen
import Home from './Screens/Home/Home';

const HomeScreen = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Home />
      </PersistGate>
    </Provider>
  );
};

const MainNavigation = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null,
    },
  },
});

export default createAppContainer(MainNavigation);
