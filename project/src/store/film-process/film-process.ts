import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { FilmProcess } from '../../types/state';
import { fetchAloneFilmAction, fetchFilmsAction } from '../api-actions';

const initialState: FilmProcess = {
  films: [],
  isDataLoaded: false,
  film: {
    id: 1,
    name: '',
    posterImage: '',
    previewImage: '',
    backgroundImage: '',
    backgroundColor: '',
    videoLink: '',
    previewVideoLink: '',
    description: '',
    rating: 1,
    scoresCount: 1,
    director: '',
    starring: [''],
    runTime: 1,
    genre: '',
    released: 1,
    isFavorite: false,
  },
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
      })
      .addCase(fetchAloneFilmAction.fulfilled, (state, action) => {
        state.film = action.payload;
        state.isDataLoaded = false;
      })
      .addCase(fetchAloneFilmAction.pending, (state) => {
        state.isDataLoaded = true;
      });
  },
});
