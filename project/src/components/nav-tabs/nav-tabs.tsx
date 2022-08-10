// import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

type NavTabsType = {
  id: number | undefined;
  navLink: string;
  clickHandler: (evt: React.MouseEvent<HTMLLIElement>)=>void;
}

function NavTabs ({id, navLink, clickHandler}: NavTabsType) {
  // const [navLink, setNavLink] = useState('Overview');

  // const clickHandler = (evt: React.MouseEvent<HTMLLIElement>) => {
  //   evt.preventDefault();
  //   const dataLink = evt.currentTarget.getAttribute('data-link');
  //   setNavLink(String(dataLink));
  // };

  return(
    <nav className="film-nav film-card__nav">
      <ul className="film-nav__list">
        <li onClick={clickHandler} data-link="Overview" className={navLink === 'Overview' ? 'film-nav__item film-nav__item--active' : 'film-nav__item'}>
          <Link to={`${AppRoute.Films}/${id}`} className="film-nav__link">Overview</Link>
        </li>
        <li onClick={clickHandler} data-link="Details" className={navLink === 'Details' ? 'film-nav__item film-nav__item--active' : 'film-nav__item'}>
          <Link to={`${AppRoute.Films}/${id}`} className="film-nav__link">Details</Link>
        </li>
        <li onClick={clickHandler} data-link="Reviews" className={navLink === 'Reviews' ? 'film-nav__item film-nav__item--active' : 'film-nav__item'}>
          <Link to={`${AppRoute.Films}/${id}`} className="film-nav__link">Reviews</Link>
        </li>
      </ul>
    </nav>
  );
}

export {NavTabs};
