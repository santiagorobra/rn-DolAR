import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';

import dollarsReducer from './slices/dollarsSlice';

const reducer = combineReducers({
  dollarsReducer,
});

const store = configureStore({
  reducer,
});

export default store;
