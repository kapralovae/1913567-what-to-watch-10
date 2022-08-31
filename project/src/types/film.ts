export type Film = {
  backgroundColor: string;
  backgroundImage: string;
  description: string;
  director: string;
  genre: string;
  id: number;
  isFavorite: boolean;
  name: string;
  posterImage: string;
  previewImage: string;
  previewVideoLink: string;
  rating: number;
  released: number;
  runTime: number;
  scoresCount: number;
  starring: string[];
  videoLink: string;
}

export type Films = Film[];

export type ResponseComment = {
  comment: string
  date: string
  id: number
  rating: number
  user: {
  id: number
  name: string
  }
};

export type ResponseComments = ResponseComment[];

export type ListFilmsType = {
  films: Films;
}

export type FavoriteFilmType = {
  filmId: number;
  status: number;
  promoId: number;
}
