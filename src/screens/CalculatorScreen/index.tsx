import React, {useEffect, useState} from 'react';
import {TextInput, View} from 'react-native';
import {useSelector} from 'react-redux';
import DropDownPicker from 'react-native-dropdown-picker';

import {StateRedux} from '@interfaces/reduxInterface';
import {Quotation} from '@interfaces/currenciesInterface';
import {TextCustom} from '@components/TextCustom';
import {EmptyList} from '@components/EmptyList';
import {validateIsNumber} from '@utils/money';
import {DARK, GRAY} from '@constants/colors';

import styles from './styles';

interface DropDownPickerItems
  extends Array<{
    label: string;
    value: string;
  }> {}

const CalculatorScreen = () => {
  const [amountArg, setAmountArg] = useState(1);
  const [amountAnyone, setAmountAnyone] = useState(1);

  const [currentCurrency, setCurrentCurrency] = useState(1);
  const currenciesState = useSelector((state: StateRedux) => state.currenciesReducer.currencies);
  const refreshing = useSelector((state: StateRedux) => state.currenciesReducer.refreshing);

  const [dropDownPickerValue, setDropDownPickerValue] = useState(null);
  const [openDropDownPicker, setOpenDropDownPicker] = useState(false);
  const [dropDownPickerItemsAll, setDropDownPickerItemsAll] = useState<DropDownPickerItems>([]);

  const handleAmountArgChange = (amountInputArg: string) => {
    const toNumberAmountInputArg = validateIsNumber(amountInputArg);
    if (toNumberAmountInputArg) {
      setAmountAnyone(toNumberAmountInputArg / currentCurrency);
      setAmountArg(toNumberAmountInputArg);
    } else {
      setAmountAnyone(0);
      setAmountArg(0);
    }
  };

  const handleAmountAnyoneChange = (amountInputAnyone: string) => {
    const toNumberAmountInputAnyone = validateIsNumber(amountInputAnyone);
    if (toNumberAmountInputAnyone) {
      setAmountArg(toNumberAmountInputAnyone * currentCurrency);
      setAmountAnyone(toNumberAmountInputAnyone);
    } else {
      setAmountArg(0);
      setAmountAnyone(0);
    }
  };

  const onChangeValueDropDown = (preValue: any) => {
    setCurrentCurrency(preValue);
    setAmountAnyone(preValue);
    setAmountArg(1 / preValue);
  };

  useEffect(() => {
    if (refreshing) {
      setOpenDropDownPicker(false);
      setDropDownPickerValue(null);
      setDropDownPickerItemsAll([]);
    }
  }, [refreshing]);

  useEffect(() => {
    if (currenciesState.length) {
      setDropDownPickerItemsAll(
        currenciesState.flatMap(({data}) =>
          data.map(({name, purchase}: Quotation) => ({
            label: `${name} - ${purchase} pesos`,
            value: purchase,
          })),
        ),
      );
    }
  }, [currenciesState]);

  return (
    <View style={styles.container}>
      {!currenciesState.length ? (
        <EmptyList />
      ) : (
        <>
          <TextCustom
            text="Para la Compra: Calculá pesos Argentinos a cualquier divisa o viceversa"
            style={styles.title}
          />
          <TextInput
            style={styles.label}
            placeholder="Arg"
            editable={false}
            selectTextOnFocus={false}
            placeholderTextColor={DARK}
          />
          {!!dropDownPickerValue && (
            <TextInput
              style={styles.input}
              placeholder="0"
              keyboardType="numeric"
              placeholderTextColor={GRAY}
              value={!amountArg ? '' : amountArg.toString().replace('.', ',')}
              onChangeText={handleAmountArgChange}
            />
          )}
          {!!dropDownPickerItemsAll.length && (
            <DropDownPicker
              style={styles.label}
              onChangeValue={onChangeValueDropDown}
              placeholder="Seleccioná una divisa"
              open={openDropDownPicker}
              value={dropDownPickerValue}
              items={dropDownPickerItemsAll}
              setOpen={setOpenDropDownPicker}
              setValue={setDropDownPickerValue}
              setItems={setDropDownPickerItemsAll}
            />
          )}
          {!!dropDownPickerValue && (
            <TextInput
              style={styles.input}
              placeholder="0"
              keyboardType="numeric"
              placeholderTextColor={GRAY}
              value={!amountAnyone ? '' : amountAnyone.toString().replace('.', ',')}
              onChangeText={handleAmountAnyoneChange}
            />
          )}
        </>
      )}
    </View>
  );
};

export default CalculatorScreen;
