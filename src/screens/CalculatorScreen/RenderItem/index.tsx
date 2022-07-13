import React from 'react';
import {View} from 'react-native';

import {TextCustom} from '@components/TextCustom';
import {Quotation} from '@interfaces/currenciesInterface';
import {formatMoney, validateIsNumber} from '@utils/money';

import styles from './styles';

interface Props {
  item: Quotation;
  moneyArg: number;
}

export const RenderItem = ({item: {name, purchase}, moneyArg}: Props) => {
  const value = moneyArg / (validateIsNumber(purchase) || 1);
  return (
    <View style={styles.list}>
      <View style={styles.headerList}>
        <TextCustom text={name} style={styles.headerText} />
      </View>
      <View style={styles.bodyCard}>
        <View>
          <TextCustom text={formatMoney(value)} style={styles.text} />
        </View>
      </View>
    </View>
  );
};
