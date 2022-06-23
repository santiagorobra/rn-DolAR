import {StyleSheet} from 'react-native';

import {BACKGROUND_LIST} from '@constants/colors';

const styles = StyleSheet.create({
  skeleton: {
    backgroundColor: BACKGROUND_LIST,
    borderRadius: 20,
    marginVertical: 5,
    paddingHorizontal: 25,
    paddingVertical: 10,
    width: '100%',
    height: 100,
  },
});

export default styles;
