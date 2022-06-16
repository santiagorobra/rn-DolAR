import { StyleSheet } from 'react-native';

import { BACKGROUND_LIST, INCREMENT, WHITE } from '@constants/colors';

const styles = StyleSheet.create({
  card: {
    backgroundColor: BACKGROUND_LIST,
    borderRadius: 20,
    marginVertical: 5,
    paddingHorizontal: 25,
    paddingVertical: 10
  },
  headerCard: {
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  headerText: {
    fontSize: 20,
    marginRight: 20,
    fontWeight: 'bold',
  },
  bodyCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 5
  },
  statusQuote: {
    color: INCREMENT,
    fontWeight: 'bold',
    fontSize: 20
  },
  text: {
    fontSize: 20
  }
});

export default styles;
