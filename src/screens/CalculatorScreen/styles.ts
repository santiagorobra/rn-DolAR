import {StyleSheet} from 'react-native';

import {DARK, WHITE} from '@constants/colors';

const COMMOM_STYLE_INPUT = {
  fontSize: 20,
  height: 50,
  backgroundColor: WHITE,
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
    color: DARK,
  },
  input: {
    ...COMMOM_STYLE_INPUT,
    borderWidth: 1,
    borderColor: WHITE,
    backgroundColor: DARK,
    color: WHITE,
  },
});

export default styles;
