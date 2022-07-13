import {SectionListCurrencies} from './currenciesInterface';

export interface CurrenciesSate {
  currencies: SectionListCurrencies;
  refreshing: boolean;
}

export interface StateRedux {
  currenciesReducer: CurrenciesSate;
}
