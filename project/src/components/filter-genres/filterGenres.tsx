import { NavLink } from 'react-router-dom';


function FilterGenres () {

  return (
    <ul className="catalog__genres-list">
      <li className="catalog__genres-item catalog__genres-item--active">
        <NavLink to="/" className="catalog__genres-link">All genres</NavLink>
      </li>
      <li className="catalog__genres-item">
        <NavLink to="/" className="catalog__genres-link">Comedies</NavLink>
      </li>
      <li className="catalog__genres-item">
        <NavLink to="/" className="catalog__genres-link">Crime</NavLink>
      </li>
      <li className="catalog__genres-item">
        <NavLink to="/" className="catalog__genres-link">Documentary</NavLink>
      </li>
      <li className="catalog__genres-item">
        <NavLink to="/" className="catalog__genres-link">Dramas</NavLink>
      </li>
      <li className="catalog__genres-item">
        <NavLink to="/" className="catalog__genres-link">Horror</NavLink>
      </li>
      <li className="catalog__genres-item">
        <NavLink to="/" className="catalog__genres-link">Kids & Family</NavLink>
      </li>
      <li className="catalog__genres-item">
        <NavLink to="/" className="catalog__genres-link">Romance</NavLink>
      </li>
      <li className="catalog__genres-item">
        <NavLink to="/" className="catalog__genres-link">Sci-Fi</NavLink>
      </li>
      <li className="catalog__genres-item">
        <NavLink to="/" className="catalog__genres-link">Thrillers</NavLink>
      </li>
    </ul>
  );
}

export default FilterGenres;
