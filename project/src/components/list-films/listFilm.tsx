import { useState } from 'react';
import { useAppSelector } from '../../hooks';
import { getFilmsForRender } from '../../store/film-data/selectors';
import CardFilm from '../card-film/card-film';
import { ShowMoreButton } from '../show-more-button/showMoreButton';


function ListFilms (): JSX.Element{
  const films = useAppSelector(getFilmsForRender);
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
      <ShowMoreButton />
    </>
  );
}

export default ListFilms;
