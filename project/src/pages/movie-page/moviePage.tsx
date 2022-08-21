import { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Footer } from '../../components/footer/footer';
import Header from '../../components/header/header';
import { MoreLikeThisFilms } from '../../components/more-like-this-films/more-like-this-films';
import MylistButton from '../../components/mylist-button/mylist-button';
import { Tabs } from '../../components/tabs-film/tabsFilm';
import { AuthorizationStatus } from '../../const';
import { useAppDisptach, useAppSelector } from '../../hooks';
import { fetchAloneFilmAction, fetchSimilarFilmAction } from '../../store/api-actions';
import { getAloneFilmFromServer } from '../../store/film-process/selectors';
import { getAuthorizationStatus } from '../../store/user-process/selectors';

function MoviePage () {
  const dispatch = useAppDisptach();
  const navigate = useNavigate();
  const {id} = useParams();

  useEffect(() => {
    if (id) {
      dispatch(fetchAloneFilmAction(id));
      dispatch(fetchSimilarFilmAction(id));
    }
  }, [dispatch, id]);

  const film = useAppSelector(getAloneFilmFromServer);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const clickButtonPlayHandler = (evt: React.MouseEvent) => {
    evt.preventDefault();
    navigate(`/player/${film?.id}`);
  };

  return (
    <section>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film?.backgroundImage} alt="The Grand Budapest Hotel" />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header />

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film?.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film?.genre}</span>
                <span className="film-card__year">{film?.released}</span>
              </p>

              <div className="film-card__buttons">
                <button onClick={clickButtonPlayHandler} className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <MylistButton />
                {authorizationStatus === AuthorizationStatus.Auth ? <Link to={`/films/${film?.id}/review`} className="btn film-card__button">Add review</Link> : null}
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film?.posterImage} alt={`${film.name} poster`} width="218" height="327" />
            </div>

            <Tabs
              director={film?.director}
              runTime={film?.runTime}
              genre={film?.genre}
              released={film?.released}
              starring={film?.starring}
              rating={film?.rating}
              description={film?.description}
              scoresCount={film?.scoresCount}
              id={film?.id}
            />

          </div>
        </div>
      </section>

      <div className="page-content">
        <MoreLikeThisFilms />

        <Footer />
      </div>
    </section>
  );
}

export default MoviePage;

