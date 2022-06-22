import React from 'react';
import {View} from 'react-native';

import {TextCustom} from '@components/TextCustom';
import {Dollar} from '@interfaces/dollarInterface';

import styles from './styles';

export const RenderItem = ({item: {nombre, compra, venta}}: {item: Dollar}) => (
  <View style={styles.card}>
    <View style={styles.headerCard}>
      <TextCustom text={nombre} style={styles.headerText} />
    </View>
    <View style={styles.bodyCard}>
      <View>
        <TextCustom text="Compra" style={styles.text} />
        <TextCustom text={compra} style={styles.text} />
      </View>
      <View>
        <TextCustom text="Venta" style={styles.text} />
        <TextCustom text={venta} style={styles.text} />
      </View>
    </View>
  </View>
);
