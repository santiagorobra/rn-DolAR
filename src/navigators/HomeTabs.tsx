import React from 'react';
import {
  createMaterialTopTabNavigator,
  MaterialTopTabNavigationOptions,
} from '@react-navigation/material-top-tabs';

import Routes from '@constants/routes';
import {DARK, WHITE} from '@constants/colors';

import CalculatorScreen from '@screens/CalculatorScreen';
import HomeStack from './HomeStack';

const Tab = createMaterialTopTabNavigator();

const HomeTabsOptions: MaterialTopTabNavigationOptions = {
  title: 'Cotizaciones',
  tabBarActiveTintColor: WHITE,
  tabBarStyle: {
    backgroundColor: DARK,
  },
};

const CalculatorOptions: MaterialTopTabNavigationOptions = {
  title: 'Calculadora',
  tabBarActiveTintColor: WHITE,
  tabBarStyle: {
    backgroundColor: DARK,
  },
};

function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name={Routes.HomeTabs} component={HomeStack} options={HomeTabsOptions} />
      <Tab.Screen
        name={Routes.Calculator}
        component={CalculatorScreen}
        options={CalculatorOptions}
      />
    </Tab.Navigator>
  );
}

export default HomeTabs;
