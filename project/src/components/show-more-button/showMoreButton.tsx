import { useAppDisptach, useAppSelector } from '../../hooks';
import { getMoreFilms } from '../../store/film-data/film-data';
import { getIsRenderShowMoreButton } from '../../store/film-data/selectors';

type ShowMoreType = {
  isMyListPage: boolean;
};

function ShowMoreButton ({isMyListPage}: ShowMoreType) {
  const isRenderButton = useAppSelector(getIsRenderShowMoreButton);
  const dispatch = useAppDisptach();

  const clickButtonHandler = () => {
    dispatch(getMoreFilms());
  };

  return (
    isMyListPage ? null :
      <div className="catalog__more">
        <button onClick={clickButtonHandler} className={isRenderButton ? 'catalog__button' : 'visually-hidden'} type="button">Show more</button>
      </div>
  );
}

export {ShowMoreButton};
