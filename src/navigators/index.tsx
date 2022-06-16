import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import HomeStack from './HomeStack';

function Navigator() {
  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  );
};

export default Navigator;
