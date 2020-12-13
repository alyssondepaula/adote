import React from 'react';
import {View, ActivityIndicator} from 'react-native';

import {useAuth} from '../context/auth';

import AuthRoutes from '../routes/auth';
import AppRoutes from '../routes/app';

const Routes: React.FC = () => {

  const {signed } = useAuth();
  
  return signed ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;