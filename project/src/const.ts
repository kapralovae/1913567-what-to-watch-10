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

export const SECOND_IN_MINUTE = 60;

export const SECOND_IN_HOUR = 3600;

export const DECIMAL_PLACES = 3;

export const FULL_TIME_IN_PERCENT = 100;

export const TENTH_SHARE = 10;

export const REGULAR_LOGIN = /\w+@\w+\.\w+/;

export const REGULAR_PASSWORD = /(?=.*[a-zа-яA-ZА-Я])(?=.*[0-9])/;

export function getRegularForCheckId (id: number, countFilms: number) {
  return `^[1-9]$|^[${Math.floor(id / TENTH_SHARE)}][${Number(id) % TENTH_SHARE}]$|^(${countFilms})`;
}

