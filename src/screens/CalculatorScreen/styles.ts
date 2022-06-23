import {StyleSheet} from 'react-native';

import {DARK, WHITE} from '@constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: DARK,
    paddingHorizontal: 10,
  },
  title: {
    marginVertical: 15,
  },
  input: {
    fontSize: 20,
    height: 55,
    backgroundColor: WHITE,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
    color: DARK,
  },
});

export default styles;
