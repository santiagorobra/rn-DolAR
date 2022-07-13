import React from 'react';
import {BottomTabNavigationOptions, createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import Routes from '@constants/routes';
import {DARK, WHITE} from '@constants/colors';

import CalculatorScreen from '@screens/CalculatorScreen';
import HomeStack from './HomeStack';

const Tab = createBottomTabNavigator();

const SIZE_ICON = 25;
const COLOR_ICON = WHITE;
const COMMOM_TABS_OPTIONS: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarActiveTintColor: WHITE,
  tabBarStyle: {
    borderTopColor: WHITE,
    backgroundColor: DARK,
  },
};

const HomeTabsOptions: BottomTabNavigationOptions = {
  title: 'Cotizaciones',
  tabBarIcon: () => <Icon name="cash" size={SIZE_ICON} color={COLOR_ICON} />,
  ...COMMOM_TABS_OPTIONS,
};

const CalculatorOptions: BottomTabNavigationOptions = {
  title: 'Calculadora',
  tabBarIcon: () => <Icon name="calculator" size={SIZE_ICON} color={COLOR_ICON} />,
  ...COMMOM_TABS_OPTIONS,
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
