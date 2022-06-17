import {Dolar} from './dolarInterface';

export interface DolarSate {
  dolars: Dolar[];
}

export interface StateRedux {
  dolarsReducer: DolarSate;
}
