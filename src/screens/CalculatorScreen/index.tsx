import React, {useState} from 'react';
import {SectionList, TextInput} from 'react-native';
import {useSelector} from 'react-redux';

import {keyExtractor} from '@utils/generalUtils';
import {validateIsNumber} from '@utils/money';
import {StateRedux} from '@interfaces/reduxInterface';
import {TextCustom} from '@components/TextCustom';
import {EmptyList} from '@components/EmptyList';
import {GRAY} from '@constants/colors';

import {RenderItem} from './RenderItem';
import styles from './styles';

const CalculatorScreen = () => {
  const [moneyArg, setMoneyArg] = useState(0);
  const currenciesState = useSelector((state: StateRedux) => state.currenciesReducer.currencies);

  const onChangeText = (preValue: string) => {
    setMoneyArg(validateIsNumber(preValue));
  };

  return (
    <SectionList
      sections={currenciesState}
      style={styles.container}
      renderItem={({item}) => (item.show ? <RenderItem item={item} moneyArg={moneyArg} /> : null)}
      ListHeaderComponent={
        <>
          <TextInput
            style={styles.input}
            placeholder="0"
            keyboardType="numeric"
            onChangeText={onChangeText}
            placeholderTextColor={GRAY}
          />
          <TextCustom text="Calculá pesos Argentinos a ...." style={styles.title} />
        </>
      }
      ListEmptyComponent={EmptyList}
      showsVerticalScrollIndicator={false}
      keyExtractor={keyExtractor}
    />
  );
};

export default CalculatorScreen;
