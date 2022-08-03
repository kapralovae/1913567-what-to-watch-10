import { NameSpace } from '../../const';
import { Films } from '../../types/film';
import { State } from '../../types/state';

export const getFilmsFromServer = (state: State): Films => state[NameSpace.Process].films;
export const getIsDataLoader = (state: State): boolean => state[NameSpace.Process].isDataLoaded;
