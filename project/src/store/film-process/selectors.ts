import { NameSpace } from '../../const';
import { Film, Films, ResponseComments } from '../../types/film';
import { State } from '../../types/state';

export const getFilmsFromServer = (state: State): Films => state[NameSpace.Process].films;
export const getAloneFilmFromServer = (state: State): Film => state[NameSpace.Process].film;
export const getIsDataLoader = (state: State): boolean => state[NameSpace.Process].isDataLoaded;
export const getSimilarFilms = (state: State): Films => state[NameSpace.Process].similarFilms;
export const getComments = (state: State): ResponseComments => state[NameSpace.Process].comments;
export const getFavoriteFilms = (state: State): Films => state[NameSpace.Process].favoriteFilms;
