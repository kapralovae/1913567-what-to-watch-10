import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, COUNT_RENDER_FILMS } from '../../const';
import { FilmData } from '../../types/state';

const initialState : FilmData = {
  genre: 'All genres',
  films: [],
  filmsFilteredGenre: [],
  isRenderShowMoreButton: false,
  countRenderFilms: 8,
  filmsForRender: [],
  error: null,
};

export const filmData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    chengeGenreAction: (state, action) => {
      state.genre = action.payload;
    },
    getFilmsWithGenreAction: (state) => {
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
    },
    getMoreFilms: (state) => {
      const newRenderedMovieCount = Math.max(state.countRenderFilms, state.countRenderFilms + COUNT_RENDER_FILMS);
      state.filmsForRender = state.filmsFilteredGenre.slice(0, newRenderedMovieCount);
      state.countRenderFilms = newRenderedMovieCount;
      const filmsCount = state.filmsFilteredGenre.length;
      if (filmsCount > state.countRenderFilms) {
        state.isRenderShowMoreButton = true;
      } else {
        state.isRenderShowMoreButton = false;
      }
    },
    loadFilms: (state, action) => {
      state.films = action.payload;
      state.filmsFilteredGenre = state.films;
      state.filmsForRender = state.films.slice(0, COUNT_RENDER_FILMS);
      if (state.films.length > COUNT_RENDER_FILMS) {
        state.isRenderShowMoreButton = true;
      } else {
        state.isRenderShowMoreButton = false;
      }
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    resetFilterGenreAction: (state) => {
      state.genre = 'All genres';
    },
  },

});

export const {chengeGenreAction, getFilmsWithGenreAction, getMoreFilms, loadFilms, setError, resetFilterGenreAction} = filmData.actions;
