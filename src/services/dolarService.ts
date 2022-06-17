// import { ApiResponse } from 'apisauce';

// import { ResponseDolar } from '@interfaces/responseDolarInterface';

import api from './api';

export const getDolars = (): any => api.get('', {type: 'valoresprincipales'});
