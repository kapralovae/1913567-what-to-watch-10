type PageOverviewType = {
  director: string | undefined;
  rating: number | undefined;
  description: string | undefined;
  scoresCount: number | undefined;
  starring: string[] | undefined;
}

function MoviePageOverview ({director, rating, description, scoresCount, starring}: PageOverviewType) {
  const getDescriptionRating = (ratingLevel: number) => {
    if (ratingLevel && ratingLevel < 3) {
      return ('Bad');
    }
    if (ratingLevel && (ratingLevel >= 3 && ratingLevel < 5)) {
      return ('Normal');
    }
    if (ratingLevel && (ratingLevel >= 5 && ratingLevel < 8)) {
      return ('Good');
    }
    if (ratingLevel && (ratingLevel >= 8 && ratingLevel < 10)) {
      return ('Very good');
    }
    if (ratingLevel && ratingLevel === 10) {
      return ('Awesome');
    }
  };
  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{getDescriptionRating(rating ? rating : 0)}</span>
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
