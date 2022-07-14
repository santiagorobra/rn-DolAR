import {StyleSheet} from 'react-native';

import {DARK, GRAY, WHITE} from '@constants/colors';
import {IS_ANDROID} from '@utils/platforms';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: IS_ANDROID ? 0 : 15,
  },
  subHeader: {
    marginVertical: 10,
  },
  title: {
    fontSize: 30,
  },
  subtitle: {
    fontSize: 18,
  },
  date: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    alignItems: 'center',
    backgroundColor: WHITE,
    paddingVertical: 16,
    borderRadius: 8,
    marginVertical: 8,
  },
  buttonDisabled: {
    backgroundColor: GRAY,
  },
  buttonText: {
    color: DARK,
    fontWeight: 'bold',
  },
});

export default styles;
