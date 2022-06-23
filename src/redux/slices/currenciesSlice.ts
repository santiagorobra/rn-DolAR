import {createSlice} from '@reduxjs/toolkit';
import {CurrenciesSate} from '@interfaces/reduxInterface';

const SLICE_NAME = 'CURRENCIES';

// Initial state for Redux store:
const initialState: CurrenciesSate = {
  currencies: [],
};

// Create Redux state slice
const currenciesSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    // Define reducers
    setCurrencies: (state, action) => {
      state.currencies = action.payload;
    },
    displayCurrency: (state, action) => {
      /* eslint-disable-next-line no-restricted-syntax */
      for (const [index, iterator] of state.currencies.entries()) {
        const objIndex = iterator.data.findIndex(quotation => quotation.id === action.payload);
        if (objIndex !== -1) {
          if (state.currencies[index].data.filter(quotation => quotation.show).length > 1) {
            state.currencies[index].data[objIndex].show =
              !state.currencies[index].data[objIndex].show;
          } else {
            state.currencies[index].data[objIndex].show = true;
          }
          break;
        }
      }
    },
  },
});

// Export actions generated by 'createSlice()':
export const {setCurrencies, displayCurrency} = currenciesSlice.actions;

// Export reducer generated by 'createSlice()':
export default currenciesSlice.reducer;
