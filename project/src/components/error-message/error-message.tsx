import { AuthorizationStatus } from '../../const';
import {useAppSelector} from '../../hooks';
import { getError } from '../../store/film-data/selectors';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import './error-message.css';

function ErrorMessage(): JSX.Element | null {
  const error = useAppSelector(getError);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return authorizationStatus === AuthorizationStatus.NoAuth && error ? <div className='error-message'>{error}</div> : null;

}

export default ErrorMessage;
