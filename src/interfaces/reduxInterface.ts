import {Dollar} from './dollarInterface';

export interface DollarSate {
  dollars: Dollar[];
}

export interface StateRedux {
  dollarsReducer: DollarSate;
}
