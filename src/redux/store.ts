import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';

import currenciesReducer from './slices/currenciesSlice';

const reducer = combineReducers({
  currenciesReducer,
});

const store = configureStore({
  reducer,
});

export default store;
