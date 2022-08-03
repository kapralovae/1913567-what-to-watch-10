import { createAction } from '@reduxjs/toolkit';
import { Films } from './types/film';

export const Action = {
  CHANGE_GANRE: 'CHENGE_GENRE',
  GET_FILMS_WITH_GENRE: 'GET_FILMS_WITH_GENRE',
  RESET_FILTER_GENRE:'RESET_FILTER_GENRE',
  GET_MORE_FILMS: 'RENDER_SHOW_MORE_BUTTON',
  LOAD_FILMS: 'LOAD_FILMS',
  SET_ERROR: 'SET_ERROR',
};

export const chengeGenreAction = createAction(Action.CHANGE_GANRE, (value)=> ({
  payload:value,
}));
export const getFilmsWithGenreAction = createAction(Action.GET_FILMS_WITH_GENRE);
export const resetFilterGenreAction = createAction(Action.RESET_FILTER_GENRE);
export const getMoreFilms = createAction(Action.GET_MORE_FILMS);
export const loadFilms = createAction<Films>(Action.LOAD_FILMS);
export const setError = createAction<string | null>(Action.SET_ERROR);
export const setDataLoadedStatus = createAction<boolean>('setDataLoadedStatus');
