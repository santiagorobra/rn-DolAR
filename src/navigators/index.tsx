import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import DrawerMenu from './DrawerMenu';

function Navigator() {
  return (
    <NavigationContainer>
      <DrawerMenu />
    </NavigationContainer>
  );
}

export default Navigator;
