import {StyleSheet} from 'react-native';

import {WHITE} from '@constants/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 20,
    marginLeft: 10,
    color: WHITE,
  },
});

export default styles;
