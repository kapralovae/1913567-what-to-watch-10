import { memo, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDisptach, useAppSelector } from '../../hooks';
import { fetchChangeStatusFavoriteFilmAction, fetchFavoriteFilmAction } from '../../store/api-actions';
import { getAloneFilmFromServer, getDisableButton, getFavoriteFilms, getPromoFilm } from '../../store/film-process/selectors';
import { getAuthorizationStatus } from '../../store/user-process/selectors';

function MyListButton () {
  const dispatch = useAppDisptach();
  let film = useAppSelector(getAloneFilmFromServer);
  const isDisabled = useAppSelector(getDisableButton);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const promoFilm = useAppSelector(getPromoFilm);

  if (useLocation().pathname !== `${AppRoute.Films}/${film.id}`) {
    film = promoFilm;
  }

  const clickHandler = () => {
    dispatch(fetchChangeStatusFavoriteFilmAction({filmId: Number(film.id), status: Number(!film.isFavorite)}));
  };
  useEffect(() => {
    dispatch(fetchFavoriteFilmAction());
  },[]);
  const filmsFavorite = useAppSelector(getFavoriteFilms);

  return(
    <button onClick={clickHandler} className="btn btn--list film-card__button" type="button" disabled={isDisabled && authorizationStatus === AuthorizationStatus.Auth}>
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref={film.isFavorite ? '#in-list' : '#add'}></use>
      </svg>
      <span>My list</span>
      <span className="film-card__count">{filmsFavorite.length}</span>
    </button>
  );
}

export default memo(MyListButton);
