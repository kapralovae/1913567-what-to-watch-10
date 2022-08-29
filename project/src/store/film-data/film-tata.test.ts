import { COUNT_RENDER_FILMS, COUNT_RENDER_MORE_FILMS } from '../../const';
import { serverFilms } from '../../mock';
import { chengeGenreAction, filmData, getFilmsWithGenreAction, getMoreFilms, loadFilms, resetFilterGenreAction, setError } from './film-data';

describe('reducer: filmData', () => {
  it('without parameters return initial state', () => {
    expect(filmData.reducer(void 0, {type: 'UNKNOWN_ACTION'})).toEqual({
      genre: 'All genres',
      films: [],
      filmsFilteredGenre: [],
      isRenderShowMoreButton: false,
      countRenderFilms: 8,
      filmsForRender: [],
      error: null,
    });
  });

  it('change genre film from filter', () => {
    const state = {
      genre: 'All genres',
      films: [],
      filmsFilteredGenre: [],
      isRenderShowMoreButton: false,
      countRenderFilms: 8,
      filmsForRender: [],
      error: null,
    };
    expect(filmData.reducer(state, chengeGenreAction('Crime'))).toEqual(
      {
        genre: 'Crime',
        films: [],
        filmsFilteredGenre: [],
        isRenderShowMoreButton: false,
        countRenderFilms: 8,
        filmsForRender: [],
        error: null,
      }
    );
  });

  it('Get films after filtering', () => {
    const stateFirst = {
      genre: 'All genres',
      films: serverFilms,
      filmsFilteredGenre: [],
      isRenderShowMoreButton: false,
      countRenderFilms: 8,
      filmsForRender: [],
      error: null,
    };

    const stateSecond = {
      genre: 'Crime',
      films: serverFilms,
      filmsFilteredGenre: [],
      isRenderShowMoreButton: false,
      countRenderFilms: 8,
      filmsForRender: [],
      error: null,
    };

    expect(filmData.reducer(stateFirst, getFilmsWithGenreAction())).toEqual(
      {
        genre: 'All genres',
        films: serverFilms,
        filmsFilteredGenre: serverFilms,
        isRenderShowMoreButton: true,
        countRenderFilms: 8,
        filmsForRender: stateFirst.films.slice(0, COUNT_RENDER_FILMS),
        error: null,
      }
    );
    expect(filmData.reducer(stateSecond, getFilmsWithGenreAction())).toEqual(
      {
        genre: 'Crime',
        films: serverFilms,
        filmsFilteredGenre: stateSecond.films.filter((film) => film.genre === stateSecond.genre),
        isRenderShowMoreButton: false,
        countRenderFilms: 8,
        filmsForRender: stateSecond.films.filter((film) => film.genre === stateSecond.genre).slice(0, COUNT_RENDER_FILMS),
        error: null,
      }
    );
  });

  it('Get more films', () => {
    const state = {
      genre: 'All genres',
      films: serverFilms,
      filmsFilteredGenre: serverFilms,
      isRenderShowMoreButton: false,
      countRenderFilms: 8,
      filmsForRender: serverFilms.slice(0,COUNT_RENDER_FILMS),
      error: null,
    };

    expect(filmData.reducer(state, getMoreFilms())).toEqual(
      {
        genre: 'All genres',
        films: serverFilms,
        filmsFilteredGenre: serverFilms,
        isRenderShowMoreButton: true,
        countRenderFilms: COUNT_RENDER_MORE_FILMS,
        filmsForRender: serverFilms.slice(0, COUNT_RENDER_MORE_FILMS),
        error: null,
      }
    );
  });

  it('Load Films', () => {
    const state = {
      genre: 'All genres',
      films: [],
      filmsFilteredGenre: [],
      isRenderShowMoreButton: false,
      countRenderFilms: 8,
      filmsForRender: [],
      error: null,
    };

    expect(filmData.reducer(state, loadFilms(serverFilms))).toEqual(
      {
        genre: 'All genres',
        films: serverFilms,
        filmsFilteredGenre: serverFilms,
        isRenderShowMoreButton: true,
        countRenderFilms: 8,
        filmsForRender: serverFilms.slice(0, COUNT_RENDER_FILMS),
        error: null,
      }
    );
  });

  it('setError', () => {
    const state = {
      genre: 'All genres',
      films: [],
      filmsFilteredGenre: [],
      isRenderShowMoreButton: false,
      countRenderFilms: 8,
      filmsForRender: [],
      error: null,
    };

    expect(filmData.reducer(state, setError('Warning, error'))).toEqual(
      {
        genre: 'All genres',
        films: [],
        filmsFilteredGenre: [],
        isRenderShowMoreButton: false,
        countRenderFilms: 8,
        filmsForRender: [],
        error: 'Warning, error',
      }
    );
  });

  it('reset genre filter', () => {
    const state = {
      genre: 'Action',
      films: [],
      filmsFilteredGenre: [],
      isRenderShowMoreButton: false,
      countRenderFilms: 8,
      filmsForRender: [],
      error: null,
    };

    expect(filmData.reducer(state, resetFilterGenreAction())).toEqual(
      {
        genre: 'All genres',
        films: [],
        filmsFilteredGenre: [],
        isRenderShowMoreButton: false,
        countRenderFilms: 8,
        filmsForRender: [],
        error: null,
      }
    );
  });
});
