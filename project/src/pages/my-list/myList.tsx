import { useEffect } from 'react';
import { AvatarLogin } from '../../components/avatar-login/avatar-login';
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

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{films.length}</span></h1>
        <AvatarLogin />
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
