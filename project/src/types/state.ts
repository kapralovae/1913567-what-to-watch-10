import { AuthorizationStatus } from '../const';
import { store } from '../store';
import { Film, Films, ResponseComments } from './film';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type UserProcess = {
  authorizationStatus: AuthorizationStatus,
};

export type FilmData = {
  genre: string;
  films: Films;
  filmsFilteredGenre: Films;
  isRenderShowMoreButton: boolean;
  countRenderFilms: number;
  filmsForRender: Films;
  error: string | null;
};

export type FilmProcess = {
  films: Films | undefined;
  isDataLoaded: boolean;
  film: Film;
  similarFilms: Films;
  favoriteFilms: Films;
  comments: ResponseComments;
  disableButton: boolean;
  promoFilm: Film;
};
