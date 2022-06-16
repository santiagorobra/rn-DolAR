import React from 'react';
import { View } from 'react-native';

import { TextCustom } from '@components/TextCustom';
import { Dolar } from '@interfaces/dolarInterface';

import styles from './styles';

export const RenderItem = ({ item: { type, purchase, sale } }: { item: Dolar }) => (
  <View style={styles.card}>
    <View style={styles.headerCard}>
      <TextCustom text={type} style={styles.headerText} />
      <TextCustom text='+' style={styles.statusQuote} />
    </View>
    <View style={styles.bodyCard}>
      <View>
        <TextCustom text='Compra' style={styles.text} />
        <TextCustom text={purchase ? purchase.toString() : '-'} style={styles.text} />
      </View>
      <View>
        <TextCustom text='Venta' style={styles.text} />
        <TextCustom text={sale.toString()} style={styles.text} />
      </View>
    </View>
  </View>
);
