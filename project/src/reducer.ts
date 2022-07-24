import { createReducer } from '@reduxjs/toolkit';
import { films } from './mocks/films';
import { chengeGenreAction, getFilmsWithGenreAction, resetFilterGenreAction } from './action';

const initialState = {
  genre: 'All genres',
  films: films,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(chengeGenreAction, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(getFilmsWithGenreAction, (state) => {
      if (state.genre === 'All genres') {
        state.films = films;
      } else {
        state.films = films.filter((film) => film.genre === state.genre);
      }
    })
    .addCase(resetFilterGenreAction, (state) => {
      state.genre = 'All genres';
      state.films = films;
    });
});

export {reducer};
