import {create} from 'apisauce';
import Config from 'react-native-config';

const APPLICATION_JSON = 'application/json';
const CONTENT_TYPE = 'Content-Type';

const api = create({
  baseURL: Config.API_URL,
  headers: {
    Accept: APPLICATION_JSON,
    [CONTENT_TYPE]: APPLICATION_JSON,
  },
  timeout: 15000,
});

export default api;
