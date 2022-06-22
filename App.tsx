import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';

import {DARK} from '@constants/colors';
import store from '@redux/store';

import Navigator from './src/navigators';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: DARK,
  },
});

function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <Navigator />
      </SafeAreaView>
    </Provider>
  );
}

export default App;
