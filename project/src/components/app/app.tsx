import {Route, BrowserRouter, Routes, Link} from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import MainPage from '../../pages/main-page/mainPage';
import AddReview from '../../pages/add-review/addReview';
import MoviePage from '../../pages/movie-page/moviePage';
import MyList from '../../pages/my-list/myList';
import Player from '../../pages/player/player';
import SignIn from '../../pages/sign-in/signIn';
import { Fragment } from 'react';
import PrivateRoute from '../private-route/privateRoute';
import { Films } from '../../types/film';

type AppProps = {
  nameMainFilm: string;
  genreMainFilm: string;
  dateMainFilm: number;
  films: Films;
}

function App({nameMainFilm, genreMainFilm, dateMainFilm, films}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element =
            {
              <MainPage
                nameMainFilm={nameMainFilm}
                genreMainFilm={genreMainFilm}
                dateMainFilm={dateMainFilm}
                films={films}
              />
            }
        />
        <Route
          path='/films/:id'
          element = {<MoviePage films={films}/>}
        />
        <Route
          path='/films/:id/review'
          element = {<AddReview films={films} />}
        />
        <Route
          path={AppRoute.MyList}
          element = {
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
            >

              <MyList films={films}/>
            </PrivateRoute>
          }
        />
        <Route
          path='/player/:id'
          element = {<Player films={films}/>}
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
