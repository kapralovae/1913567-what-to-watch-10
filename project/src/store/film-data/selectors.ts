import { NameSpace } from '../../const';
import { Films } from '../../types/film';
import { State } from '../../types/state';

export const getGenreAction = (state: State): string => state[NameSpace.Data].genre;
export const getFilmsWithGenreAction = (state: State): Films => state[NameSpace.Data].filmsFilteredGenre;
export const getIsRenderShowMoreButton = (state: State): boolean => state[NameSpace.Data].isRenderShowMoreButton;
export const getFilmsForRender = (state: State): Films => state[NameSpace.Data].filmsForRender;
export const getError = (state: State): string | null => state[NameSpace.Data].error;
