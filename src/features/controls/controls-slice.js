import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  search: '',
  region: '',
};

const controlsSlice = createSlice({
  name: 'controls',
  initialState,
  reducers: {
    setSearch(state, {payload}) {
      state.search = payload;
    },
    setRegion(state, {payload}) {
      state.region = payload;
    },
    clearControls() {
      return initialState;
    },
  },
});

export const {setSearch, setRegion, clearControls} = controlsSlice.actions;
export const controlsReducer = controlsSlice.reducer;

// Selectors
export const selectSearch = state => state.controls.search;
export const selectRegion = state => state.controls.region;
export const selectAllControls = state => state.controls;