import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../pages/Login';
import CreateAccount from '../pages/CreateAccount';
import HomeDash from '../pages/HomeDash';

const AppStack = createStackNavigator();

const AppRoutes: React.FC = () => (
  <AppStack.Navigator initialRouteName='Home' headerMode='none'>
    <AppStack.Screen name="Home" component={HomeDash} />
  </AppStack.Navigator>
);

export default AppRoutes;