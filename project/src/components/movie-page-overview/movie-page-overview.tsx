type PageOverviewType = {
  director: string | undefined;
  rating: number | undefined;
  description: string | undefined;
  scoresCount: number | undefined;
  starring: string[] | undefined;
}

function MoviePageOverview ({director, rating, description, scoresCount, starring}: PageOverviewType) {
  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{rating}</span>
          <span className="film-rating__count">{scoresCount}</span>
        </p>
      </div>
      <div className="film-card__text">
        <p>{description}</p>

        <p className="film-card__director"><strong>{director}</strong></p>

        <p className="film-card__starring"><strong>{starring}</strong></p>
      </div>
    </>
  );
}

export {MoviePageOverview};
