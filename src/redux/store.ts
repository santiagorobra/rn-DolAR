import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';

import dolarsReducer from './dolarsRedux';

const reducer = combineReducers({
  dolarsReducer,
});

const store = configureStore({
  reducer,
});

export default store;
