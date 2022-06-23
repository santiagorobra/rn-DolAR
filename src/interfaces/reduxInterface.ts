import {SectionListCurrencies} from './currenciesInterface';

export interface CurrenciesSate {
  currencies: SectionListCurrencies;
}

export interface StateRedux {
  currenciesReducer: CurrenciesSate;
}
