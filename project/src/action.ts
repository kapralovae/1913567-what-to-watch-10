import { createAction } from '@reduxjs/toolkit';

export const Action = {
  CHANGE_GANRE: 'CHENGE_GENRE',
  GET_FILMS_WITH_GENRE: 'GET_FILMS_WITH_GENRE',
  RESET_FILTER_GENRE:'RESET_FILTER_GENRE',
  GET_MORE_FILMS: 'RENDER_SHOW_MORE_BUTTON',
};

export const chengeGenreAction = createAction(Action.CHANGE_GANRE, (value)=> ({
  payload:value,
}));
export const getFilmsWithGenreAction = createAction(Action.GET_FILMS_WITH_GENRE);
export const resetFilterGenreAction = createAction(Action.RESET_FILTER_GENRE);
export const getMoreFilms = createAction(Action.GET_MORE_FILMS);
