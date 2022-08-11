import { useAppSelector } from '../../hooks';
import { getAllFilms } from '../../store/film-data/selectors';
import CardFilm from '../card-film/card-film';

type MoreLikeType = {
  genre: string | undefined;
  id: number | undefined;
}
function MoreLikeThisFilms ({genre, id}: MoreLikeType) {
  const films = useAppSelector(getAllFilms);
  const moreLikesFilms = films.filter((film) => film.genre === genre && film.id !== id);
  const renderLikesFilm = moreLikesFilms.slice(0,4);

  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>

      <div className="catalog__films-list">
        {renderLikesFilm.map((film) => <CardFilm item={film} key={film.posterImage}></CardFilm>)}
      </div>
    </section>
  );
}

export {MoreLikeThisFilms};
