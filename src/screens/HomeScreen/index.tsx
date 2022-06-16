import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, RefreshControl } from 'react-native';
import moment from 'moment';

import { keyExtractor } from '@utils/generalUtils';
import { Dolar } from '@interfaces/dolarInterface';
import { Nullable } from '@interfaces/globalInterfaces';
import { getDolars } from '@services/dolarService';
import { WHITE } from '@constants/colors';

import { HeaderList } from './HeaderList';
import { RenderItem } from './RenderItem';
import { EmptyList } from './EmptyList';
import styles from './styles';

const DATE_FORMAT = 'DD/MM/YYYY hh:mm:ss';

const HomeScreen = () => {
  const [dolars, setDolars] = useState<Nullable<Dolar[]>>([]);
  const [lastUpdate, setLastUpdate] = useState ('');
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
  }, []);

  useEffect(() => {
    (async () => {
      const { data } = await getDolars();
      if (data) {
        const response = Object.keys(data)
        .filter(key => data[key].casa.nombre.includes('Dolar') && !data[key].casa.nombre.includes('Soja'))
        .map(key => data[key].casa);
        setDolars(response);
        refreshing && setRefreshing(false);
        setLastUpdate(moment().format(DATE_FORMAT));
      }
    })();
  }, [refreshing]);

  return (
    <FlatList
      data={dolars}
      style={styles.container}
      renderItem={(item) => <RenderItem {...item } />}
      ListHeaderComponent={<HeaderList date={lastUpdate} /> }
      refreshControl={
        <RefreshControl
          tintColor={WHITE}
          colors={[WHITE]}
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }
      ListEmptyComponent={EmptyList}
      showsVerticalScrollIndicator={false}
      keyExtractor={keyExtractor}
    />
  );
};

export default HomeScreen;
