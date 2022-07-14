import React, {useEffect, useState} from 'react';
import {RefreshControl, SectionList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import moment from 'moment';

import {keyExtractor} from '@utils/generalUtils';
import {filterQuotations, formatMoney} from '@utils/money';
import {StateRedux} from '@interfaces/reduxInterface';
import {Currencies, SectionListCurrencies} from '@interfaces/currenciesInterface';
import {getCurrencies} from '@services/currenciesService';
import {DARK, WHITE} from '@constants/colors';
import {TextCustom} from '@components/TextCustom';
import SkeletonCard from '@components/SkeletonComponent';
import {EmptyList} from '@components/EmptyList';
import {setCurrencies, setRefreshing} from '@redux/slices/currenciesSlice';

import {CURRENCIES_MOCK} from 'src/mocks/currencies';
import {HeaderList} from './HeaderList';
import {RenderItem} from './RenderItem';
import styles from './styles';

const DATE_FORMAT = 'DD/MM/YYYY HH:mm:ss';

const HomeScreen = () => {
  const [lastUpdate, setLastUpdate] = useState('');
  const [loading, setLoading] = useState(false);
  const currenciesState = useSelector((state: StateRedux) => state.currenciesReducer.currencies);
  const refreshing = useSelector((state: StateRedux) => state.currenciesReducer.refreshing);
  const dispatch = useDispatch();

  const transformResponseData = (response: Currencies): SectionListCurrencies =>
    response.map(({title, currencies}) => ({
      title,
      data: currencies.map(currency => ({
        ...{...currency},
        purchase: formatMoney(currency.purchase),
        sale: formatMoney(currency.sale),
        show: true,
      })),
    }));

  const onRefresh = async () => {
    try {
      dispatch(setRefreshing(true));
      const {data} = await getCurrencies();
      if (Array.isArray(data) && data.length) {
        dispatch(setCurrencies(transformResponseData(data)));
        setLastUpdate(moment().format(DATE_FORMAT));
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setRefreshing(false));
    }
  };

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const {data} = await getCurrencies();
        if (Array.isArray(data) && data.length) {
          dispatch(setCurrencies(transformResponseData(data)));
          setLastUpdate(moment().format(DATE_FORMAT));
        } else if (
          __DEV__ &&
          (!Array.isArray(data) || (Array.isArray(data) && data.length === 0))
        ) {
          dispatch(setCurrencies(transformResponseData(CURRENCIES_MOCK)));
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [dispatch]);

  return (
    <SectionList
      sections={currenciesState}
      style={styles.container}
      renderItem={({item}) => (item.show ? <RenderItem item={item} /> : null)}
      renderSectionHeader={({section: {title, data}}) =>
        filterQuotations(data) ? <TextCustom style={styles.titleSection} text={title} /> : null
      }
      ListHeaderComponent={<HeaderList onRefresh={onRefresh} date={lastUpdate} />}
      refreshControl={
        <RefreshControl
          tintColor={WHITE}
          colors={[DARK]}
          progressBackgroundColor={WHITE}
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }
      ListEmptyComponent={
        loading ? (
          <>
            {[...Array(5).keys()].map(i => (
              <SkeletonCard key={`Skeleton-${i}`} />
            ))}
          </>
        ) : (
          <EmptyList />
        )
      }
      showsVerticalScrollIndicator={false}
      keyExtractor={keyExtractor}
    />
  );
};

export default HomeScreen;
