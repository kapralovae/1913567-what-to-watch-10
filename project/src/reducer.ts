import { createReducer } from '@reduxjs/toolkit';
import { films } from './mocks/films';
import { chengeGenreAction, getFilmsWithGenreAction } from './action';

const initialState = {
  genre: 'All genres',
  films: films,
};

const filterFromGenre = createReducer(initialState, (builder) => {
  builder
    .addCase(chengeGenreAction, (state) => {
      state.genre = '';
    })
    .addCase(getFilmsWithGenreAction, (state) => {
      state.films = films;
    });
});

export {filterFromGenre};
