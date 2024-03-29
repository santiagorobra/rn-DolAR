import {StyleSheet} from 'react-native';

import {BACKGROUND_LIST} from '@constants/colors';

const styles = StyleSheet.create({
  card: {
    backgroundColor: BACKGROUND_LIST,
    borderRadius: 20,
    marginVertical: 5,
    paddingHorizontal: 25,
    paddingVertical: 10,
  },
  headerCard: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  bodyCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  text: {
    fontSize: 20,
  },
});

export default styles;
