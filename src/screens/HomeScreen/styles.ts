import {StyleSheet} from 'react-native';

import {DARK, WHITE} from '@constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: DARK,
    paddingHorizontal: 10,
  },
  titleSection: {
    fontSize: 20,
    color: WHITE,
  },
});

export default styles;
