import { RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/errors_actions';
import * as _ from 'lodash';

const _nullErrors = Object.freeze({
  sessionErrors: [],
  usernameErrors: [],
  passwordErrors: []
});

const ErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);
  let newState = _.merge({}, state);
  switch(action.type) {
    case RECEIVE_ERRORS:
      newState.sessionErrors = action.errors.sessionErrors;
      return newState;
    case CLEAR_ERRORS:
      return _nullErrors;
    default:
      return state;
  }
};

export default ErrorsReducer;
