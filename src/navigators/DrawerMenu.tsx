import React from 'react';
import { 
  createDrawerNavigator, 
  DrawerContentComponentProps, 
  DrawerContentScrollView, 
  DrawerItem, 
  DrawerNavigationOptions,
} from '@react-navigation/drawer';
import { useDispatch, useSelector } from 'react-redux';
import Config from 'react-native-config';

import Routes from '@constants/routes';
import { BACKGROUND_LIST, DARK, RED, WHITE } from '@constants/colors';
import { TextCustom } from '@components/TextCustom';
import { StateRedux } from '@interfaces/reduxInterface';
import { displayDolar } from '@redux/dolarsRedux';

import HomeStack from './HomeStack';

const Drawer = createDrawerNavigator();

const drawerOptions: DrawerNavigationOptions = {
  drawerType: 'back',
  headerTintColor: WHITE,
  headerShadowVisible: false,
  headerStyle: {
    backgroundColor: DARK,
  },
  title: '',
  headerRight: () => <TextCustom text={`Alpha ${Config.VERSION}`} />
};

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  const dolars = useSelector((state: StateRedux) => state.dolarsReducer.dolars);
  const dispatch = useDispatch();
  return (
    <DrawerContentScrollView {...props} style={{ backgroundColor: BACKGROUND_LIST }}>
      <DrawerItem
        label={'Filtra las cotizaciones'}
        inactiveTintColor={WHITE}
        labelStyle={{ fontSize: 20 }}
        onPress={() => {}}
      />
      {
        !!dolars.length && dolars.map(({ nombre, show }, i) => (
          <DrawerItem
            key={`${nombre} ${i}`}
            label={nombre}
            inactiveTintColor={show ? WHITE : RED}
            onPress={() => dispatch(displayDolar(nombre))}
          />
        ))
      }
    </DrawerContentScrollView>
  );
};

function DrawerMenu() {
  return (
    <Drawer.Navigator
      screenOptions={drawerOptions}
      drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name={Routes.Drawer} component={HomeStack} />
    </Drawer.Navigator>
  );
};

export default DrawerMenu;
