import { Link } from 'react-router-dom';
import { getFilmsWithGenreAction, resetFilterGenreAction } from '../../action';
import { useAppDisptach } from '../../hooks';

function Logo() {
  const disptch = useAppDisptach();
  const clickHandler = (evt: React.MouseEvent<HTMLDivElement>) => {
    evt.preventDefault();
    disptch(resetFilterGenreAction());
    disptch(getFilmsWithGenreAction());
  };
  return (
    <div onClick={clickHandler} className="logo">
      <Link to="/" className="logo__link">
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
}

export default Logo;
