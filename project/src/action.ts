import { createAction } from '@reduxjs/toolkit';

export const Action = {
  CHANGE_GANRE: 'CHENGE_GENRE',
  GET_FILMS_WITH_GENRE: 'GET_FILMS_WITH_GENRE',
};

export const chengeGenreAction = createAction(Action.CHANGE_GANRE);
export const getFilmsWithGenreAction = createAction(Action.GET_FILMS_WITH_GENRE);
