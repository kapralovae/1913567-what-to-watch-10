import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { store } from './store';
import { checkAuthAction, fetchFilmsAction } from './store/api-actions';

const Setting = {
  NAME_MAIN_FILMS: 'The Grand Budapest Hotel',
  GENRE_MAIN_FILM: 'Drama',
  DATE_MAIN_FILM: 2014,
};

store.dispatch(fetchFilmsAction());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);


root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        nameMainFilm={Setting.NAME_MAIN_FILMS}
        genreMainFilm={Setting.GENRE_MAIN_FILM}
        dateMainFilm={Setting.DATE_MAIN_FILM}
      />
    </Provider>
  </React.StrictMode>,
);
