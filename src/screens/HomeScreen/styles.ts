import {StyleSheet} from 'react-native';

import {DARK} from '@constants/colors';
import {IS_ANDROID} from '@utils/platforms';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: DARK,
    paddingHorizontal: IS_ANDROID ? 16 : 10,
  },
});

export default styles;
