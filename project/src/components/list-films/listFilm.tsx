import { useState } from 'react';
import { ListFilmsType } from '../../types/film';
import CardFilm from '../card-film/card-film';


function ListFilms ({films}: ListFilmsType): JSX.Element{

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
