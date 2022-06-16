import React from 'react';
import { FlatList } from 'react-native';

import { MOCK_DOLARS } from '@constants/mocks';
import { keyExtractor } from '@utils/generalUtils';

import { HeaderList } from './HeaderList';
import { RenderItem } from './RenderItem';
import styles from './styles';

const HomeScreen = () => {
  return (
    <FlatList
      data={MOCK_DOLARS}
      style={styles.container}
      renderItem={(item) => <RenderItem {...item } />}
      ListHeaderComponent={<HeaderList />}
      bounces={MOCK_DOLARS.length > 1}
      showsVerticalScrollIndicator={false}
      keyExtractor={keyExtractor}
    />
  );
};

export default HomeScreen;
