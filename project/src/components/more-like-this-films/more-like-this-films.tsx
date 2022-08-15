import { useAppSelector } from '../../hooks';
import { getSimilarFilms } from '../../store/film-process/selectors';
import CardFilm from '../card-film/card-film';

function MoreLikeThisFilms () {
  const similarFilms = useAppSelector(getSimilarFilms);

  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>

      <div className="catalog__films-list">
        {similarFilms.slice(0,4).map((film) => <CardFilm item={film} key={film.posterImage}></CardFilm>)}
      </div>
    </section>
  );
}

export {MoreLikeThisFilms};
