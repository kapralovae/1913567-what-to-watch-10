import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Film } from '../../types/film';
import VideoPlayer from '../videoplayer/videoPlayer';


type CardType = {
  item: Film;
}
function CardFilm ({item}: CardType): JSX.Element{
  const {previewImage, name, id, previewVideoLink} = item;
  const [isFosued, setIsFocused] = useState(false);

  const focusAndBlurHandler = () => {
    setIsFocused(!isFosued);
  };

  return(
    <article className="small-film-card catalog__films-card">
      <div onMouseOver={focusAndBlurHandler} onMouseOut={focusAndBlurHandler} id={`${id}`} className="small-film-card__image">
        {isFosued ? <VideoPlayer video={previewVideoLink}></VideoPlayer> : <img src={previewImage} alt={name} width="280" height="175" />}
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${id}`}>{name}</Link>
      </h3>
    </article>);
}

export default CardFilm;
