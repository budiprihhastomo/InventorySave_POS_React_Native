// Import : React-Navigation
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {fromLeft, zoomIn, fromRight} from 'react-navigation-transitions';

// Import : Screen
import Home from '../lib/Screens/Home/Home';
import Login from '../lib/Screens/Login/Login';
import Search from '../lib/Screens/Search/Search';
import DetailOrder from '../lib/Screens/DetailOrder/DetailOrder';

const handleCustomTransition = ({scenes}) => {
  const prevScene = scenes[scenes.length - 2];
  const nextScene = scenes[scenes.length - 1];

  if (
    prevScene &&
    prevScene.route.routeName === 'Login' &&
    nextScene.route.routeName === 'Home'
  ) {
    return zoomIn();
  } else if (
    prevScene &&
    prevScene.route.routeName === 'Home' &&
    nextScene.route.routeName === 'Search'
  ) {
    return fromLeft();
  }
  return fromRight();
};

const MainNavigation = createStackNavigator(
  {
    Home,
    Login,
    Search,
    DetailOrder,
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none',
    transitionConfig: nav => handleCustomTransition(nav),
  },
);

export default createAppContainer(MainNavigation);
