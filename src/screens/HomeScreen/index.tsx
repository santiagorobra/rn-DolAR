import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, RefreshControl } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

import { keyExtractor } from '@utils/generalUtils';
import { StateRedux } from '@interfaces/reduxInterface';
import { getDolars } from '@services/dolarService';
import { DARK, WHITE } from '@constants/colors';
import { setDolars } from '@redux/dolarsRedux';

import { HeaderList } from './HeaderList';
import { RenderItem } from './RenderItem';
import { EmptyList } from './EmptyList';
import styles from './styles';

const DATE_FORMAT = 'DD/MM/YYYY HH:mm:ss';

const HomeScreen = () => {
  const [lastUpdate, setLastUpdate] = useState ('');
  const [refreshing, setRefreshing] = useState(false);
  const dolars = useSelector((state: StateRedux) => state.dolarsReducer.dolars);
  const dispatch = useDispatch()

  const onRefresh = useCallback(() => {
    setRefreshing(true);
  }, []);

  useEffect(() => {
    (async () => {
      const { data } = await getDolars();
      if (data) {
        const response = Object.keys(data)
        .filter(key => data[key].casa.nombre.includes('Dolar') && !data[key].casa.nombre.includes('Soja'))
        .map(key => {
          return {
            ...data[key].casa, show: true
          }
        });
        dispatch(setDolars(response));
        refreshing && setRefreshing(false);
        setLastUpdate(moment().format(DATE_FORMAT));
      }
    })();
  }, [refreshing]);

  return (
    <FlatList
      data={dolars}
      style={styles.container}
      renderItem={(item) => item.item.show ? <RenderItem {...item } /> : null}
      ListHeaderComponent={<HeaderList date={lastUpdate} /> }
      refreshControl={
        <RefreshControl
          tintColor={WHITE}
          colors={[DARK]}
          progressBackgroundColor={WHITE}
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
