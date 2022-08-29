export enum AppRoute {
  SignIn = '/login',
  MyList = '/mylist',
  Films = '/films',
  Root = '/',
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
  Favorite = '/favorite',
  Promo = '/promo',
}

export enum NameSpace{
  User = 'User',
  Data = 'Data',
  Process = 'Process',
}

export const COUNT_RENDER_FILMS = 8;

export const COUNT_RENDER_MORE_FILMS = 16;

export const TIMEOUT_SHOW_ERROR = 2000;
