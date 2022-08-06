import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { FilmProcess } from '../../types/state';
import { fetchFilmsAction } from '../api-actions';

const initialState: FilmProcess = {
  films: [],
  isDataLoaded: false,
};

export const filmProcess = createSlice({
  name: NameSpace.Process,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFilmsAction.fulfilled, (state, action) => {
        state.films = action.payload;
        state.isDataLoaded = false;
      })
      .addCase(fetchFilmsAction.pending, (state) => {
        state.isDataLoaded = true;
      });
  },
});
