import React from 'react';

import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {DARK} from '@constants/colors';

import HomeTabs from './HomeTabs';

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
      <HomeTabs />
    </NavigationContainer>
  );
}

export default Navigator;
