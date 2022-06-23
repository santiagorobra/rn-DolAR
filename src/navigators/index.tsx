import React from 'react';

import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {DARK} from '@constants/colors';

import DrawerMenu from './DrawerMenu';

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: DARK,
  },
};

function Navigator() {
  return (
    <NavigationContainer theme={navTheme}>
      <DrawerMenu />
    </NavigationContainer>
  );
}

export default Navigator;
