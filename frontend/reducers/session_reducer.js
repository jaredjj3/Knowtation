import { RECEIVE_CURRENT_USER, LOGOUT } from '../actions/session_actions';
import merge from 'lodash/merge';

const _nullUser = Object.freeze({
  currentUser: null,
});

const SessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { currentUser: action.currentUser });
    case LOGOUT:
      return merge({}, _nullUser);
    default:
      return state;
  }
};

export default SessionReducer;
