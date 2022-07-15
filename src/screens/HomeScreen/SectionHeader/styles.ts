import {StyleSheet} from 'react-native';

import {WHITE} from '@constants/colors';

const SIZE_ICON = 50;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: SIZE_ICON,
    height: SIZE_ICON,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 20,
    marginLeft: 10,
    color: WHITE,
  },
});

export default styles;
