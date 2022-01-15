import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AppStack from './app-stack';

const Navigation = () => {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
};

export default Navigation;
