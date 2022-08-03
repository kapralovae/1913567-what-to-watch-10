import { Link } from 'react-router-dom';
import { useAppDisptach } from '../../hooks';
import { getFilmsWithGenreAction, resetFilterGenreAction } from '../../store/film-data/film-data';

function Footer() {
  const disptch = useAppDisptach();
  const clickHandler = (evt: React.MouseEvent<HTMLDivElement>) => {
    evt.preventDefault();
    disptch(resetFilterGenreAction());
    disptch(getFilmsWithGenreAction());
  };

  return (
    <footer className="page-footer">
      <div onClick={clickHandler} className="logo">
        <Link to="/" className="logo__link logo__link--light">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>

      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  );
}

export {Footer};
