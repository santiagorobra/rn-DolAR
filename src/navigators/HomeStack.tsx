import React from 'react';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import Routes from '@constants/routes';
import HomeScreen from '@screens/HomeScreen';

const Stack = createNativeStackNavigator();

const HomeStackOptions: NativeStackNavigationOptions = { 
  headerShown: false
};

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={Routes.Home} component={HomeScreen} options={HomeStackOptions} />
    </Stack.Navigator>
  );
};

export default HomeStack;
