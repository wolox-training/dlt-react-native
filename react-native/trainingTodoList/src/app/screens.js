// https://github.com/react-community/react-navigation/issues/458
// once that issue is resolved, the initial loading screen is no longer needed and should be removed
//  in favour of setting the initialRoute as a prop of the navigator

import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';

import * as Routes from '../constants/routes';
import { stackNavConfig, screensNavOptions, tabNavConfig } from '../config/navigation';

import Home from './screens/Home';
import BookList from './screens/BookList';

export default createStackNavigator(
  {
    [Routes.Home]: {
      screen: createBottomTabNavigator(
        {
          [Routes.Tab1]: {
            screen: Home,
            navigationOptions: screensNavOptions[Routes.Tab1]
          },
          [Routes.Tab2]: {
            screen: BookList,
            navigationOptions: screensNavOptions[Routes.Tab2]
          }
        },
        tabNavConfig
      ),
      navigationOptions: screensNavOptions[Routes.Home]
    }
  },
  stackNavConfig
);
