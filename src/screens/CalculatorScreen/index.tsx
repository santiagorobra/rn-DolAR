import React, {useState} from 'react';
import {FlatList, TextInput} from 'react-native';
import {useSelector} from 'react-redux';

import {keyExtractor} from '@utils/generalUtils';
import {StateRedux} from '@interfaces/reduxInterface';
import {TextCustom} from '@components/TextCustom';
import {EmptyList} from '@components/EmptyList';

import {GRAY} from '@constants/colors';
import {RenderItem} from './RenderItem';
import styles from './styles';

const INITIAL_VALUE = 0;

const CalculatorScreen = () => {
  const [moneyArg, setMoneyArg] = useState(INITIAL_VALUE);
  const dollars = useSelector((state: StateRedux) => state.dollarsReducer.dollars);

  const onChangeText = (preValue: string) => {
    const newValue = parseInt(preValue, 10);
    setMoneyArg(Number.isNaN(newValue) ? INITIAL_VALUE : newValue);
  };

  return (
    <FlatList
      data={dollars}
      style={styles.container}
      renderItem={({item}) => (item.show ? <RenderItem item={item} moneyArg={moneyArg} /> : null)}
      ListHeaderComponent={
        <>
          <TextCustom text="Calculá pesos Argentinos a Dolar" style={styles.title} />
          <TextInput
            style={styles.input}
            placeholder="0"
            keyboardType="numeric"
            onChangeText={onChangeText}
            defaultValue={moneyArg.toString()}
            placeholderTextColor={GRAY}
          />
        </>
      }
      ListEmptyComponent={EmptyList}
      showsVerticalScrollIndicator={false}
      keyExtractor={keyExtractor}
    />
  );
};

export default CalculatorScreen;
