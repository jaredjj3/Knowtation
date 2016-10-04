import { RECEIVE_ERRORS } from '../actions/errors_actions';
import merge from 'lodash/merge';

const _nullErrors = Object.freeze({
  usernameErrors: [],
  passwordErrors: []
});

const ErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ERRORS:
      return merge({}, state, { errors: action.errors });
    default:
      return state;
  }
};

export default ErrorsReducer;
