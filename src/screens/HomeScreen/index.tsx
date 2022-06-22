import React, {useEffect, useState} from 'react';
import {FlatList, RefreshControl} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import moment from 'moment';

import {keyExtractor} from '@utils/generalUtils';
import {StateRedux} from '@interfaces/reduxInterface';
import {getDollars} from '@services/dollarService';
import {DARK, WHITE} from '@constants/colors';
import {setDollars} from '@redux/slices/dollarsSlice';
import {EmptyList} from '@components/EmptyList';

import {HeaderList} from './HeaderList';
import {RenderItem} from './RenderItem';
import styles from './styles';

const DATE_FORMAT = 'DD/MM/YYYY HH:mm:ss';
const TXT_DOLLAR = 'Dolar';
const TXT_SOYA = 'Soja';
const TXT_TURIST = 'turista';

const HomeScreen = () => {
  const [lastUpdate, setLastUpdate] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const dollars = useSelector((state: StateRedux) => state.dollarsReducer.dollars);
  const dispatch = useDispatch();

  const transformResponseData = (data: any) =>
    Object.keys(data)
      .filter(
        key =>
          data[key].casa.nombre.includes(TXT_DOLLAR) &&
          !data[key].casa.nombre.includes(TXT_SOYA) &&
          !data[key].casa.nombre.includes(TXT_TURIST) &&
          data[key].casa.nombre !== TXT_DOLLAR,
      )
      .map(key => ({
        ...data[key].casa,
        show: true,
      }));

  const onRefresh = async () => {
    setRefreshing(true);
    const {data} = await getDollars();
    setRefreshing(false);
    if (data) {
      dispatch(setDollars(transformResponseData(data)));
      setLastUpdate(moment().format(DATE_FORMAT));
    }
  };

  useEffect(() => {
    (async () => {
      const {data} = await getDollars();
      if (data) {
        dispatch(setDollars(transformResponseData(data)));
        setLastUpdate(moment().format(DATE_FORMAT));
      }
    })();
  }, [dispatch]);

  return (
    <FlatList
      data={dollars}
      style={styles.container}
      renderItem={({item}) => (item.show ? <RenderItem item={item} /> : null)}
      ListHeaderComponent={<HeaderList date={lastUpdate} />}
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
