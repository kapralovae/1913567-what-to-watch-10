import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Film } from '../../mocks/films';
import VideoPlayer from '../videoplayer/videoPlayer';

type CardType = {
  item: Film;
}
function CardFilm ({item}: CardType): JSX.Element{
  const {src, title, id, video} = item;
  const [isFosued, setIsFocused] = useState(false);

  const focusAndBlurHandler = () => {
    setIsFocused(!isFosued);
  };

  return(
    <article className="small-film-card catalog__films-card">
      <div onMouseOver={focusAndBlurHandler} onMouseOut={focusAndBlurHandler} id={`${id}`} className="small-film-card__image">
        {isFosued ? <VideoPlayer video={video}></VideoPlayer> : <img src={src} alt={title} width="280" height="175" />}
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${id}`}>{title}</Link>
      </h3>
    </article>);
}

export default CardFilm;
