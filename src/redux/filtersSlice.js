import { createSlice } from '@reduxjs/toolkit';

const initialFiltersState = '';

const filtersSlice = createSlice({
  name: 'filter',
  initialState: initialFiltersState,
  reducers: {
    filterName(state, action) {
      return (state = action.payload);
    },
  },
});

export const { filterName } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
