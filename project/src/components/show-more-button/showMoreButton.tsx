import { getMoreFilms } from '../../action';
import { useAppDisptach, useAppSelector } from '../../hooks';

function ShowMoreButton () {
  const isRenderButton = useAppSelector((state) => state.isRenderShowMoreButton);
  const dispatch = useAppDisptach();

  const clickButtonHandler = () => {
    dispatch(getMoreFilms());
  };
  return (
    <div className="catalog__more">
      <button onClick={clickButtonHandler} className={isRenderButton ? 'catalog__button' : 'visually-hidden'} type="button">Show more</button>
    </div>
  );
}

export {ShowMoreButton};
