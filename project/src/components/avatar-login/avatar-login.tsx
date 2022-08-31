import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDisptach, useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/api-actions';
import { getAuthorizationStatus } from '../../store/user-process/selectors';

function AvatarLogin () {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const dispatch = useAppDisptach();
  const navigate = useNavigate();

  const clickHandler = (evt: React.MouseEvent<HTMLLIElement>) => {
    evt.preventDefault();
    if (authorizationStatus === AuthorizationStatus.Auth) {
      dispatch(logoutAction());
    }
  };

  const clickToMyListHandler = (evt: React.MouseEvent<HTMLDivElement>) => {
    evt.preventDefault();
    navigate(AppRoute.MyList);
  };

  return(
    <ul className="user-block">
      {authorizationStatus === AuthorizationStatus.Auth ?
        <li className="user-block__item">
          <div onClick={clickToMyListHandler} className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
          </div>
        </li>
        : null}
      <li onClick={clickHandler} className="user-block__item">
        <Link to={authorizationStatus === AuthorizationStatus.Auth ? AppRoute.Root : AppRoute.SignIn} className="user-block__link">{authorizationStatus === AuthorizationStatus.Auth ? 'Sign out' : 'Sign in'}</Link>
      </li>
    </ul>
  );
}

export {AvatarLogin};
