import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../pages/Login';
import CreateAccount from '../pages/CreateAccount';

const AppStack = createStackNavigator();

const AppRoutes: React.FC = () => (
  <AppStack.Navigator initialRouteName='Login' headerMode='none'>
    <AppStack.Screen name="Login" component={Login} />
    <AppStack.Screen name="CreateAccount" component={CreateAccount} />
  </AppStack.Navigator>
);

export default AppRoutes;