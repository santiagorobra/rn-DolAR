import React from 'react';
import {View} from 'react-native';

import {TextCustom} from '@components/TextCustom';

import styles from './styles';

export const EmptyList = () => (
  <View style={styles.container}>
    <TextCustom text="No pudimos obtener" style={styles.text} />
    <TextCustom text="las cotizaciones" style={styles.text} />
  </View>
);
