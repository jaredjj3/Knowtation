import { REQUEST_USER, receiveUser } from '../actions/user_actions';
import { requestUser } from '../util/user_api_util';
import { receiveErrors } from '../actions/errors_actions';

const UserMiddleware = ({ getState, dispatch}) => next => action => {

  switch(action.type) {
    case REQUEST_USER:
      const onSuccess = user => dispatch(receiveUser(user));
      const onError = messages => {
        const errorMessages = messages.responseJSON;
        dispatch(receiveErrors(errorMessages));
      };
      requestUser(action.id, onSuccess, onError);
      return next(action);

    default:
      return next(action);
  }

};

export default UserMiddleware;
