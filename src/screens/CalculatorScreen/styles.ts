import {StyleSheet} from 'react-native';

import {DARK, GRAY, WHITE} from '@constants/colors';

const COMMOM_STYLE_INPUT = {
  fontSize: 20,
  height: 55,
  paddingHorizontal: 10,
  marginVertical: 10,
};

const COMMOM_STYLE_BORDER = {
  borderBottomColor: WHITE,
  borderBottomWidth: 1,
  borderRadius: 0,
};
const COMMOM_COLOR_LABEL = {
  backgroundColor: DARK,
  color: WHITE,
};
const SIZE_FLAGS = 50;

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
  labelContainerAr: {
    ...COMMOM_STYLE_BORDER,
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    backgroundColor: DARK,
  },
  labelAr: {
    ...COMMOM_STYLE_INPUT,
    ...COMMOM_COLOR_LABEL,
    textAlignVertical: 'bottom',
    marginBottom: 15,
  },
  label: {
    ...COMMOM_STYLE_INPUT,
    ...COMMOM_COLOR_LABEL,
    ...COMMOM_STYLE_BORDER,
  },
  input: {
    ...COMMOM_STYLE_INPUT,
    borderRadius: 8,
    backgroundColor: WHITE,
    color: DARK,
  },
  modalContentContainerStyle: {
    ...COMMOM_COLOR_LABEL,
    tintColor: WHITE,
  },
  listItemLabelStyle: {
    color: WHITE,
  },
  listItemContainerStyle: {
    borderBottomWidth: 1,
    borderBottomColor: GRAY,
    marginTop: 8,
    height: 65,
  },
  dropDownText: {
    color: WHITE,
    fontSize: 20,
  },
  flag: {
    width: SIZE_FLAGS,
    height: SIZE_FLAGS,
  },
  flagAr: {
    marginLeft: 8,
  },
});

export default styles;
