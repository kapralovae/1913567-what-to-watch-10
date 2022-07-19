import { useRef } from 'react';

type VideoPlayerType = {
  video: string;
}

function VideoPlayer ({video}: VideoPlayerType) {
  const playRef = useRef<HTMLVideoElement>(null);

  const playVideoTimeout = () => {
    playRef.current && playRef.current.play();
  };
  setTimeout(playVideoTimeout, 1000);

  return(
    <video ref={playRef} src={video} muted loop width='280' height='175' poster="https://www.gottabemobile.com/wp-content/uploads/2017/12/Screen-Shot-2017-12-21-at-11.24.47-AM.jpg">

    </video>
  );
}
export default VideoPlayer;
