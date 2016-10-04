import {
  receiveCurrentUser,
  LOGIN,
  LOGOUT,
  SIGNUP
} from '../actions/session_actions';
import { receiveErrors, clearErrors } from '../actions/errors_actions';
import { login, signup, logout } from '../util/session_api_util';

const SessionMiddleware = ({ getState, dispatch }) => next => action => {
  const onSuccess = user => {
    dispatch(clearErrors());
    dispatch(receiveCurrentUser(user));
  };
  const onError = messages => {
    console.log(messages);
    const errorMessages = messages.responseJSON
    dispatch(receiveErrors(errorMessages));
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
