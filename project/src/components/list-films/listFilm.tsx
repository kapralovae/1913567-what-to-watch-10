import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppSelector } from '../../hooks';
import { getFilmsForRender } from '../../store/film-data/selectors';
import { getFavoriteFilms } from '../../store/film-process/selectors';
import CardFilm from '../card-film/card-film';
import { ShowMoreButton } from '../show-more-button/showMoreButton';


function ListFilms (): JSX.Element{
  const filmsFavorite = useAppSelector(getFavoriteFilms);
  const allFilms = useAppSelector(getFilmsForRender);
  let films;
  if (useLocation().pathname === AppRoute.MyList) {
    films = filmsFavorite;
  } else {
    films = allFilms;
  }

  const [activeId, setActiveId] = useState({
    id: '',
  });

  const mouseOverHandler = (evt: React.MouseEvent<HTMLDivElement>) => {
    evt.preventDefault();
    const target = evt.target as HTMLDivElement;
    setActiveId({
      ...activeId,
      id: target.id,
    });
  };

  return (
    <>
      <div onMouseOver={mouseOverHandler}
        className='catalog__films-list'
      >
        {films.map((film) => <CardFilm item={film} key={film.id}></CardFilm>)}
      </div>
      <ShowMoreButton isMyListPage={films === filmsFavorite}/>
    </>
  );
}

export default ListFilms;
