import {
  receiveCurrentUser,
  receiveErrors,
  LOGIN,
  LOGOUT,
  SIGNUP
} from '../actions/session_actions';
import { login, signup, logout } from '../util/session_api_util';

const SessionMiddleware = ({ getState, dispatch }) => next => action => {
  const onSuccess = user => disatch(receiveCurrentUser(user));
  const onError = messages => {
    const errorMessages = messages.responseJSON
    dispatch(receiveErrors(errors));
  };

  switch(action.type) {
    case LOGIN:
      login(action.user, onSuccess, onError);
      return next(action);
    case LOGOUT:
      logout(() => next(action));
      break;
    case SIGNUP:
      signup(action.user, onSuccess, onError);
      return next(action);
    default:
      return next(action);
  }
};

export default SessionMiddleware;
