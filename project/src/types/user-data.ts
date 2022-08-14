export type UserData = {
  id: number;
  email: string;
  token: string;
};

export type UserComment = {
  id: string;
  rating: number;
  comment: string;
};

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
