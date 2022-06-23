export interface Quotation {
  id: number;
  purchase: string;
  sale: string;
  name: string;
  show: boolean;
}

export interface SectionListCurrencies
  extends Array<{
    title: string;
    data: Quotation[];
  }> {}

export interface Currencies
  extends Array<{
    title: string;
    currencies: Quotation[];
  }> {}
