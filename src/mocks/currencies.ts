import {Currencies} from '@interfaces/currenciesInterface';

export const CURRENCIES_MOCK: Currencies = [
  {
    title: 'Dolares',
    currencies: [
      {
        id: 0,
        purchase: '120',
        sale: '120',
        name: 'Dolar',
        show: false,
      },
      {
        id: 1,
        purchase: '250',
        sale: '250',
        name: 'Dolar blue',
        show: false,
      },
    ],
  },
  {
    title: 'Euros',
    currencies: [
      {
        id: 2,
        purchase: '310',
        sale: '310',
        name: 'Euro blue',
        show: false,
      },
    ],
  },
];
