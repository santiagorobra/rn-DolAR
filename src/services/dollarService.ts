// import { ApiResponse } from 'apisauce';

// import { ResponseDollar } from '@interfaces/responseDollarInterface';

import api from './api';

export const getDollars = (): any => api.get('', {type: 'valoresprincipales'});
