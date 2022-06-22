import React from 'react';
import {View} from 'react-native';

import {TextCustom} from '@components/TextCustom';
import {Dollar} from '@interfaces/dollarInterface';

import styles from './styles';

export const RenderItem = ({
  item: {nombre, compra},
  moneyArg,
}: {
  item: Dollar;
  moneyArg: number;
}) => {
  const value = (moneyArg / parseInt(compra, 10)).toFixed(3).toString();
  return (
    <View style={styles.list}>
      <View style={styles.headerList}>
        <TextCustom text={nombre} style={styles.headerText} />
      </View>
      <View style={styles.bodyCard}>
        <View>
          <TextCustom text={value} style={styles.text} />
        </View>
      </View>
    </View>
  );
};
