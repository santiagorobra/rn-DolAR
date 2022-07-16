import React from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Animated, {FadeInLeft} from 'react-native-reanimated';

import {TextCustom} from '@components/TextCustom';
import {Nullable} from '@interfaces/globalInterfaces';
import {StateRedux} from '@interfaces/reduxInterface';

import styles from './styles';

interface Props {
  onRefresh: () => void;
  date: Nullable<string>;
}

export const HeaderList = ({onRefresh, date}: Props) => {
  const {refreshing} = useSelector(({currenciesReducer}: StateRedux) => currenciesReducer);

  return (
    <Animated.View entering={FadeInLeft}>
      <View style={styles.header}>
        <TextCustom text="Dol-AR" style={styles.title} />
      </View>
      {!!date && (
        <>
          <View style={styles.subHeader}>
            <TextCustom text="Ultima Actualización de las cotizaciones" style={styles.subtitle} />
            <TextCustom text={date} style={styles.date} />
          </View>
          <TouchableOpacity
            onPress={onRefresh}
            style={[styles.button, refreshing && styles.buttonDisabled]}
            disabled={refreshing}>
            <TextCustom text="Actualizar cotizaciones" style={styles.buttonText} />
          </TouchableOpacity>
        </>
      )}
    </Animated.View>
  );
};
