import { serverFilms } from '../../mock';
import { FilmProcess } from '../../types/state';
import { fetchFilmsAction } from '../api-actions';
import { filmProcess } from './film-process';

describe('reducer: filmProcess', () => {
  let state: FilmProcess;

  beforeEach(() => {
    state = {
      films: [],
      isDataLoaded: false,
      film: {
        id: 1,
        name: '',
        posterImage: '',
        previewImage: '',
        backgroundImage: '',
        backgroundColor: '',
        videoLink: '',
        previewVideoLink: '',
        description: '',
        rating: 1,
        scoresCount: 1,
        director: '',
        starring: [''],
        runTime: 1,
        genre: '',
        released: 1,
        isFavorite: false,
      },
      similarFilms: [],
      favoriteFilms: [],
      comments: [],
      disableButton: false,
      promoFilm: {
        id: 3,
        name: '',
        posterImage: '',
        previewImage: '',
        backgroundImage: '',
        backgroundColor: '',
        videoLink: '',
        previewVideoLink: '',
        description: '',
        rating: 1,
        scoresCount: 1,
        director: '',
        starring: [''],
        runTime: 1,
        genre: '',
        released: 1,
        isFavorite: false,
      },
    };
  });

  describe('fetchFilmsAction', () => {
    it('fetchFilmsAction fullfield', () => {
      expect(filmProcess.reducer(state, {type: fetchFilmsAction.fulfilled.type, payload: serverFilms}))
        .toEqual({
          films: serverFilms,
          isDataLoaded: false,
          film: {
            id: 1,
            name: '',
            posterImage: '',
            previewImage: '',
            backgroundImage: '',
            backgroundColor: '',
            videoLink: '',
            previewVideoLink: '',
            description: '',
            rating: 1,
            scoresCount: 1,
            director: '',
            starring: [''],
            runTime: 1,
            genre: '',
            released: 1,
            isFavorite: false,
          },
          similarFilms: [],
          favoriteFilms: [],
          comments: [],
          disableButton: false,
          promoFilm: {
            id: 3,
            name: '',
            posterImage: '',
            previewImage: '',
            backgroundImage: '',
            backgroundColor: '',
            videoLink: '',
            previewVideoLink: '',
            description: '',
            rating: 1,
            scoresCount: 1,
            director: '',
            starring: [''],
            runTime: 1,
            genre: '',
            released: 1,
            isFavorite: false,
          },
        });
    });

    it('fetchFilmsAction pending', () => {
      expect(filmProcess.reducer(state, {type: fetchFilmsAction.pending.type}))
        .toEqual(
          {
            films: [],
            isDataLoaded: true,
            film: {
              id: 1,
              name: '',
              posterImage: '',
              previewImage: '',
              backgroundImage: '',
              backgroundColor: '',
              videoLink: '',
              previewVideoLink: '',
              description: '',
              rating: 1,
              scoresCount: 1,
              director: '',
              starring: [''],
              runTime: 1,
              genre: '',
              released: 1,
              isFavorite: false,
            },
            similarFilms: [],
            favoriteFilms: [],
            comments: [],
            disableButton: false,
            promoFilm: {
              id: 3,
              name: '',
              posterImage: '',
              previewImage: '',
              backgroundImage: '',
              backgroundColor: '',
              videoLink: '',
              previewVideoLink: '',
              description: '',
              rating: 1,
              scoresCount: 1,
              director: '',
              starring: [''],
              runTime: 1,
              genre: '',
              released: 1,
              isFavorite: false,
            },
          }
        );
    });
  });
});
