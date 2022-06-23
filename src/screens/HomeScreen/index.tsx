import React, {useEffect, useState} from 'react';
import {RefreshControl, SectionList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import moment from 'moment';

import {keyExtractor} from '@utils/generalUtils';
import {StateRedux} from '@interfaces/reduxInterface';
import {Currencies, SectionListCurrencies} from '@interfaces/currenciesInterface';
import {getCurrencies} from '@services/currenciesService';
import {DARK, WHITE} from '@constants/colors';
import {EmptyList} from '@components/EmptyList';
import {TextCustom} from '@components/TextCustom';
import {setCurrencies} from '@redux/slices/currenciesSlice';

import {HeaderList} from './HeaderList';
import {RenderItem} from './RenderItem';
import styles from './styles';

const DATE_FORMAT = 'DD/MM/YYYY HH:mm:ss';

const HomeScreen = () => {
  const [lastUpdate, setLastUpdate] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const currenciesState = useSelector((state: StateRedux) => state.currenciesReducer.currencies);
  const dispatch = useDispatch();

  const transformResponseData = (response: Currencies): SectionListCurrencies =>
    response.map(({title, currencies}) => ({
      title,
      data: currencies.map(currency => ({
        ...{...currency},
        show: true,
      })),
    }));

  const onRefresh = async () => {
    setRefreshing(true);
    const {data} = await getCurrencies();
    setRefreshing(false);
    if (data) {
      dispatch(setCurrencies(transformResponseData(data)));
      setLastUpdate(moment().format(DATE_FORMAT));
    }
  };

  useEffect(() => {
    (async () => {
      const {data} = await getCurrencies();
      if (data) {
        dispatch(setCurrencies(transformResponseData(data)));
        setLastUpdate(moment().format(DATE_FORMAT));
      }
    })();
  }, [dispatch]);

  return (
    <SectionList
      sections={currenciesState}
      style={styles.container}
      renderItem={({item}) => (item.show ? <RenderItem item={item} /> : null)}
      renderSectionHeader={({section: {title}}) => (
        <TextCustom style={styles.titleSection} text={title} />
      )}
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
