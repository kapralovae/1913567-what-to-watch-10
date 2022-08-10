import { useState } from 'react';
import MoviePageDetails from '../movie-page-details/movie-page-details';
import { MoviePageOverview } from '../movie-page-overview/movie-page-overview';
import { MoviePageReviews } from '../movie-page-reviews/movie-page-reviews';
import { NavTabs } from '../nav-tabs/nav-tabs';

type PageTabsType = {
  director: string | undefined;
  runTime: number | undefined;
  genre: string | undefined;
  released: number | undefined;
  starring: string[] | undefined;
  rating: number | undefined;
  description: string | undefined;
  scoresCount: number | undefined;
  id: number | undefined;
}

function Tabs ({director, runTime, genre, released, starring, rating, description, scoresCount, id}: PageTabsType) {
  const [navLink, setNavLink] = useState('Overview');

  // const clickHandler = (evt: React.MouseEvent<HTMLLIElement>) => {
  //   evt.preventDefault();
  //   const dataLink = evt.currentTarget.getAttribute('data-link');
  //   setNavLink(dataLink);
  // };

  return (
    <div className="film-card__desc">
      <NavTabs
        id={id}
        navLink={navLink}
        clickHandler={(evt: React.MouseEvent<HTMLLIElement>) => {
          evt.preventDefault();
          const dataLink = evt.currentTarget.getAttribute('data-link');
          setNavLink(String(dataLink));
        }}
      />
      {navLink === 'Overview' ?
        <MoviePageOverview
          director={director}
          rating={rating}
          description={description}
          scoresCount={scoresCount}
          starring={starring}
        /> : null}

      {navLink === 'Details' ?
        <MoviePageDetails
          director={director}
          runTime={runTime}
          genre={genre}
          released={released}
          starring={starring}
        /> : null}

      {navLink === 'Reviews' ?
        <MoviePageReviews/> : null}

    </div>
  );
}

export {Tabs};
