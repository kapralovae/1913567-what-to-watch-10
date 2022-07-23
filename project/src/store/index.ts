import { configureStore } from '@reduxjs/toolkit';
import { filterFromGenre } from '../reducer';

export const store = configureStore({
  reducer: filterFromGenre,
});
