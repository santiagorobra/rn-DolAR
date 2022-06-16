import React from 'react';
import { View } from 'react-native';

import { TextCustom } from '@components/TextCustom';
import { Nullable } from '@interfaces/globalInterfaces';

import styles from './styles';

export const HeaderList = ({ date }: { date: Nullable<string> }) => {
  return (
    <View>
      <View style={styles.header}>
        <TextCustom text='Dol-AR' style={styles.title} />
      </View>
      {
        !!date &&
        <View style={styles.subHeader}>
          <TextCustom text='Ultima Actualización de las cotizaciones' style={styles.subtitle} />
          <TextCustom text={date} style={styles.date} />
        </View>
      }
    </View>
  );
};
