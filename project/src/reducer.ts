import { createReducer } from '@reduxjs/toolkit';
import { chengeGenreAction, getFilmsWithGenreAction, resetFilterGenreAction, getMoreFilms, loadFilms, requireAuthorization, setError, setDataLoadedStatus } from './action';
import { Films } from './types/film';
import { AuthorizationStatus } from './const';

const COUNT_RENDER_FILMS = 8;

type InitialStateType = {
  genre: string,
  films: Films,
  filmsFilteredGenre: Films,
  isRenderShowMoreButton: boolean,
  countRenderFilms: number,
  filmsForRender: Films,
  authorizationStatus: string,
  error: string | null,
  isDataLoaded: boolean,
};
const initialState : InitialStateType = {
  genre: 'All genres',
  films: [],
  filmsFilteredGenre: [],
  isRenderShowMoreButton: false,
  countRenderFilms: 8,
  filmsForRender: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  isDataLoaded: false,
};


const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(chengeGenreAction, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(getFilmsWithGenreAction, (state) => {
      if (state.genre === 'All genres') {
        state.filmsFilteredGenre = state.films;
      } else {
        state.filmsFilteredGenre = state.films.filter((film) => film.genre === state.genre);
      }

      const filmsCount = state.filmsFilteredGenre.length;
      state.filmsForRender = state.filmsFilteredGenre.slice(0, COUNT_RENDER_FILMS);
      if (filmsCount > COUNT_RENDER_FILMS) {
        state.isRenderShowMoreButton = true;
      } else {
        state.isRenderShowMoreButton = false;
      }
    })
    .addCase(getMoreFilms, (state) => {
      const newRenderedMovieCount = Math.max(state.countRenderFilms, state.countRenderFilms + COUNT_RENDER_FILMS);
      state.filmsForRender = state.filmsFilteredGenre.slice(0, newRenderedMovieCount);
      state.countRenderFilms = newRenderedMovieCount;
      const filmsCount = state.filmsFilteredGenre.length;
      if (filmsCount > state.countRenderFilms) {
        state.isRenderShowMoreButton = true;
      } else {
        state.isRenderShowMoreButton = false;
      }
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
      state.filmsFilteredGenre = state.films;
      state.filmsForRender = state.films.slice(0, COUNT_RENDER_FILMS);
      if (state.films.length > COUNT_RENDER_FILMS) {
        state.isRenderShowMoreButton = true;
      } else {
        state.isRenderShowMoreButton = false;
      }
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    })
    .addCase(resetFilterGenreAction, (state) => {
      state.genre = 'All genres';
    });
});

export {reducer};
