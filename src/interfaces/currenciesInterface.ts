import {Nullable} from './globalInterfaces';

export interface Quotation {
  id: number;
  purchase: string;
  sale: string;
  name: string;
  show: boolean;
}

export interface SectionListCurrencies
  extends Array<{
    icon: Nullable<string>;
    title: string;
    data: Quotation[];
  }> {}

export interface Currencies
  extends Array<{
    icon: Nullable<string>;
    title: string;
    currencies: Quotation[];
  }> {}
