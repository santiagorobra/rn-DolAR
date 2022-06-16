// import { ApiResponse } from 'apisauce';

// import { ResponseDolar } from '@interfaces/responseDolarInterface';

import api from './api';

export const getDolars = (): any => {
  return api.get('', { type: 'valoresprincipales' });
};
