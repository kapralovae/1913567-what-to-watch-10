import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { FilmProcess } from '../../types/state';
import { addComment, fetchAloneFilmAction, fetchChangeStatusFavoriteFilmAction, fetchComments, fetchFavoriteFilmAction, fetchFilmsAction, fetchPromoFilmAction, fetchSimilarFilmAction } from '../api-actions';

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
  similarFilms: [],
  favoriteFilms: [],
  comments: [],
  disableButton: false,
  promoFilm: {
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
      })
      .addCase(fetchSimilarFilmAction.fulfilled, (state, action) => {
        state.similarFilms = action.payload;
        state.isDataLoaded = false;
      })
      .addCase(fetchSimilarFilmAction.pending, (state) => {
        state.isDataLoaded = true;
      })
      .addCase(fetchFavoriteFilmAction.fulfilled, (state, action) => {
        state.favoriteFilms = action.payload;
        state.isDataLoaded = false;
      })
      .addCase(fetchPromoFilmAction.fulfilled, (state, action) => {
        state.promoFilm = action.payload;
      })
      .addCase(fetchChangeStatusFavoriteFilmAction.fulfilled, (state, action) => {
        state.film.isFavorite = action.payload.isFavorite;
        state.disableButton = false;
      })
      .addCase(fetchChangeStatusFavoriteFilmAction.pending, (state) => {
        state.disableButton = true;
      })
      .addCase(addComment.fulfilled, (state) => {
        state.isDataLoaded = false;
      })
      .addCase(addComment.pending, (state) => {
        state.isDataLoaded = true;
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.isDataLoaded = false;
      })
      .addCase(fetchComments.pending, (state) => {
        state.isDataLoaded = true;
      });
  },
});
