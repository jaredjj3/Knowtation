import { RECEIVE_CURRENT_USER, LOGOUT } from '../actions/session_actions';
import * as _ from 'lodash';

const _nullUser = Object.freeze({
  currentUser: null,
});

const SessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return _.merge({}, state, { currentUser: action.currentUser });
    case LOGOUT:
      return _.merge({}, _nullUser);
    default:
      return state;
  }
};

export default SessionReducer;
