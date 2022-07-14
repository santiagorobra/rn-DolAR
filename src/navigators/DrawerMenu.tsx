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
import {EmptyList} from '@components/EmptyList';
import {StateRedux} from '@interfaces/reduxInterface';
import {displayCurrency} from '@redux/slices/currenciesSlice';

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
  headerRight: () => <TextCustom text={`Beta ${Config.VERSION}`} />,
};

const CustomDrawerContent = () => {
  const currenciesState = useSelector((state: StateRedux) => state.currenciesReducer.currencies);
  const dispatch = useDispatch();
  return (
    <DrawerContentScrollView style={{backgroundColor: BACKGROUND_LIST}}>
      {currenciesState.length ? (
        <>
          <DrawerItem
            label="Filtrá las cotizaciones"
            inactiveTintColor={WHITE}
            labelStyle={styles.drawerTitle}
            onPress={() => {}}
          />
          {currenciesState.map(({data}) =>
            data.map(({name, show, id}) => (
              <DrawerItem
                key={`-${name}`}
                label={name}
                inactiveTintColor={show ? WHITE : RED}
                onPress={() => dispatch(displayCurrency(id))}
              />
            )),
          )}
        </>
      ) : (
        <EmptyList />
      )}
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
