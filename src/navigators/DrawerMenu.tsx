import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerNavigationOptions,
} from '@react-navigation/drawer';
import {useDispatch, useSelector} from 'react-redux';
import Config from 'react-native-config';

import Routes from '@constants/routes';
import {BACKGROUND_LIST, DARK, RED, WHITE} from '@constants/colors';
import {TextCustom} from '@components/TextCustom';
import {StateRedux} from '@interfaces/reduxInterface';
import {displayDollar} from '@redux/slices/dollarsSlice';

import HomeTabs from './HomeTabs';
import styles from './styles';

const Drawer = createDrawerNavigator();

const drawerOptions: DrawerNavigationOptions = {
  drawerType: 'back',
  headerTintColor: WHITE,
  headerShadowVisible: false,
  headerStyle: {
    backgroundColor: DARK,
  },
  title: '',
  headerRight: () => <TextCustom text={`Alpha ${Config.VERSION}`} />,
};

const CustomDrawerContent = () => {
  const dollars = useSelector((state: StateRedux) => state.dollarsReducer.dollars);
  const dispatch = useDispatch();
  return (
    <DrawerContentScrollView style={{backgroundColor: BACKGROUND_LIST}}>
      <DrawerItem
        label="Filtrá las cotizaciones"
        inactiveTintColor={WHITE}
        labelStyle={styles.drawerTitle}
        onPress={() => {}}
      />
      {!!dollars.length &&
        dollars.map(({nombre, show}) => (
          <DrawerItem
            key={`-${nombre}`}
            label={nombre}
            inactiveTintColor={show ? WHITE : RED}
            onPress={() => dispatch(displayDollar(nombre))}
          />
        ))}
    </DrawerContentScrollView>
  );
};

function DrawerMenu() {
  return (
    <Drawer.Navigator screenOptions={drawerOptions} drawerContent={CustomDrawerContent}>
      <Drawer.Screen name={Routes.Drawer} component={HomeTabs} />
    </Drawer.Navigator>
  );
}

export default DrawerMenu;
