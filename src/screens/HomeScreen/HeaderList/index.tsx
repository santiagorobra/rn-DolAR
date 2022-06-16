import React from 'react';
import { View } from 'react-native';

import { TextCustom } from '@components/TextCustom';

import styles from './styles';

export const HeaderList = () => {
  return (
    <View>
      <TextCustom text='Dol-AR' style={styles.title} />
      <View style={styles.subHeader}>
        <TextCustom text='Ultima Actualización de la cotización' style={styles.subtitle} />
        <TextCustom text='16/06/2022 21:58' style={styles.date} />
      </View>
    </View>
  );
};
