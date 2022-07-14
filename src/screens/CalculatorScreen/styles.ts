import {StyleSheet} from 'react-native';

import {DARK, GRAY, WHITE} from '@constants/colors';

const COMMOM_STYLE_INPUT = {
  fontSize: 20,
  height: 55,
  borderRadius: 8,
  paddingHorizontal: 10,
  marginVertical: 10,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: DARK,
    paddingHorizontal: 10,
  },
  title: {
    marginVertical: 15,
    fontSize: 18,
  },
  label: {
    ...COMMOM_STYLE_INPUT,
    borderBottomColor: WHITE,
    borderBottomWidth: 1,
    borderRadius: 0,
    backgroundColor: DARK,
    color: WHITE,
  },
  input: {
    ...COMMOM_STYLE_INPUT,
    backgroundColor: WHITE,
    color: DARK,
  },
  modalContentContainerStyle: {
    backgroundColor: DARK,
    tintColor: WHITE,
    color: WHITE,
  },
  listItemLabelStyle: {
    color: WHITE,
  },
  listItemContainerStyle: {
    borderBottomWidth: 1,
    borderBottomColor: GRAY,
    marginTop: 8,
  },
  dropDownText: {
    color: WHITE,
    fontSize: 20,
  },
});

export default styles;
