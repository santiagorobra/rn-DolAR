import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import { DARK } from '@constants/colors';

import Navigator from './src/navigators';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Navigator />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: DARK
  }
});

export default App;
