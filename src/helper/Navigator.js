// Import : React-Navigation
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {fromLeft, zoomIn, fadeOut} from 'react-navigation-transitions';

// Import : Screen
import Home from '../lib/Screens/Home/Home';
import Login from '../lib/Screens/Login/Login';
import Search from '../lib/Screens/Search/Search';

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
  return fadeOut();
};

const MainNavigation = createStackNavigator(
  {
    Home,
    Login,
    Search,
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none',
    transitionConfig: nav => handleCustomTransition(nav),
  },
);

export default createAppContainer(MainNavigation);
