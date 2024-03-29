import React from 'react';
import {View} from 'react-native';
import Animated, {FlipInXUp, FlipOutXUp} from 'react-native-reanimated';

import {TextCustom} from '@components/TextCustom';
import {Quotation} from '@interfaces/currenciesInterface';
import {formatMoneyFix} from '@utils/money';

import styles from './styles';

export const RenderItem = ({item: {name, purchase, sale}}: {item: Quotation}) => (
  <Animated.View entering={FlipInXUp} exiting={FlipOutXUp} style={styles.card}>
    <View style={styles.headerCard}>
      <TextCustom text={name} style={styles.headerText} />
    </View>
    <View style={styles.bodyCard}>
      <View>
        <TextCustom text="Compra" style={styles.text} />
        <TextCustom text={formatMoneyFix(purchase)} style={styles.text} />
      </View>
      <View>
        <TextCustom text="Venta" style={styles.text} />
        <TextCustom text={formatMoneyFix(sale)} style={styles.text} />
      </View>
    </View>
  </Animated.View>
);
