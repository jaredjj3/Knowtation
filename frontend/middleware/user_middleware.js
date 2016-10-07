import { REQUEST_USER, UPDATE_USER, receiveUser } from '../actions/user_actions';
import { requestUser, updateUser } from '../util/user_api_util';
import { receiveErrors } from '../actions/errors_actions';

const UserMiddleware = ({ getState, dispatch}) => next => action => {
  const onSuccess = user => dispatch(receiveUser(user));
  const onError = messages => {
    const errorMessages = messages.responseJSON;
    dispatch(receiveErrors(errorMessages));
  };

  switch(action.type) {

    case REQUEST_USER:
      requestUser(action.id, onSuccess, onError);
      return next(action);

    case UPDATE_USER:
      updateUser(action.user, onSuccess, onError);
      return next(action);

    default:
      return next(action);
  }

};

export default UserMiddleware;
