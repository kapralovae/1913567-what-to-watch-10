export enum AppRoute {
  SignIn = '/login',
  MyList = '/mylist',
  Films = '/films',
  Root = '/',
  DevArtist = '/dev-artist',
  DevGenre = '/dev-genre'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum APIRoute {
  Films = '/films',
  Login = '/login',
  Logout = '/logout',
  Comment = '/comments',
}

export enum NameSpace{
  User = 'User',
  Data = 'Data',
  Process = 'Process',
}

export const COUNT_RENDER_FILMS = 8;

export const TIMEOUT_SHOW_ERROR = 2000;
