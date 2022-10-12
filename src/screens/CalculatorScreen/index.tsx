import React, {useEffect, useState} from 'react';
import {Image, ScrollView, TextInput, View} from 'react-native';
import {useSelector} from 'react-redux';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Ionicons';
import Animated, {FlipInXUp} from 'react-native-reanimated';

import {StateRedux} from '@interfaces/reduxInterface';
import {Quotation} from '@interfaces/currenciesInterface';
import {TextCustom} from '@components/TextCustom';
import {EmptyList} from '@components/EmptyList';
import {formatDecimal, validateIsNumber} from '@utils/money';
import {getImageUri} from '@utils/images';
import {GRAY, WHITE} from '@constants/colors';

import styles from './styles';

interface DropDownPickerItems
  extends Array<{
    label: string;
    value: string;
  }> {}

const SIZE_ICONS = 25;
const CloseIconComponent = () => <Icon name="close" size={SIZE_ICONS} color={WHITE} />;
const TickIconComponent = () => <Icon name="checkmark" size={SIZE_ICONS} color={WHITE} />;
const ArrowDownIconComponent = () => <Icon name="chevron-down" size={SIZE_ICONS} color={WHITE} />;
const FlagItemIconComponent = ({uri}: {uri: string}) => (
  <Image source={{uri}} style={styles.flag} />
);

const CalculatorScreen = () => {
  const [amountArg, setAmountArg] = useState(1);
  const [amountAnyone, setAmountAnyone] = useState(1);

  const [currentCurrency, setCurrentCurrency] = useState(1);
  const {currencies: currenciesState, refreshing} = useSelector(
    ({currenciesReducer}: StateRedux) => currenciesReducer,
  );

  const [dropDownPickerValue, setDropDownPickerValue] = useState('');
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

  const onChangeValueDropDown = (preValue: string | null) => {
    if (preValue) {
      const value = validateIsNumber(preValue.split('-')[1].trim());
      setCurrentCurrency(value);
      setAmountAnyone(1);
      setAmountArg(value);
    }
  };

  useEffect(() => {
    if (refreshing) {
      setOpenDropDownPicker(false);
      setDropDownPickerValue('');
      setDropDownPickerItemsAll([]);
    }
  }, [refreshing]);

  useEffect(() => {
    if (currenciesState.length && !dropDownPickerValue) {
      setDropDownPickerItemsAll(
        currenciesState.flatMap(({data, icon}) =>
          data.map(({name, sale}: Quotation) => {
            const uri = getImageUri(icon);
            return {
              icon: uri ? () => <FlagItemIconComponent uri={uri} /> : null,
              label: `${name} - ${sale} pesos`,
              value: `${name} - ${sale}`,
            };
          }),
        ),
      );
    }
  }, [currenciesState, dropDownPickerValue]);

  return (
    <ScrollView style={styles.container}>
      {!currenciesState.length ? (
        <EmptyList />
      ) : (
        <>
          <TextCustom
            text="Calculá pesos Argentinos a cualquier divisa o viceversa"
            style={styles.title}
          />
          <View style={styles.labelContainerAr}>
            <Image
              source={require('../../../assets/flags/ar.png')}
              style={[styles.flag, styles.flagAr]}
            />
            <TextInput
              style={styles.labelAr}
              placeholder="Pesos Argentinos"
              editable={false}
              selectTextOnFocus={false}
              placeholderTextColor={WHITE}
            />
          </View>
          {!!dropDownPickerValue && (
            <Animated.View entering={FlipInXUp}>
              <TextInput
                style={styles.input}
                placeholder="0"
                keyboardType="numeric"
                placeholderTextColor={GRAY}
                value={!amountArg ? '' : formatDecimal(amountArg)}
                onChangeText={handleAmountArgChange}
              />
            </Animated.View>
          )}
          {!!dropDownPickerItemsAll.length && (
            <DropDownPicker
              style={styles.label}
              listMode="MODAL"
              modalProps={{
                animationType: 'slide',
              }}
              itemKey="label"
              CloseIconComponent={CloseIconComponent}
              TickIconComponent={TickIconComponent}
              ArrowDownIconComponent={ArrowDownIconComponent}
              modalContentContainerStyle={styles.modalContentContainerStyle}
              listItemLabelStyle={styles.listItemLabelStyle}
              listItemContainerStyle={styles.listItemContainerStyle}
              placeholderStyle={styles.dropDownText}
              textStyle={styles.dropDownText}
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
            <Animated.View entering={FlipInXUp}>
              <TextInput
                style={styles.input}
                placeholder="0"
                keyboardType="numeric"
                placeholderTextColor={GRAY}
                value={!amountAnyone ? '' : formatDecimal(amountAnyone)}
                onChangeText={handleAmountAnyoneChange}
              />
            </Animated.View>
          )}
        </>
      )}
    </ScrollView>
  );
};

export default CalculatorScreen;
