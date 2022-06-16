
import { Dolar } from './dolarInterface';

export interface StateRedux {
  dolarsReducer: DolarSate;
};

export interface DolarSate {
  dolars: Dolar[];
};
