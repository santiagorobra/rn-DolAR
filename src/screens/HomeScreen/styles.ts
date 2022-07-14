import {StyleSheet} from 'react-native';

import {DARK, WHITE} from '@constants/colors';
import {IS_ANDROID} from '@utils/platforms';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: DARK,
    paddingHorizontal: IS_ANDROID ? 16 : 10,
  },
  titleSection: {
    fontSize: 20,
    color: WHITE,
  },
});

export default styles;
