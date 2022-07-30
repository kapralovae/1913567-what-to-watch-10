import React from 'react';
import { Link } from 'react-router-dom';
import { chengeGenreAction, getFilmsWithGenreAction } from '../../action';
import { useAppDisptach, useAppSelector } from '../../hooks';
import ListFilms from '../list-films/listFilm';

function FilterGenres () {
  const elementLi = useAppSelector((state) => state.genre);
  const dispatch = useAppDisptach();

  const clickHandler = (evt: React.MouseEvent<HTMLLIElement>) => {
    evt.preventDefault();
    const dataAttribute = evt.currentTarget.getAttribute('data-genre');
    dispatch(chengeGenreAction(String(dataAttribute)));
    dispatch(getFilmsWithGenreAction());
  };

  return (
    <>
      <ul className="catalog__genres-list">
        <li onClick={clickHandler} data-genre='All genres' className={elementLi === 'All genres' ? 'catalog__genres-item catalog__genres-item--active' : 'catalog__genres-item'}>
          <Link to="/" className="catalog__genres-link">All genres</Link>
        </li>
        <li onClick={clickHandler} data-genre='Comedy' className={elementLi === 'Comedy' ? 'catalog__genres-item catalog__genres-item--active' : 'catalog__genres-item'}>
          <Link to="/" className="catalog__genres-link">Comedies</Link>
        </li>
        <li onClick={clickHandler} data-genre='Crime' className={elementLi === 'Crime' ? 'catalog__genres-item catalog__genres-item--active' : 'catalog__genres-item'}>
          <Link to="/" className="catalog__genres-link">Crime</Link>
        </li>
        <li onClick={clickHandler} data-genre='Adventure' className={elementLi === 'Adventure' ? 'catalog__genres-item catalog__genres-item--active' : 'catalog__genres-item'}>
          <Link to="/" className="catalog__genres-link">Adventures</Link>
        </li>
        <li onClick={clickHandler} data-genre='Drama' className={elementLi === 'Drama' ? 'catalog__genres-item catalog__genres-item--active' : 'catalog__genres-item'}>
          <Link to="/" className="catalog__genres-link">Dramas</Link>
        </li>
        <li onClick={clickHandler} data-genre='Action' className={elementLi === 'Action' ? 'catalog__genres-item catalog__genres-item--active' : 'catalog__genres-item'}>
          <Link to="/" className="catalog__genres-link">Action</Link>
        </li>
        <li onClick={clickHandler} data-genre='Fantasy' className={elementLi === 'Fantasy' ? 'catalog__genres-item catalog__genres-item--active' : 'catalog__genres-item'}>
          <Link to="/" className="catalog__genres-link">Fantasy</Link>
        </li>
        <li onClick={clickHandler} data-genre='Thriller' className={elementLi === 'Thriller' ? 'catalog__genres-item catalog__genres-item--active' : 'catalog__genres-item'}>
          <Link to="/" className="catalog__genres-link">Thrillers</Link>
        </li>
      </ul>
      <ListFilms />
    </>
  );
}

export default FilterGenres;
