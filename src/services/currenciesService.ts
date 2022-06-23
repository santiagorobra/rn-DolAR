import {Currencies} from '@interfaces/currenciesInterface';
import {ApiResponse} from 'apisauce';

import api from './api';

export const getCurrencies = (): Promise<ApiResponse<Currencies, any>> => api.get('');
