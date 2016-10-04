import {
  receiveCurrentUser,
  receiveErrors,
  LOGIN,
  LOGOUT,
  SIGNUP
} from '../actions/session_actions';
import { login, signup, logout } from '../util/session_api_util';

const SessionMiddleware = ({ getState, dispatch }) => next => action => {
  const success = user => disatch(receiveCurrentUser(user));
  const error = messages => {
    const errorMessages = messages.responseJSON
    dispatch(receiveErrors(errors));
  }

  switch(action.type) {
    case LOGIN:
      login(action.user, success, error);
      return next(action);
    case LOGOUT:
      logout(() => next(action));
      break;
    case SIGNUP:
      signup(action.user, success, error);
      return next(action);
    default:
      return next(action);
  }
};

export default SessionMiddleware;
