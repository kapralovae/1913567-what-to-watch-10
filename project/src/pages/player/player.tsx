import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppDisptach, useAppSelector } from '../../hooks';
import { fetchAloneFilmAction } from '../../store/api-actions';
import { getAloneFilmFromServer } from '../../store/film-process/selectors';

function Player() {

  const dispatch = useAppDisptach();
  const {id} = useParams();

  useEffect(() => {
    if (id) {
      dispatch(fetchAloneFilmAction(id));
    }
  }, [dispatch, id]);

  const navigate = useNavigate();
  const film = useAppSelector(getAloneFilmFromServer);

  const clickExitHandler = (evt: React.MouseEvent) => {
    evt.preventDefault();
    navigate(AppRoute.Root);
  };

  const video = useRef<HTMLVideoElement>(null);
  const [stateVideo, setStateVideo] = useState({
    playText: 'Play',
    useLink: '#play-s',
    viewBox: '0 0 19 19',
    widthButton: '19',
    heightButton: '19',
    timeValue: video.current?.currentTime ? Math.floor(video.current.currentTime) : 0,
  });

  useEffect(() => {
    setStateVideo({
      ...stateVideo,
      timeValue: video.current?.currentTime ? Math.floor(video.current.currentTime) : 0
    });
  }, []);

  function getDurationVideo (duration: number | undefined) {
    if (duration) {
      const time = Math.floor(duration);
      return `${Math.floor(time / 3600)}:${Math.floor(time % 3600 / 60)}:${time % 60}`;
    }
  }

  const clickPlayPauseHandler = () => {
    if (video.current?.paused) {
      setStateVideo({
        ...stateVideo,
        playText: 'Pause',
        useLink: '#pause',
        viewBox: '0 0 14 21',
        widthButton: '14',
        heightButton: '21',
      });
      video.current?.play();
    } else {
      setStateVideo({
        ...stateVideo,
        playText: 'Play',
        useLink: '#play-s',
        viewBox: '0 0 19 19',
        widthButton: '19',
        heightButton: '19',
      });
      video.current?.pause();

    }

  };

  return (
    <div className="player">
      <video src={film.videoLink} ref={video} className="player__video" poster={film.posterImage}>
        {/* <source src={film.videoLink} type="video/mp4"></source> */}
      </video>

      <button onClick={clickExitHandler} type="button" className="player__exit">Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={`${video.current?.currentTime ? Math.floor(video.current?.currentTime) : 0}`} max={`${video.current?.duration}`}></progress>
            <div className="player__toggler" style={{
              left: `${video.current?.currentTime ? Math.floor(video.current?.currentTime) : 0}`,
            }}
            >Toggler
            </div>
          </div>
          <div className="player__time-value">{getDurationVideo(video.current?.duration)}</div>
        </div>

        <div className="player__controls-row">
          <button onClick={clickPlayPauseHandler} type="button" className="player__play">
            <svg viewBox={stateVideo.viewBox} width={stateVideo.widthButton} height={stateVideo.heightButton}>
              <use xlinkHref={stateVideo.useLink}></use>
            </svg>
            <span>{stateVideo.playText}</span>
          </button>
          <div className="player__name">Transpotting</div>

          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Player;
