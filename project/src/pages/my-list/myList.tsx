import { useEffect } from 'react';
import { Footer } from '../../components/footer/footer';
import ListFilms from '../../components/list-films/listFilm';
import Logo from '../../components/logo/logo';
import { useAppDisptach, useAppSelector } from '../../hooks';
import { fetchFavoriteFilmAction } from '../../store/api-actions';
import { getFavoriteFilms } from '../../store/film-process/selectors';

function MyList() {
  const dispatch = useAppDisptach();
  const films = useAppSelector(getFavoriteFilms);
  useEffect(() => {
    dispatch(fetchFavoriteFilmAction());
  },[]);
  console.log(films);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{films.length}</span></h1>
        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </li>
          <li className="user-block__item">
            <a href="/" className="user-block__link">Sign out</a>
          </li>
        </ul>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <ListFilms />
      </section>

      <Footer />
    </div>
  );
}

export default MyList;
