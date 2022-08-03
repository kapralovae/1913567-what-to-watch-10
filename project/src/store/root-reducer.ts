import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../const';
import { filmData } from './film-data/film-data';
import { filmProcess } from './film-process/film-process';
import { userProcess } from './user-process/user-process';

export const rootReducer = combineReducers({
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Process]: filmProcess.reducer,
  [NameSpace.Data]: filmData.reducer,
});
