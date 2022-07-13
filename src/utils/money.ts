import {Quotation} from '@interfaces/currenciesInterface';

export const validateIsNumber = (price: string | number): number => {
  if (typeof price === 'string') {
    return Number.isNaN(parseInt(price, 10)) ? 0 : parseInt(price, 10);
  }
  return price;
};

export const formatMoney = (price: string | number): string =>
  validateIsNumber(price)
    .toFixed(3)
    .replace('.', ',')
    .replace(/\B(?=(\d{3})+(?!\d))/g, '.');

export const filterQuotations = (quotations: Quotation[]): boolean =>
  quotations.some(quotation => quotation.show);
