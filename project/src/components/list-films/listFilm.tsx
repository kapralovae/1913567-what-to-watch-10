import { useState } from 'react';
import { useAppSelector } from '../../hooks';
import CardFilm from '../card-film/card-film';


function ListFilms (): JSX.Element{
  const films = useAppSelector((state) => state.films);
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
    <div onMouseOver={mouseOverHandler}
      className='catalog__films-list'
    >
      {films.map((film) => <CardFilm item={film} key={film.src}></CardFilm>)}
    </div>
  );
}

export default ListFilms;
