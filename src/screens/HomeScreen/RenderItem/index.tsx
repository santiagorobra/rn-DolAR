import React from 'react';
import {View} from 'react-native';

import {TextCustom} from '@components/TextCustom';
import {Dolar} from '@interfaces/dolarInterface';

import styles from './styles';

export const RenderItem = ({item: {nombre, compra, venta}}: {item: Dolar}) => (
  <View style={styles.card}>
    <View style={styles.headerCard}>
      <TextCustom text={nombre} style={styles.headerText} />
    </View>
    <View style={styles.bodyCard}>
      <View>
        <TextCustom text="Compra" style={styles.text} />
        <TextCustom text={compra.toString()} style={styles.text} />
      </View>
      <View>
        <TextCustom text="Venta" style={styles.text} />
        <TextCustom text={venta.toString()} style={styles.text} />
      </View>
    </View>
  </View>
);
