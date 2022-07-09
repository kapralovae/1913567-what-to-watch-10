import MainPage from '../../pages/main-page/main-page';

type AppProps = {
  nameMainFilm: string;
  genreMainFilm: string;
  dateMainFilm: number;
}

function App({nameMainFilm, genreMainFilm, dateMainFilm}: AppProps): JSX.Element {
  return (
    <MainPage nameMainFilm = {nameMainFilm} genreMainFilm = {genreMainFilm} dateMainFilm = {dateMainFilm}/>
  );
}

export default App;
