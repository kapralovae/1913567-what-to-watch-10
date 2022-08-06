import { memo } from 'react';
import { AvatarLogin } from '../avatar-login/avatar-login';
import Logo from '../logo/logo';

function Header () {
  return(
    <header className="page-header film-card__head">
      <Logo />
      <AvatarLogin />
    </header>);
}

export default memo(Header, (prevProps, nextProps) => prevProps === nextProps);
