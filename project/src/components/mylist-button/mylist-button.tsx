import { memo, useEffect } from 'react';
import { useAppDisptach, useAppSelector } from '../../hooks';
import { fetchChangeStatusFavoriteFilmAction, fetchFavoriteFilmAction } from '../../store/api-actions';
import { getAloneFilmFromServer, getDisableButton, getFavoriteFilms } from '../../store/film-process/selectors';

function MyListButton () {
  const dispatch = useAppDisptach();
  const film = useAppSelector(getAloneFilmFromServer);
  const isDisabled = useAppSelector(getDisableButton);

  // const fav = film.isFavorite;

  const clickHandler = () => {
    dispatch(fetchChangeStatusFavoriteFilmAction({filmId: Number(film.id), status: Number(!film.isFavorite)}));
    // dispatch(fetchAloneFilmAction(String(film.id)));
    console.log('nextFavoriteState', !film.isFavorite);
    // dispatch(fetchFavoriteFilmAction());
  };
  useEffect(() => {
    dispatch(fetchFavoriteFilmAction());
    console.log('currentFavoriteState', film.isFavorite);
  },[]);
  const filmsFavorite = useAppSelector(getFavoriteFilms);

  /*
  1) Момоизация компонента + колбека
  2) Выяснить что возвращает
  3) Внутри fetchChangeStatusFavoriteFilmAction подменить старый фильм новым
  4) В редусере подменить фильм isFavorite
   */

  return(
    <button onClick={clickHandler} className="btn btn--list film-card__button" type="button" disabled={isDisabled}>
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref={film.isFavorite ? '#in-list' : '#add'}></use>
      </svg>
      <span>My list</span>
      <span className="film-card__count">{filmsFavorite.length}</span>
    </button>
  );
}

export default memo(MyListButton);
