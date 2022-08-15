import {Route, BrowserRouter, Routes, Link} from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import MainPage from '../../pages/main-page/mainPage';
import AddReview from '../../pages/add-review/addReview';
import MoviePage from '../../pages/movie-page/moviePage';
import MyList from '../../pages/my-list/myList';
import Player from '../../pages/player/player';
import SignIn from '../../pages/sign-in/signIn';
import { Fragment, useEffect } from 'react';
import PrivateRoute from '../private-route/privateRoute';
import { useAppDisptach, useAppSelector } from '../../hooks';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { getFilmsFromServer, getIsDataLoader } from '../../store/film-process/selectors';
import { loadFilms } from '../../store/film-data/film-data';

type AppProps = {
  nameMainFilm: string;
  genreMainFilm: string;
  dateMainFilm: number;
}

function App({nameMainFilm, genreMainFilm, dateMainFilm}: AppProps): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isDataLoaded = useAppSelector(getIsDataLoader);
  const filmsFromServer = useAppSelector(getFilmsFromServer);
  const dispatch = useAppDisptach();
  useEffect(() => {
    dispatch(loadFilms(filmsFromServer));
  }, [dispatch, filmsFromServer]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={
            (authorizationStatus === AuthorizationStatus.Unknown) || isDataLoaded ? (
              <LoadingScreen />
            ) : (
              <MainPage
                nameMainFilm={nameMainFilm}
                genreMainFilm={genreMainFilm}
                dateMainFilm={dateMainFilm}
              />
            )
          }
        />
        <Route
          path='/films/:id'
          element = {<MoviePage />}
        />
        <Route
          path='/films/:id/review'
          element = {<AddReview />}
        />
        <Route
          path={AppRoute.MyList}
          element = {
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
            >

              <MyList />
            </PrivateRoute>
          }
        />
        <Route
          path='/player/:id'
          element = {<Player />}
        />
        <Route
          path={AppRoute.SignIn}
          element = {<SignIn />}
        />

        <Route path='*' element={
          <Fragment>
            <h1>
              Error 404 – Page not found!
            </h1>
            <Link to={AppRoute.Root}>
              Go main page
            </Link>
          </Fragment>
        }
        >

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
